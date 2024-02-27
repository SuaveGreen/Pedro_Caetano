import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="flex h-[80vh] mb-[35vh] w-full text-left items-center">
      <h2 className="font-mono text-7xl font-bold">
        Olá!
        <p>Eu sou:</p>
        <img 
          src="https://readme-typing-svg.herokuapp.com/?color=C6E5B1&size=300&duration=3500&center=false&vCenter=true&repeat=true&width=5000&lines=Pedro+Caetano;Programador+Front-End;Estudante+de+React.Js"
          className="h-24 ml-1"
        />
        <p className="mt-[5vh] flex ml-1 font-normal font-mono text-base gap-5">
          Conhecer mais
          <ArrowDown className="animate-bounce" />
        </p>
      </h2>
    </div>
  )
}