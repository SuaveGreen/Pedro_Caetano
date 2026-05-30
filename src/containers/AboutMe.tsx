import { NameSection } from "../components/NameSection";
import { useState, useEffect } from "react";

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos < 440; // Ajuste este valor conforme necessário
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //

  return (
    <div
      id="aboutMe"
      className={`transition-opacity mt-20 w-[24rem] flex flex-col gap-y-2 ${isVisible ? "opacity-0" : "opacity-100"
        }`}
    >
      <NameSection name="Sobre Mim" />
      <p className="text-lg font-light indent-6 text-justify px-5">
        <span className="text-3xl pl-0.5 pr-[.7px]">A</span>

        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquid voluptate exercitationem quos minima repellendus doloribus accusantium necessitatibus sapiente voluptatibus deleniti neque, placeat libero perspiciatis ad ipsam architecto nemo aspernaturr. */}

        tualmente estou me graduando em Análise e Desenvolvimento de sistemas
        pela UniCesumar tendo como foco me capacitar profissionalmente e me
        preparar para ingressar no mercado de trabalho.
      </p>
      <p className="text-lg font-light indent-6 text-justify px-5">

        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquid voluptate exercitationem quos minima repellendus doloribus accusantium necessitatibus sapiente voluptatibus deleniti neque, placeat libero perspiciatis ad ipsam architecto nemo aspernatur. */}

        Estudo também na Alura, aprimorando minhas habilidades
        técnicas e competências com o curso de .NET usando a linguagem de programação
        C# e aprendendo inglês com Alura Língua.
      </p>
      <p className="text-lg font-light indent-6 text-justify px-5">

        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquid voluptate exercitationem quos minima repellendus doloribus accusantium necessitatibus sapiente voluptatibus deleniti neque, placeat libero perspiciatis ad ipsam architecto nemo aspernatur. */}

        {/* Depois conheci através o ReactJS através da EBAC, tenho me interessado
        cada vez mais e me aprofundando no assunto, procurando sempre algum
        video sobre ReactJS! Inslusive, este site foi feito com React.Js :D */}
      </p>
    </div>
  );
}
