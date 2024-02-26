import { Stack, GithubLogo } from "@phosphor-icons/react";
import { User, Linkedin, ChevronRight } from "lucide-react";

export function Aside() {
  return (
    <aside className="pl-[24vh] h-full">
      <div className="pl-[24vh] pt-[9vh] fixed left-0 top-0">
        <img src="https://github.com/suavegreen.png" className="rounded-full h-40 w-40 mb-8" />
        <div className="grid gap-8">
          <div className="grid gap-4 justify-left">
            <div className="flex gap-2">
              <User className="size-5 text-verdePastel" />
              <h1 className="hover:translate-x-3 duration-300 hover:cursor-default">
              <img 
                src="https://readme-typing-svg.herokuapp.com?&size=16&duration=1800&color=C6E5B1&vCenter=true&repeat=false&width=115&height=24&lines=Pedro+Caetano"
                className="w-full"
              />
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
            {/* <div className="grid grid-cols-1 gap-2 pt-[38vh]">
              <p>
                Achou interessante?
              </p>
              <p>
                Não hesite!
              </p>
              <p className="flex gap-2">
                Bora marcar um café!
                <Coffee/>
              </p>
            </div> */}
          </div>
          <div className="grid gap-2">
            <div>
              <a href="#aboutMe" className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                Sobre mim
                <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
              </a>
            </div>
            <div>
              <a href="#jaEstudei" className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                Conhecimento
                <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
              </a>
            </div>
            <div>
              <a href="#mainProjects" className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                Projetos
                <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
              </a>
            </div>
            <div>
              <a href="#intensivos" className="text-lg items-center font-mono text-verdePastel flex gap-3 hover:cursor-pointer group">
                Intensivões
                <ChevronRight className="text-verdePastel size-5 group-hover:animate-bounceR" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}