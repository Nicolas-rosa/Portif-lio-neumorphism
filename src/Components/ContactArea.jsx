import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

const Body = styled.div`
    font-family: 'Roboto', sans-serif;
`;

const Neumorphism = styled.div`
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.6);
    }
`;

const FadeIn = styled.div`
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const TitleAnimation = styled.h2`
    animation: bounceIn 1s ease-in-out;

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const ParagraphAnimation = styled.p`
    animation: slideIn 1s ease-in-out;

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const Icon = styled.div`
    border: 2px solid rgba(64, 191, 255, 0.5);
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        animation: pulse 0.6s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const LazyImage = ({ src, alt, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : ""}
            alt={alt}
            className={className}
            loading="lazy"
        />
    );
};

function Contact() {
    const handleClick = (link) => {
        window.open(link, '_blank');
    };

    const linkGIT = "https://github.com/Nicolas-rosa";
    const linkGMAIL = "mailto:nicolasfrancacastrorosa@gmail.com";
    const linkLIN = "https://www.linkedin.com/in/nicolas-rosa-dev";

    return (
        <Body className="max-w-[80vw] mx-auto p-6 bg-[#e0e0e0] shadow-md rounded-lg mt-10 bg-opacity-90 border border-blue-700 flex flex-col items-center">
            <TitleAnimation className="text-3xl font-bold mb-4 text-center text-blue-500">Prazer te Conhecer!!</TitleAnimation>
            <FadeIn>
                <div className="flex flex-col items-center">
                    <div className="relative flex justify-center mb-6">
                    <Neumorphism className="flex items-center justify-center rounded-full hover:bg-[#40bfff6e]  w-48 h-48 md:w-[24vw] md:h-[24vw]">
                        <LazyImage
                            alt="Foto do desenvolvedor"
                            className="rounded-full shadow-md object-cover object-top hover:ring-2 hover:ring-blue-500 w-44 h-44 md:w-[22vw] md:h-[22vw] transition-all duration-500"
                             src="https://i.ibb.co/X5v1mRh/Whats-App-Image-2024-06-08-at-21-41-41.jpg"
                            />
                        </Neumorphism>

                        <div className="absolute top-0 -right-10 md:right-[-20%] flex flex-col items-center space-y-2 md:space-y-4">
                         <Icon className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62]">
                                <a 
                                    href="#" 
                                    className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62] hover:scale-110 transition-all duration-500 delay-200"
                                    onClick={() => handleClick(linkGIT)}
                                >
                                    <svg 
                                       className="w-6 h-6 sm:w-8 sm:h-8" 
                                        fill="currentColor" 
                                        viewBox="0 0 1024 1024"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                </a>
                            </Icon>
                             <Icon className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62]">
                                <a 
                                    href="#" 
                                    className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62] hover:scale-110 transition-all duration-500 delay-200"
                                    onClick={() => handleClick(linkGMAIL)}
                                >
                                    <svg 
                                        className="w-6 h-6 sm:w-8 sm:h-8"
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        fill="none"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </a>
                            </Icon>
                             <Icon className="w-12 h-12 sm:w-16 sm:h-16 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62]">
                                <a 
                                    href="#" 
                                    className="w-[8vw] h-[8vw] sm:w-12 sm:h-12 bg-[#c7c7c7] rounded-full flex items-center justify-center neumorphism hover:bg-[#47c2ff62] hover:scale-110 transition-all duration-500 delay-200"
                                    onClick={() => handleClick(linkLIN)}
                                >
                                    <svg 
                                       className="w-6 h-6 sm:w-8 sm:h-8" 
                                        fill="currentColor" 
                                        viewBox="0 0 960 1000"
                                    >
                                        <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98" />
                                    </svg>
                                </a>
                            </Icon>
                        </div>
                    </div>
                    <ParagraphAnimation className="text-base md:text-lg text-blue-400 font-extrabold mb-6 text-center px-4 md:px-0">
                    💻 Criei este site para apresentar minhas habilidades, conquistas e conhecimentos. Este espaço é, acima de tudo, um reflexo da minha vontade de fazer as coisas de maneiras diferentes, explorar novos designs e me aprofundar em diversas áreas. 🎨✨                    </ParagraphAnimation>
                </div>
            </FadeIn>
        </Body>
    );
}

export default Contact;