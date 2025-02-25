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
    <div className="ml-[10vh] w-[31.5vh] h-full">
      <div className="">
        <div className="space-y-2 h-[100%]">
          <h2 className="text-verdePastel text-xl">
            {props.name}
          </h2>
          <p className="font-extralight text-pretty text-left text-sm ">
            {props.text}
          </p>
          <a href={props.linkSite} target="_blank">
            <img src={props.path} alt={props.name} title={props.name} className="rounded-3xl  h-[100%] w-[100%] py-3 hover:scale-105"/>
          </a>
          <div className="flex justify-between">
            <div className="flex">
              {props.tecnologiaUsada.map((icone: string, i: number) => {
                return <IconMiniature key={i} icon={icone} nome={icone} />
              })}
            </div>
            <div className="flex gap-2">
              {props.linkGithub ? (
                <a href={props.linkGithub} target="_blank" className="hover:brightness-200 hover:scale-110 duration-300">
                  <GithubLogo className="text-verdePastel size-6" />
                </a>
              ) : (
                <a href={props.linkGithub} target="_blank" >
                  <GithubLogo className="hidden" />
                </a>
              )}
              {props.linkSite ? (
                <a href={props.linkSite} target="_blank" className="hover:brightness-200 hover:scale-110 duration-300">
                  <Link className="text-verdePastel size-6" />
                </a>
              ) : (
                <a href={props.linkSite} target="_blank" >
                  <Link className="hidden" />
                </a>
              )}
              {/* <a href={props.linkSite} target="_blank" className="hover:brightness-200 hover:scale-110 duration-300">
                <Link className="text-verdePastel size-5" />
              </a> */}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

// rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700