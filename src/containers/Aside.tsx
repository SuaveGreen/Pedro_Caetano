import { Stack, GithubLogo, BookOpenText, Code, IdentificationBadge, EnvelopeSimple, FileCode, InstagramLogo  } from "@phosphor-icons/react";
import { User, Linkedin, ChevronRight, Phone } from "lucide-react";
// import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

export function Aside() {

  // const [isVisible, setIsVisible] = useState(true);

  // const toggleVisibility = () => {
  //   const currentScrollPos = window.scrollY;
  //   const isVisible = currentScrollPos <= 400; // Ajuste este valor conforme necessário
  //   setIsVisible(isVisible);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', toggleVisibility);
  //   return () => window.removeEventListener('scroll', toggleVisibility);
  // }, []);

  // {`transition-all duration-500 ${!isVisible ? 'opacity-100 visible ' : 'opacity-0 invisible '} `}

  // bg-[#12141a] bg-gradient-to-l from-[#161f2b]
  // bg-[#0c0e13] bg-gradient-to-r

  return (
    <aside>
      <div className="fixed left-0 top-0  h-full
        celular:bg-slate-400 celularx:bg-red-400 tablet:bg-orange-300 tabletx:bg-yellow-300 notebook:bg-green-400 monitor:bg-teal-700
      ">
        <div className="flex flex-col p-4 py-6 h-full">
          <div className="mb-7">
            <img src="https://github.com/suavegreen.png" className="rounded-full size-12"/>
          </div>
          <div className="flex flex-col-reverse justify-between h-[100%]">
            <div className="grid gap-6 justify-center">
              <div className="gap-2 hidden">
                <User className="size-5 text-verdePastel" />
                <h1 className="text-verdePastel hover:translate-x-3 duration-300 hover:cursor-default font-mono">
                  Pedro Caetano
                </h1>
              </div>
              <div className="gap-2 hidden">
                <Stack className="size-5 text-verdePastel" />
                <h2 className="hover:translate-x-3 duration-300 hover:cursor-default font-mono hidden">
                  Front-End
                </h2>
              </div>
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/pedrohccaetano" target="_blank">
                  <Linkedin className="size-6 text-verdePastel"/>
                  <p className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono hidden">
                    Linkedin
                  </p>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="https://github.com/SuaveGreen" target="_blank">
                  <GithubLogo className="text-verdePastel size-6" />
                  <p className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono hidden">
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="*" target="_blank">
                  <EnvelopeSimple className="text-verdePastel size-6" />
                  <p className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono hidden">
                    Gmail
                  </p>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="*" target="_blank">
                  <Phone className="text-verdePastel size-6" />
                  <p className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono hidden">
                    Telefone
                  </p>
                </a>
              </div>
              <div className="flex gap-2">
                <a href="*" target="_blank">
                  <InstagramLogo className="text-verdePastel size-6" />
                  <p className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono hidden">
                    Instagram
                  </p>
                </a>
              </div>
            </div>
            <div className="grid gap-6 justify-center">
              <div>
                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-130}
                    duration={800}
                  >
                    <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group hidden">
                      Sobre mim
                      <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                    </a>
                    <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                      <IdentificationBadge className="size-6"/>
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
                    <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group hidden">
                      Conhecimento
                      <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                    </a>
                    <a className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                      <BookOpenText className="size-6"/>
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
                    <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group hidden">
                      Projetos
                      <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                    </a>
                    <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group">
                      <FileCode className="size-6"/>
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
                  <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group hidden">
                    Intensivões
                    <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
                  </a>
                  <a className="text-lg items-center font-mono text-verdePastel gap-3 hover:cursor-pointer group">
                    <Code className="size-6"/>
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