import { GithubLogo } from "@phosphor-icons/react";
import { Link } from "lucide-react";

import apple from '../assets/apple.png';
import audioBook from '../assets/audioBook.png';
// import expert from '../assets/expertNote.png';
import twitter from '../assets/twitterUi.png';
import { IconMiniature } from "../components/IconMiniature";
import { Projects } from "../components/Projects";
import Guardians  from "../assets/guardians.png"

const githubGuardians = "https://github.com/SuaveGreen/guardioes_da_galaxia"
const siteGuardians = "https://github.com/SuaveGreen/guardioes_da_galaxia"

export function Intensivos() {
  return(
    <div className="pb-12">
      <h1 className="text-verdePastel text-4xl py-14 text-center">
        Projetos Intensivões
      </h1>
      <div className="pt-10 w-full space-y-24">
        
        <div>
          <Projects 
            name="Guardiões da Galáxia Vol.3" 
            path={Guardians} 
            text="Este é um site descritivo do filme Guardiões da Galáxia Vol. 3,
            onde é possível ver o resumo do filme e dos personagens principais, 
            além de ver os outros filme do grupo e em quais outros filmes já participaram. 
            É possível também ver alguns postêrs do filmes e de alguns personagens." 
            linkGithub={githubGuardians} 
            linkSite={siteGuardians} />



          <div className="flex justify-between  ">
            <div className="grid">
              <h1 className="text-verdePastel text-center text-3xl">
                Twitter
              </h1>
              <p className="pr-6 w-[70vh] text-justify indent-5">
                Este site foi criado em um MasterClass junto com o professor 
                Diego Fernandes, da RocketSeat. O principal intuito desta 
                MasterClass, era aprender conceitos básicos, mas muito importantes 
                para um bom conhecimento e uma boa base.
              </p>
              <div className="flex justify-between pr-7">
                <div className="flex space-x-5">
                  <IconMiniature icon="react" nome="ReactJS" />
                  <IconMiniature icon="tailwindcss" nome="TailWind-CSS" />
                  <IconMiniature icon="typescript" nome="TypeScript" />
                  <IconMiniature icon="html5" nome="HTML5" />
                </div>
                <div className="flex space-x-10">
                  <a href="https://github.com/SuaveGreen/site_responsivo" target="_blank">
                    <GithubLogo className="text-verdePastel w-6 h-6" />
                  </a>
                  <a href="https://ui-twitter-lime.vercel.app" target="_blank">
                    <Link className="text-verdePastel w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <a href="https://ui-twitter-lime.vercel.app" target="_blank">
              <img src={twitter} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-between  ">
            <div className="grid">
              <h1 className="text-verdePastel text-center text-3xl">
                SmartWatch Apple
              </h1>
              <p className="pr-6 w-[70vh] text-justify indent-5">
                Um site sobre o smartwatch da Apple, feito no intensivão da 
                Hashtag de JavaScript Aula 2,
                o objetivo deste site era a manipulação dos elementos da tela, 
                onde cada clique de um usuário alteraria a cor, o tamanho do 
                relógio e o titulo.
              </p>
              <div className="flex justify-between pr-7">
                <div className="flex space-x-5">
                  <IconMiniature icon="html5" nome="HTML5" />
                  <IconMiniature icon="css3" nome="CSS3" />
                  <IconMiniature icon="javascript" nome="JS" />
                </div>
                <div className="flex space-x-10">
                  <a href="https://github.com/SuaveGreen/landing-page_Apple" target="_blank">
                    <GithubLogo className="text-verdePastel w-6 h-6" />
                  </a>
                  <a href="https://page-apple.vercel.app" target="_blank">
                    <Link className="text-verdePastel w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <a href="https://page-apple.vercel.app" target="_blank">
              <img src={apple} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
            </a>
          </div>
        </div>
        <div>
          <div className="flex justify-between  ">
            <div className="grid">
              <h1 className="text-verdePastel text-center text-3xl">
                Áudio Book
              </h1>
              <p className="pr-6 w-[70vh] text-justify indent-5">
                Um site simples, como objetivo de aprender mais sobre alguns 
                conceitos importantes sobre JavaScript. Foi criado
                um player de Áudio Book, onde percorremos sobre cada uns dos 
                áudios, onde podemos apertar o play para ouvir, ou avançar a 
                faixa ou retroceder.
              </p>
              <div className="flex justify-between pr-7">
                <div className="flex space-x-5">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
                </div>
                <div className="flex space-x-10">
                  <a href="https://github.com/SuaveGreen/audio-book" target="_blank">
                    <GithubLogo className="text-verdePastel w-6 h-6" />
                  </a>
                  <a href="https://audio-book-roan.vercel.app" target="_blank">
                    <Link className="text-verdePastel w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <a href="https://audio-book-roan.vercel.app" target="_blank">
              <img src={audioBook} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}