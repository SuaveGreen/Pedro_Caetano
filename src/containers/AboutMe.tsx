import { NameSection } from "../components/NameSection";
import { useState, useEffect } from "react";

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos < 400; // Ajuste este valor conforme necessário
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //

  return (
    <div
      className={`transition-opacity  h-[100%] ml-[11.3vh] ${
        isVisible ? "opacity-0" : "opacity-100"
      }  rounded-l-full`}
    >
      <NameSection name="Sobre Mim" />
      <p className="text-lg indent-6 text-justify w-[31.5vh]">
        <span className="text-3xl pl-0.5 pr-[.7px]">A</span>
        tualmente estou me graduando em Análise e Desenvolvimento de sistemas
        pela UniCesumar tendo como foco me capacitar profissionalmente e me
        preparar para ingressar no mercado de trabalho.
      </p>
      <p className="text-lg indent-6 text-justify w-[31.5vh] py-5">
        <span className="text-3xl pl-0.5">T</span>
        ambém estudo Front-end pela EBAC. Estou aprimorando minhas habilidades
        técnicas e competências com o curso Desenvolvimento Full Stack Python.
        No momento estudo FontEnd.
      </p>
      <p className="text-lg indent-6 text-justify w-[31.5vh]">
        <span className="text-3xl pl-0.5 pr-[.2px]">D</span>
        epois conheci através o ReactJS através da EBAC, tenho me interessado
        cada vez mais e me aprofundando no assunto, procurando sempre algum
        video sobre ReactJS! Inslusive, este site foi feito com React.Js :D
      </p>
    </div>
  );
}
