import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Award, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Github 
} from 'lucide-react';

const personalInfo = {
  name: 'Nicolas França Castro Rosa',
  age: 19,
  contact: {
    email: 'nicolasfrancacastrorosa@gmail.com',
    phone: '(84) 98645-5285',
    location: 'Natal, RN',
    linkedin: 'https://www.linkedin.com/in/nicolas-rosa-dev',
    github: 'https://github.com/nicolas-rosa'
  }
};

const skills = [
  'Desenvolvimento com React e Tailwind',
  'Domínio do Corel Draw e ferramentas de Design',
  'Suporte eficiente de TI',
  'Comunicação limpa e precisa',
  'Facilidade em Aprender',
  'Gerenciamento de Projetos',
  'Marketing Digital',
  'Lógica Algorítmica'
];

const languages = [
  { language: 'Inglês', level: 'Intermediário' },
  { language: 'Norueguês', level: 'Básico' }
];

const experiences = [
  {
    title: 'Desenvolvedor Junior e Responsável pelo TI',
    company: 'Ateliê Ouro Mar',
    period: 'Março 2024 - Atualmente',
    highlights: [
      'Desenvolvimento Web com React, Tailwind e Node.js',
      'Implementação de sistemas de segurança e ERP',
      'Criação de conteúdo para redes sociais e campanhas de marketing digital',
      'Gerenciamento de projetos com ferramentas como Corel Draw e Canvas'
    ]
  },
  {
    title: 'Auxiliar de Faturamento',
    company: 'Loja Lampadinha',
    period: 'Março 2024 - Maio 2024',
    highlights: [
      'Domínio do sistema Winthor para emissão de notas fiscais',
      'Suporte de TI e resolução de problemas técnicos',
      'Atendimento ao público e desenvolvimento de habilidades de comunicação',
      'Organização e gestão de documentos da filial'
    ]
  },
  {
    title: 'Auxiliar Administrativo',
    company: 'Fábrica da Vivara (CONIPA)',
    period: 'Agosto 2022 - Novembro 2023',
    highlights: [
      'Suporte a projetos em fase de testes com foco em organização e controle de produção',
      'Criação e manutenção de planilhas de registros de ordens de produção',
      'Experiência prática em acabamento de joias e lapidação de gemas'
    ]
  }
];

const education = {
  current: 'Graduando em Análise e Desenvolvimento de Sistemas - UNINASSAU',
  certifications: [
    { name: 'Capacitação Administrativa', hours: 400, year: 2023, organization: 'ITEMM' },
    { name: 'Imersão Inteligência Artificial', year: 2024, organization: 'Alura' },
    { name: 'Excel Avançado', hours: 12, year: 2023, organization: 'ITEMM' },
    { name: 'Programação Neurolinguística', hours: 10, year: 2023, organization: 'ITEMM' },
    { name: 'Gestão de Carreira', hours: 7, year: 2023, organization: 'ITEMM' },
    { name: 'Educação Financeira', hours: 3, year: 2023, organization: 'ITEMM' },
    { name: 'Pacote Office', hours: 6, year: 2023, organization: 'ITEMM' },
    { name: 'Lógica Algorítmica em C', year: 2024, organization: 'Cisco Academy' },
    { name: 'Curso de Inglês', year: 2024, organization: 'APRENDA MAIS MEC' },
    { name: 'Jornada Python', hours: 8, year: 2024, organization: 'Hashtag' },
    { name: 'Imersão Dev', year: 2024, organization: 'Alura' }
  ]
};

