import { IconMiniature } from "../components/IconMiniature"

interface TecnologiaEstudada {
  tecnologia: string[]
}

export function JaEstudei(props: TecnologiaEstudada) {
  return(
    <div className="space-y-7 py-36 bg-gradient-to-l from-[#1e2a3a] rounded-r-full">
      <h2 className="text-3xl text-center pb-10 text-verdePastel">
        O que já estudei até o momento:
      </h2>
      <div className="flex grid-cols-1 gap-8 justify-center">
        <div className="grid grid-cols-3 gap-12 w-[100vh] pl-[8vh]">
          <div className="grid grid-cols-3 gap-y-[7vh] w-[100vh] ">
            {props.tecnologia.map((icone: string, i: number) => {
              return (
                <div className="flex items-center w-[22vh] gap-6">
                  <IconMiniature key={i} icon={icone} nome={icone} />
                  <p>
                    {icone.charAt(0).toUpperCase() + icone.slice(1)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}