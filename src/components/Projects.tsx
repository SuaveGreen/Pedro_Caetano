import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "lucide-react";
import { IconMiniature } from "./IconMiniature";

interface Projects {
  name: string
  text: string
  path: string
  linkSite: string
  linkGithub?: string
  tecnologiaUsada: string[]
}

export function Projects(props: Projects) {
  return(
    <div className="p-12 w-full border-y-[1px] rounded-3xl border-verdeDivisoria">
      <div className="flex justify-between  ">
        <div className="grid">
          <h1 className="text-verdePastel text-center text-3xl">
            {props.name}
          </h1>
          <p className="pr-10 w-[70vh] pb-2 text-justify indent-5">
            {props.text}
          </p>
          <div className="flex justify-between  pr-[4.1vh]">
            <div className="flex space-x-5 ">
              {props.tecnologiaUsada.map((icone: string, i: number) => {
                return <IconMiniature key={i} icon={icone} nome={icone} />
              })}
            </div>
            <div className="flex space-x-10">
              {props.linkGithub ? (
                <a href={props.linkGithub} target="_blank" className="hover:brightness-200 hover:scale-110 duration-300">
                  <GithubLogo className="text-verdePastel w-6 h-6" />
                </a>
              ) : (
                <a href={props.linkGithub} target="_blank" >
                  <GithubLogo className="hidden" />
                </a>
              )}
              <a href={props.linkSite} target="_blank" className="hover:brightness-200 hover:scale-110 duration-300">
                <Link className="text-verdePastel w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <a href={props.linkSite} target="_blank">
          <img src={props.path} alt={props.name} title={props.name} className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
        </a>
      </div>
    </div>
  )
}

// rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700