const Card1 = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const renderSection = () => {
    const sections = {
      experience: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-blue-600 
            animate-fade-in-down">
            <Briefcase className="mr-2 text-blue-500 animate-pulse" /> Experiência Profissional
          </h2>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-[#c7c7c7] p-4 rounded-lg 
              shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]
              transform transition duration-300 hover:scale-[1.02] hover:shadow-xl
              hover:bg-blue-50 group"
            >
              <h3 className="font-bold text-blue-700 group-hover:text-blue-900 transition">{exp.title}</h3>
              <p className="text-blue-500 group-hover:text-blue-600 transition">{exp.company} | {exp.period}</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="transition hover:text-blue-600 hover:pl-2">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
      education: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-blue-600 
            animate-fade-in-down">
            <GraduationCap className="mr-2 text-blue-500 animate-pulse" /> Educação
          </h2>
          <div className="bg-[#c7c7c7] p-4 rounded-lg 
            shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]
            transform transition duration-300 hover:scale-[1.02] hover:shadow-xl
            hover:bg-blue-50 group">
            <h3 className="font-bold text-blue-700 group-hover:text-blue-900 transition">Formação Atual</h3>
            <p className="text-gray-700 group-hover:text-blue-600 transition">{education.current}</p>
          </div>
          <div className="bg-[#c7c7c7] p-4 rounded-lg 
            shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]
            transform transition duration-300 hover:scale-[1.02] hover:shadow-xl
            hover:bg-blue-50 group">
            <h3 className="font-bold flex items-center text-blue-700 group-hover:text-blue-900 transition">
              <Award className="mr-2 text-blue-500" /> Certificações
            </h3>
            {education.certifications.map((cert, index) => (
              <div 
                key={index} 
                className="mt-2 text-gray-700 
                transition hover:text-blue-600 hover:pl-2"
              >
                <p>{cert.name} ({cert.organization}, {cert.year})</p>
                {cert.hours && <p className="text-xs text-blue-500">{cert.hours} horas</p>}
              </div>
            ))}
          </div>
        </div>
      ),
      skills: (
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center text-blue-600 
            animate-fade-in-down">
            <Languages className="mr-2 text-blue-500 animate-pulse" /> Habilidades
          </h2>
          <div className="bg-[#c7c7c7] p-4 rounded-lg 
            shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]
            transform transition duration-300 hover:scale-[1.02] hover:shadow-xl
            hover:bg-blue-50 group">
            <h3 className="font-bold text-blue-700 group-hover:text-blue-900 transition">Competências Técnicas</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {skills.map((skill, index) => (
                <li 
                  key={index} 
                  className="transition hover:text-blue-600 hover:pl-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#c7c7c7] p-4 rounded-lg 
            shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]
            transform transition duration-300 hover:scale-[1.02] hover:shadow-xl
            hover:bg-blue-50 group">
            <h3 className="font-bold text-blue-700 group-hover:text-blue-900 transition">Idiomas</h3>
            {languages.map((lang, index) => (
              <p 
                key={index} 
                className="text-gray-700 
                transition hover:text-blue-600 hover:pl-2"
              >
                {lang.language}: {lang.level}
              </p>
            ))}
          </div>
        </div>
      )
    };
    return sections[activeSection] || null;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-[#c7c7c7] min-h-screen">
      <div className="bg-[#c7c7c7] rounded-lg 
        shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6] p-4 mb-4
        animate-fade-in-down">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-blue-700 
              animate-bounce-in hover:text-blue-900 transition">
              {personalInfo.name}
            </h1>
            <p className="text-blue-500 text-lg animate-pulse">{personalInfo.age} anos</p>
          </div>
          <div className="text-center text-sm md:text-base">
            {Object.entries(personalInfo.contact).map(([key, value], index) => (
              <div 
                key={index} 
                className="flex items-center justify-center md:justify-end mb-2 md:mb-0
                  hover:scale-105 transition duration-300"
              >
                {key === 'email' && <Mail className="mr-2 text-blue-500 animate-pulse" />}
                {key === 'phone' && <Phone className="mr-2 text-blue-500 animate-pulse" />}
                {key === 'location' && <MapPin className="mr-2 text-blue-500 animate-pulse" />}
                {key === 'linkedin' && <Linkedin className="mr-2 text-blue-500 animate-pulse " />}
                {key === 'github' && <Github className="mr-2 text-blue-500 animate-pulse" />}
                {key === 'email' ? (
                  <a href={`mailto:${value}`} className="text-blue-700 hover:underline">{value}</a>
                ) : (
                  <a href={key === 'linkedin' ? value : `https://github.com/${value}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{value}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mb-4">
        {['experience', 'education', 'skills'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`w-full sm:w-auto px-4 py-2 rounded-lg transition duration-200 ease-in-out 
              ${activeSection === section 
                ? 'bg-blue-200 text-blue-800 shadow-[inset_3px_3px_6px_#a8a8a8,inset_-3px_-3px_6px_#e6e6e6]' 
                : 'bg-[#c7c7c7] text-blue-700 shadow-[5px_5px_10px_#a8a8a8,-5px_-5px_10px_#e6e6e6]'} 
              hover:shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 transition-transform transform hover:scale-105`}
          >
            {section === 'experience' ? 'Experiência' : section === 'education' ? 'Educação' : 'Habilidades'}
          </button>
        ))}
      </div>

      <div className="w-full">
        {renderSection()}
      </div>
    </div>
  );
};

export default Card1;