import { Stack, GithubLogo } from "@phosphor-icons/react";
import { User, Linkedin, ChevronRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export function Aside() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    const currentScrollPos = window.scrollY;
    const isVisible = currentScrollPos <= 400; // Ajuste este valor conforme necessário
    setIsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <aside className={`transition-all duration-500 ${!isVisible ? 'opacity-100 visible ' : 'opacity-0 invisible '} `} >
      <div className="px-[15vh] h-full pt-[9vh] fixed left-0 top-0 bg-[#12141a] bg-gradient-to-l from-[#161f2b]">
        <div className="">
          <img src="https://github.com/suavegreen.png" className="rounded-full h-40 w-40 mb-8" />
          <div className="grid gap-8">
            <div className="grid gap-4 justify-left">
              <div className="flex gap-2">
                <User className="size-5 text-verdePastel" />
                <h1 className="text-verdePastel hover:translate-x-3 duration-300 hover:cursor-default font-mono">
                  Pedro Caetano
                </h1>
              </div>
              <div className="flex gap-2">
                <Stack className="size-5 text-verdePastel" />
                <h2 className="hover:translate-x-3 duration-300 hover:cursor-default font-mono">
                  Front-End
                </h2>
              </div>
              <div className="flex gap-2">
                <Linkedin className="size-5 text-verdePastel"/>
                <a href="https://linkedin.com/in/pedrohccaetano" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono">
                  Linkedin
                </a>
              </div>
              <div className="flex gap-2">
                <GithubLogo className="text-verdePastel size-5" />
                <a href="https://github.com/SuaveGreen" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono">
                  GitHub
                </a>
              </div>
            </div>
            <div className="grid gap-2">
              <div>


              <Link
                  activeClass="active"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={800}
                >
                <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                  Sobre mim
                  <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                </a>
                </Link>
              </div>
              <div>
              <Link
                  activeClass="active"
                  to="jaEstudei"
                  spy={true}
                  smooth={true}
                  offset={130}
                  duration={800}
                >
                <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                  Conhecimento
                  <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                </a>
              </Link>
              </div>
              <div>
              <Link
                  activeClass="active"
                  to="mainProjects"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={800}
                >
                <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                  Projetos
                  <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                </a>
              </Link>
              </div>
              <div>
              <Link
                activeClass="active"
                to="intensivos"
                spy={true}
                smooth={true}
                offset={-120}
                duration={800}
              >
                <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                  Intensivões
                  <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}