import { IconMiniature } from "../components/IconMiniature";

interface TecnologiaEstudada {
  tecnologia: string[];
}

export function JaEstudei(props: TecnologiaEstudada) {
  return (
    <div className="bg-gradient-to-l from-[#1e2a3a] rounded-r-full invisible">
      <h2 className="text-3xl text-center text-verdePastel">
        O que já estudei até o momento:
      </h2>
      <div className="flex grid-cols-1justify-center">
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-3">
            {props.tecnologia.map((icone: string, i: number) => {
              return (
                <div className="flex items-center">
                  <IconMiniature key={i} icon={icone} nome={icone} />
                  <p>{icone.charAt(0).toUpperCase() + icone.slice(1)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
