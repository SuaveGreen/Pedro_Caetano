import { GithubLogo } from "@phosphor-icons/react";
import { Linkedin, User } from "lucide-react";

// Colocar no Aside para fixar, quando eu souber como saber ↓
// fixed left-0 top-0

export function App() {
  return (
    <main className="grid grid-cols-mainContainer">
      <aside className="pl-[24vh] pt-20">
        <div className="w-40">
          <img src="https://github.com/suavegreen.png" className="rounded-full h-40 w-40 mb-8" />
          <div className="grid gap-4 justify-center">
            <div className="flex gap-2">
              <User className="h-5 w-5" />
              <h1 className="hover:translate-x-3 duration-300 hover:cursor-default">
                Pedro Caetano
              </h1>
            </div>
            <div className="flex gap-2">
              <Linkedin className="h-5 w-5" />
              <a href="https://linkedin.com/in/pedrohccaetano" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer">
                Linkedin
              </a>
            </div>
            <div className="flex gap-2">
              <GithubLogo className="h-5 w-5" />
              <a href="https://github.com/SuaveGreen" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </aside>
      <div className="h-[500vh] pt-20 pr-[24vh]">
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=105&section=header"
          className="w-full"
        />

        <img 
          src="https://readme-typing-svg.herokuapp.com/?color=C6E5B1&size=22&center=true&vCenter=true&width=850&lines=Olá;Sou+de+Presidente+Venceslau+/+SP;Sou+a+Estudante+de+Programação;Estudo+na+EBAC;Seja+Bem+vindo!+:%29"
          className="w-full"
        />

        <h1>
          Pedro
        </h1>

        <div className="border-b-[1px] border-b-verdeDivisoria" />

        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=105&section=footer"
          className="w-full"
        />
      </div>
    </main>
  )
}
