import {
  // Stack,
  GithubLogo,
  Code,
  // IdentificationBadge,
  FrameCorners,
  GraduationCap,
  User,
} from "@phosphor-icons/react";
import { Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export function Aside() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos <= 500;
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <aside
      className={`fixed z-50 transition-all duration-500 ${!isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        } top-4 left-4 flex flex-col items-center pt-6`}
    >
      {/* 1. FOTO DE PERFIL (Sobreposta) */}
      <div className="absolute top-0 z-10 w-16 h-16 rounded-full overflow-hidden">
        <img
          src="https://github.com/suavegreen.png"
          alt="Pedro Caetano"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. CAIXA DO MENU (Cinza flutuante) */}
      <div
        className={`w-16 bg-[#12161f] bg-gradient-to-t from-[#191f2a] backdrop-blur-sm rounded-b-3xl rounded-t-xl flex flex-col items-center transition-all duration-300 overflow-hidden pt-10 pb-4 ${isOpen ? "max-h-[500px]" : "max-h-[85px]"
          }`}
      >
        {/* BOTÃO HAMBÚRGUER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-verdePastel hover:text-white transition-colors"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* 3. CONTEÚDO DO MENU (Links e Ícones) */}
        <div className="flex flex-col justify-between h-full w-full items-center mt-4 opacity-100 transition-opacity duration-300">

          {/* Navegação Superior */}
          <div className="grid gap-6 justify-center">
            <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={30} duration={800}>
              <span className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer hover:scale-110 transition-transform">
                <User className="size-6" />
              </span>
            </Link>

            <Link activeClass="active" to="jaEstudei" spy={true} smooth={true} offset={30} duration={800}>
              <span className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer hover:scale-110 transition-transform">
                <GraduationCap className="size-6" />
              </span>
            </Link>

            <Link activeClass="active" to="mainProjects" spy={true} smooth={true} offset={-30} duration={800}>
              <span className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer hover:scale-110 transition-transform">
                <Code className="size-6" />
              </span>
            </Link>
          </div>

          {/* Redes Sociais (Rodapé) */}
          <div className="grid gap-6 justify-center mt-6">

            <a href="https://linkedin.com/in/pedrohccaetano" target="_blank" rel="noreferrer">
              <Linkedin className="size-6 text-verdePastel hover:scale-110 transition-transform" />
            </a>

            <a href="https://github.com/SuaveGreen" target="_blank" rel="noreferrer">
              <GithubLogo className="text-verdePastel size-6 hover:scale-110 transition-transform" />
            </a>

            <FrameCorners className="size-6 hidden" />
          </div>

        </div>
      </div>
    </aside>
  );
}