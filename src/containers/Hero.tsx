import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <div className="justify-center align-middle items-center h-[80svh]">
      <div className="ml-[11.3vh]">
        <div className="ml-[1.5vh] pt-[100%] font-mono font-bold">
          <div className="text-3xl">
            <h2>Olá!</h2>
            <h2>Eu sou:</h2>
            <TypeAnimation
              className=" inline-block font-extralight text-xl text-[#C6E5B1]"
              sequence={[
                "Pedro Caetano",
                1000, // wait 1s before replacing "ADS" with "Front-End"
                "Estudante de ADS",
                2000,
                "Estudante de Front-End",
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
          <p className="font-extralight text-sm font-mono flex mt-[10vh] gap-3">
            Conhecer mais
            <ArrowDown className="animate-bounce size-4 mt-[5px]" />
          </p>
        </div>
      </div>
    </div>
  );
}
