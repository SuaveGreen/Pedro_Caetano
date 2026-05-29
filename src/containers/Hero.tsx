import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <div id="hero" className="flex flex-col min-h-[42dvh] pl-24 justify-end font-mono font-bold">
      <div>
        <h1 className="text-3xl tracking-wide">Olá! <br />
          Eu sou:</h1>
        <TypeAnimation
          className="w-auto font-extralight text-lg tracking-tight text-[#C6E5B1]"
          sequence={[
            "Pedro Caetano",
            1000, // wait 1s before replacing "ADS" with "Front-End"
            "Estudante de ADS",
            2000,
            "Estudante de Front-End",
            2000,
            "Estudante de C#",
            2000,
            "Estudante de React.Js",
            2000,
            "Pedro Caetano",
          ]}
          wrapper="span"
          speed={15}
        // repeat={Infinity}
        />
      </div>
      <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-48} duration={800}
        className="pt-6 inline-flex font-extralight text-sm font-mono">
        Conhecer mais
        <span>
          <ArrowDown className="animate-bounce size-4 ml-2" />
        </span>
      </Link>
    </div>
  );
}
