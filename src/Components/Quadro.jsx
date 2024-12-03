import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaintBrush, 
    faHeadset, 
    faComments, 
    faBrain, 
    faTasks, 
    faBullhorn, 
    faLightbulb, 
    faUsers, 
    faClock, 
    faHandshake 
} from '@fortawesome/free-solid-svg-icons';

// Lista de habilidades (exemplo)
const skills = [
    { icon: <FontAwesomeIcon icon={faPaintBrush} />, text: 'Design' },
    { icon: <FontAwesomeIcon icon={faHeadset} />, text: 'Suporte' },
    { icon: <FontAwesomeIcon icon={faComments} />, text: 'Comunicação' },
    { icon: <FontAwesomeIcon icon={faBrain} />, text: 'Criatividade' },
    { icon: <FontAwesomeIcon icon={faTasks} />, text: 'Gerenciamento' },
    { icon: <FontAwesomeIcon icon={faBullhorn} />, text: 'Marketing' },
    { icon: <FontAwesomeIcon icon={faLightbulb} />, text: 'Inovação' },
    { icon: <FontAwesomeIcon icon={faUsers} />, text: 'Trabalho em equipe' },
    { icon: <FontAwesomeIcon icon={faClock} />, text: 'Prazos' },
    { icon: <FontAwesomeIcon icon={faHandshake} />, text: 'Networking' },
];

// Componente principal
const Quadro = () => {
    return (
        <div className="flex flex-col items-center p-4 space-y-4">
            <h1 class="text-[7vw] font-bold text-blue-400 mb-[4%] mt-[7%] text-center 
transition-transform transform hover:scale-105 
animate-fade-in mobile:text-[10vw]">
Soft Skills</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-4xl text-blue-500 mb-2">{skill.icon}</div>
                        <span className="text-center font-semibold">{skill.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quadro;