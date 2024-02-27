import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "lucide-react";
import { IconMiniature } from "./IconMiniature";

interface Projects {
  name: string
  text: string
  path: string
  linkSite: string
  linkGithub?: string
}

export function Projects(props: Projects) {
  return(
    <div className="py-12 w-full">
      <div className="flex justify-between  ">
        <div className="grid">
          <h1 className="text-verdePastel text-center text-3xl">
            {props.name}
          </h1>
          <p className="pr-6 w-[70vh] text-justify indent-5">
            {props.text}
          </p>
          <div className="flex justify-between pr-7">
            <div className="flex space-x-5">
              <IconMiniature icon="react" nome="ReactJS" />
              <IconMiniature icon="tailwindcss" nome="TailWind-CSS" />
              <IconMiniature icon="typescript" nome="TypeScript" />
              <IconMiniature icon="html5" nome="HTML5" />
            </div>
            <div className="flex space-x-10">
              {props.linkGithub ? (
                <a href={props.linkGithub} target="_blank">
                  <GithubLogo className="text-verdePastel w-6 h-6" />
                </a>
              ) : (
                <a href={props.linkGithub} target="_blank">
                  <GithubLogo className="text-verdePastel w-6 h-6 hidden" />
                </a>
              )}
              <a href={props.linkSite} target="_blank">
                <Link className="text-verdePastel w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <a href={props.linkSite} target="_blank">
          <img src={props.path} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
        </a>
      </div>
    </div>
  )
}