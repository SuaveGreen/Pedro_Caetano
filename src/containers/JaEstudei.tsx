import { IconMiniature } from "../components/IconMiniature";
import { NameSection } from "../components/NameSection";
import ProgressBar from "@ramonak/react-progress-bar";

interface Tecnologia {
  nome: string;
  valor: number;
}

interface JaEstudeiProps {
  tecnologia: Tecnologia[];
}
// bg-gradient-to-l from-[#1e2a3a]

export function JaEstudei(props: JaEstudeiProps ) {
  return (
    <div id="jaEstudei" className="ml-[11.3vh] h-screen">
      <NameSection name="Conhecimento em" />
      <div>
        <div>
          {props.tecnologia.map((tec: Tecnologia, i: number) => (
            <div key={i} className="block pb-8">
              <div className="flex items-center pb-2">
                <IconMiniature icon={tec.nome} nome={tec.nome} />
                <p>{`${tec.nome.charAt(0).toUpperCase() + tec.nome.slice(1)}`}</p>
              </div>
              <ProgressBar
                completed={tec.valor}
                height="5px"
                width="90%"
                bgColor="#91af7d"
                baseBgColor="#000000"
                isLabelVisible={false}
                animateOnRender={true}
                initCompletedOnAnimation={0.1}
                transitionTimingFunction="ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
