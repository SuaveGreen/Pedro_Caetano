import { IconMiniature } from "../components/IconMiniature";
import { NameSection } from "../components/NameSection";
import ProgressBar from "@ramonak/react-progress-bar";

interface TecnologiaEstudada {
  tecnologia: string[];
}

// bg-gradient-to-l from-[#1e2a3a]

export function JaEstudei(props: TecnologiaEstudada) {
  return (
    <div className=" ml-[11.3vh] h-screen">
      <NameSection name="Conhecimento em" />
      <div className="">
        <div className="">
          {/* <ProgressBar completed={100} /> */}

          <div>
            {props.tecnologia.map((icone: string, i: number) => {
              return (
                <div className="block pb-8">
                  <div className="flex items-center pb-2">
                    <IconMiniature key={i} icon={icone} nome={icone} />
                    <p>{icone.charAt(0).toUpperCase() + icone.slice(1)}</p>
                  </div>
                  <ProgressBar
                    completed={100}
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
