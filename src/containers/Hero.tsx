import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="">
      <h2 className="font-mono font-bold">
        Olá!
        <p>Eu sou:</p>
        <img 
          src="https://readme-typing-svg.herokuapp.com/?color=C6E5B1&size=300&duration=3500&center=false&vCenter=true&repeat=true&width=5000&lines=Pedro+Caetano;Programador+Front-End;Estudante+de+React.Js"
          className=""
        />
        <p className="font-normal font-mono">
          Conhecer mais
          <ArrowDown className="animate-bounce" />
        </p>
      </h2>
    </div>
  )
}