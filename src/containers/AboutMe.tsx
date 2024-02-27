import { NameSection } from "../components/NameSection";
import { useState, useEffect } from 'react';

export function AboutMe() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos > 500; // Ajuste este valor conforme necessário
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} py-44 pl-32 bg-gradient-to-r from-[#1e2a3a] rounded-l-full`}>
      <NameSection name="Sobre Mim" />
      <p className="text-lg indent-6">

        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quas quo nesciunt, voluptas doloremque quidem reprehenderit animi corporis eligendi quos tenetur id. Quis illum sequi molestias, praesentium a laborum quam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quas quo nesciunt, voluptas doloremque quidem reprehenderit animi corporis eligendi quos tenetur id. Quis illum sequi molestias, praesentium a laborum quam? */}

        <span className="text-3xl pl-0.5 pr-[.7px]">A</span>
        tualmente estudo Front-end pela EBAC – 
        Escola Britânica de Artes Criativas e Tecnologia.
        Estou aprimorando minhas habilidades técnicas e 
        competências com o curso Desenvolvimento Full Stack Python. 
        No momento estudo FontEnd, com o intuito de buscar meu primeiro 
        emprego na área de desenvolvedor.
      </p>
      <p className="text-lg indent-6  py-7">
        
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, eaque iste! Rem omnis beatae voluptates velit enim! Quas quia commodi consequatur vel necessitatibus. Tempora hic temporibus molestiae quisquam magnam voluptatum!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, eaque iste! Rem omnis beatae voluptates velit enim! Quas quia commodi consequatur vel necessitatibus. Tempora hic temporibus molestiae quisquam magnam voluptatum! */}
        
        Depois conheci através o ReactJS através da EBAC, tenho me interessado 
        cada vez mais e me aprofundando no assunto, procurando sempre algum video
        sobre ReactJS, e foi assim que conheci o Diego Fernandes, CEO 
        da RocketSeat, onde, através do videos deles, consegui me aprofundar mais no assunto
      </p>
    </div>
  )
}