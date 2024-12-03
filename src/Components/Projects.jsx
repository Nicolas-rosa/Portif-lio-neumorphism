
import React from 'react';

const projects = [
    {
        title: "Cadastro CRUD",
        description: "This web system offers a user management interface with an aesthetic inspired by old computer terminals, combined with a green color palette. It provides functionalities for creating, reading, updating, and deleting users.",
        imageUrl: "https://via.placeholder.com/600x400?text=Cadastro+CRUD",
        imageAlt: "Cadastro CRUD Screenshot",
        rating: 4,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/Cadastro-CRUD",
        techs: ["php"],
        tags: ["web", "CRUD", "PHP"]
    },
    {
        title: "Buscar CEP",
        description: "Java app for searching zip codes via web service. Queries zip code and returns full address using XML/dom4j. Simple and efficient.",
        imageUrl: "https://via.placeholder.com/600x400?text=Buscar+CEP",
        imageAlt: "Buscar CEP Screenshot",
        rating: 3,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/Buscar_Cep",
        techs: ["java"],
        tags: ["Java", "API", "Zip Code"]
    },
    {
        title: "Pokedex",
        description: "My time has come as a programmer to make a pokedex, here is my version!!",
        imageUrl: "https://via.placeholder.com/600x400?text=Pokedex",
        imageAlt: "Pokedex Screenshot",
        rating: 5,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/Pokedex",
        techs: ["javascript"],
        tags: ["JavaScript", "Pokedex", "Web"]
    },
    {
        title: "RPG MASTER",
        description: "This website serves as a valuable resource for Dungeons & Dragons (D&D) players, providing tools to help them create and customize their characters.",
        imageUrl: "https://via.placeholder.com/600x400?text=RPG+MASTER",
        imageAlt: "RPG MASTER Screenshot",
        rating: 4,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/Rpg-MASTER",
        techs: ["javascript"],
        tags: ["D&D", "RPG", "Character Creator", "JavaScript"]
    },
    {
        title: "Projeto Extensão",
        description: "Site made in Vite, React and Tailwind to make Entrepreneurship E-books available online.",
        imageUrl: "https://via.placeholder.com/600x400?text=Projeto+Extensão",
        imageAlt: "Projeto Extensão Screenshot",
        rating: 4,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/projeto-extens-o",
        techs: ["react"],
        tags: ["E-books", "Entrepreneurship", "React", "Vite", "Tailwind"]
    },
    {
        title: "To-Do List",
        description: "To-Do List based on anime aesthetics.",
        imageUrl: "https://via.placeholder.com/600x400?text=To-Do+List",
        imageAlt: "To-Do List Screenshot",
        rating: 3,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/To-Do-List",
        techs: ["css"],
        tags: ["To-Do List", "CSS", "Anime"]
    },
    {
        title: "Exercícios JS",
        description: "Repository with basic JavaScript exercises. Covers conditional structures (if, else), loops (for, while), and functions. Includes practical examples such as discount calculations, grade classifications.",
        imageUrl: "https://via.placeholder.com/600x400?text=Exercícios+JS",
        imageAlt: "Exercícios JS Screenshot",
        rating: 4,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/exerc-cios-JS",
        techs: ["javascript"],
        tags: ["JavaScript", "Exercises", "Learning"]
    },
    {
        title: "Prisma - Recomendação de Filmes",
        description: "Project created following the Alura immersion rules of 09/2024. A website that recommends movies based on an actor, genre, or movie title entered by the user.",
        imageUrl: "https://via.placeholder.com/600x400?text=Prisma+Recomendação+de+Filmes",
        imageAlt: "Prisma Screenshot",
        rating: 5,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/Prisma-recomendação-de-filmes",
        techs: ["react", "javascript"],
        tags: ["Movies", "Recommendation", "React"]
    },
    {
        title: "Gerador de Certificados em Pytho ",
        description: "Um projeto que gera certificados personalizados com base nas informações de tabelas de execel do usuário, permitindo a criação de documentos de forma rápida e eficiente.",
        imageUrl: "https://via.placeholder.com/600x400?text=Certificat+Gerado+por+Workbook",
        imageAlt: "Certificat Screenshot",
        rating: 5,
        siteUrl: null,
        repoUrl: "https://github.com/Nicolas-rosa/certificat-generated-by-workbook",
        techs: ["javascript", "html", "css"],
        tags: ["Certificados", "Documentos", "JavaScript"]
    }, ]

const techIcons = {
    "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "php": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "react": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
};

function StarRating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
    ));
    return <div>{stars}</div>;
}

function ProjectCard({ project }) {
 return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-[#e0e0e0] opacity-90 hover:shadow-xl transition-shadow duration-300">
            <img className="w-full" src={project.imageUrl} alt={project.imageAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-3xl text-[#40bfff] mb-2 animate-bounce">{project.title}</div>
                <p className="text-[#4a90e2] text-base">{project.description}</p>
                <div className="mt-2">
                    <StarRating rating={project.rating} />
                </div>
                <div className="mt-4">
                    <a href={project.repoUrl} className="text-[#007bff] hover:underline">Repositório</a>
                </div>
                <div className="mt-4 flex space-x-2">
                    {project.techs.map((tech, techIndex) => {
                        if (typeof tech === 'string' && techIcons[tech.toLowerCase()]) {
                            return (
                                <img key={techIndex} src={techIcons[tech.toLowerCase()]} alt={`${tech} logo`} className="w-12 h-12 rounded-full border-2 border-[#40bfff] transition-transform transform hover:scale-110" />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                ))}
            </div>
        </div>
    );
}

function AppProject() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedTag, setSelectedTag] = React.useState("");

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "" || project.tags.includes(selectedTag))
    );

    const allTags = [...new Set(projects.flatMap(project => project.tags))];

    return (
        <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black text-center my-8 text-blue-400">Meus Projetos</h1>
        <div className="flex justify-center mb-8">
            <input
                type="text"
                placeholder="Search projects..."
                className="px-4 py-2 border border-[#d1d5db] rounded-lg w-1/2 min-w-64 focus:outline-none focus:ring-2 focus:ring-[#40bfff] focus:border-transparent transition duration-300 shadow-md hover:shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <div className="flex justify-center mb-8">
    <select
        className=" border border-[#0064f9a3] rounded-lg w-[9vw] min-w-16 focus:outline-none focus:ring-2 focus:ring-[#40bfff] focus:border-transparent transition duration-300 shadow-md hover:shadow-lg appearance-none bg-[#c7c7c7] text-[#4670a7] cursor-pointer"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
    >
        <option value="" className="bg-[#f8fafc] hover:text-blue-300 text-[1vw]">All Tags</option>
        {allTags.map((tag, index) => (
            <option key={index} value={tag} className="bg-[#f8fafc]">{tag}</option>
        ))}
    </select>
    <div className="absolute right-0 mr-4 mt-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
        </svg>
    </div>
</div>
            <div className="flex flex-wrap justify-center">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default AppProject;