import { GithubLogo, Stack } from "@phosphor-icons/react";
import { ChevronDown, Code2, Coffee, Link, Linkedin, User } from "lucide-react";
import balcar from './assets/balcarSite.png';
import guardians from './assets/guardians.png';
import xbox from './assets/xbox.png';
import responsive from './assets/responsive.png';
import apple from './assets/apple.png';
import audioBook from './assets/audioBook.png';
import expert from './assets/expertNote.png';
import twitter from './assets/twitterUi.png';

// Colocar no Aside para fixar, quando eu souber como saber ↓
// fixed left-0 top-0

export function App() {
  return (
    <main className="grid grid-cols-mainContainer" >

      <header className="fixed top-0 w-full px-[24vh] h-16 flex justify-left z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Code2 className="text-verdePastel size-5" />
          </div>

          <svg
            className='mr-3'
            width="6"
            height="16"
            viewBox="0 0 6 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          <line
            x1="-0"
            y1="-1"
            x2="6"
            y2="16"
            className="stroke-verdePastel"
          />
        </svg>

        <div className="flex gap-3.5">
          <a href="https://github.com/suavegreen.png" className="text-lg items-center font-mono text-verdePastel flex gap-4 hover:cursor-pointer">
            Sobre mim
            <ChevronDown className="text-verdePastel size-5" />
          </a>
        </div>

        <svg
          className='mx-1'
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-0"
            y1="-1"
            x2="6"
            y2="16"
            className="stroke-verdePastel"
          />
        </svg>
        <div className="flex gap-3.5">
          <a href="https://github.com/suavegreen.png" className="text-lg items-center font-mono text-verdePastel flex gap-4 hover:cursor-pointer">
            O que já estudei
            <ChevronDown className="text-verdePastel size-5" />
          </a>
        </div>

        <svg
          className='mx-1'
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-0"
            y1="-1"
            x2="6"
            y2="16"
            className="stroke-verdePastel"
          />
        </svg>

        <div className="flex gap-3.5">
          <a href="#" className="text-lg items-center font-mono text-verdePastel flex gap-4 hover:cursor-pointer">
            Projetos Principais
            <ChevronDown className="text-verdePastel size-5" />
          </a>

          
        </div>

        <svg
          className='mx-1'
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-0"
            y1="-1"
            x2="6"
            y2="16"
            className="stroke-verdePastel"
          />
        </svg>

        <div className="flex gap-4">
          <a href="#" className="text-lg items-center font-mono text-verdePastel flex gap-4 hover:cursor-pointer">
            Intensivões
            <ChevronDown className="text-verdePastel size-5" />
          </a>
        </div>

        <svg
          className='mx-1'
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-0"
            y1="-1"
            x2="6"
            y2="16"
            className="stroke-verdePastel"
          />
        </svg>
      </div>


      </header>

      <aside className="pl-[24vh] h-full">
        <div className="w-800 pl-[24vh] pt-28 fixed left-0 top-0">
          <img src="https://github.com/suavegreen.png" className="rounded-full h-40 w-40 mb-8" />
          <div className="grid gap-4 justify-center">
            <div className="flex gap-2">
              <User className="h-5 w-5 text-verdePastel" />
              <h1 className="hover:translate-x-3 duration-300 hover:cursor-default">
              <img 
                src="https://readme-typing-svg.herokuapp.com?&size=16&duration=1800&color=C6E5B1&vCenter=true&repeat=false&width=115&height=24&lines=Pedro+Caetano"
                className="w-full"
              />
              </h1>
            </div>
            <div className="flex gap-2">
              <Stack className="h-5 w-5 text-verdePastel" />
              <h2 className="hover:translate-x-3 duration-300 hover:cursor-default font-mono">
                Front-End
              </h2>
            </div>
            <div className="flex gap-2">
              <Linkedin className="h-5 w-5 text-verdePastel"/>
              <a href="https://linkedin.com/in/pedrohccaetano" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono">
                Linkedin
              </a>
            </div>
            <div className="flex gap-2">
              <GithubLogo className="text-verdePastel h-5 w-5" />
              <a href="https://github.com/SuaveGreen" target="_blank" className="hover:translate-x-3 duration-300 hover:cursor-pointer font-mono">
                GitHub
              </a>
            </div>
            <div className="grid grid-cols-1 gap-2 pt-[38vh]">
              <p>
                Achou interessante?
              </p>
              <p>
                Não hesite!
              </p>
              <p className="flex gap-2">
                Bora marcar um café!
                <Coffee/>
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div className="h-full pt-20 pr-[24vh]">
        
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
          className="w-full"
        />
        <img 
          src="https://readme-typing-svg.herokuapp.com/?color=C6E5B1&size=28&duration=3000&center=true&vCenter=true&repeat=false&width=850&lines=Seja+bem+vindo!+:%29;Eu+me+chamo:"
          className="w-full"
        />

        

        <div className="space-y-7">
          <h1 className="text-4xl pt-2 text-center text-verdePastel">
            Pedro Henrique Canuto Caetano
          </h1>
          <p className="text-lg">
            <span className="text-3xl pl-5 pr-[.7px]">A</span>
            tualmente estudo Front-end pela EBAC – 
            Escola Britânica de Artes Criativas e Tecnologia.
            Estou aprimorando minhas habilidades técnicas e 
            competências com o curso Desenvolvimento Full Stack Python. 
            No momento estudo FontEnd, com o intuito de buscar meu primeiro 
            emprego na área de desenvolvedor.
          </p>
          <p className="text-lg indent-6">
            Depois conheci através o ReactJS através da EBAC, tenho me interessado 
            cada vez mais e me aprofundando no assunto, procurando sempre algum video
            sobre ReactJS, e foi assim que conheci o Diego Fernandes, CEO 
            da RocketSeat, onde, através do videos deles, consegui me aprofundar mais no assunto
          </p>

          <div>
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=footer"
              className="w-full"
            />
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
              className="w-full"
            />
          </div>


          <h2 className="text-3xl text-center text-verdePastel">
            O que já estudei até o momento:
          </h2>
          <div className="grid grid-cols-1 gap-8 pl-[20vh]">
            <div className="grid grid-cols-3 gap-8">
              <p className="flex">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6 mr-5" />
                HTML5
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6 mr-5" />
                CSS 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6 mr-5" />
                JavaScript 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6 mr-5" />
                React 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6 mr-5" />
                Tailwimd CSS 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6 mr-5" />
                TypeScript 
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" className="w-6 h-6 mr-5" />
                Sass
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" className="w-6 h-6 mr-5" />
                Gulp
              </p>
              <p className="flex items-center">
                <i className="devicon-github-original text-2xl mr-5" />
                Github
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original.svg" className="w-6 h-6 mr-5" />
                Grunt 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="w-6 h-6 mr-5" />
                Vue 
              </p>
              <p className="flex items-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" className="w-7 h-7 mr-5" />
                jQuery 
              </p>
            </div>
          </div>
          {/* <p className="text-lg">
            <span className="text-3xl pl-5 pr-[.7px]">E</span>
            studo e me dedico para conseguir ingressar na área de tecnologia. 
            Me esforçando não só para fazer o que é proposto em cada módulo, 
            mas ir além, buscando outras formas de implementar funções e fazer 
            diferentes projetos.
          </p> */}
          <div>
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=footer"
              className="w-full"
            />
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
              className="w-full"
            />
          </div>
        </div>

        <div className="pb-12">
          <h1 className="text-4xl py-14 text-center text-verdePastel">
            Principais Projetos
          </h1>
          <div className="pt-10 w-full space-y-24">
            <div>
              <div className="flex justify-between  ">
                <div className="grid">
                  <h1 className="text-verdePastel text-center text-3xl">
                    Guardiões da Galáxia Vol.3
                  </h1>
                  <p className="pr-6 w-[70vh] text-justify indent-5">
                    Este é um site descritivo do filme Guardiões da Galáxia Vol. 3, 
                    onde é possível ver o resumo do filme e dos personagens principais, 
                    além de ver os outros filme do grupo e em quais outros filmes já participaram. 
                    É possível também ver alguns postêrs do filmes e de alguns personagens.
                  </p>
                  <div className="flex justify-between pr-7">
                    <div className="flex space-x-5">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-10">
                      <a href="https://github.com/SuaveGreen/guardioes_da_galaxia" target="_blank">
                        <GithubLogo className="text-verdePastel w-6 h-6" />
                      </a>
                      <a href="https://guardioes-da-galaxia-tau.vercel.app/" target="_blank">
                        <Link className="text-verdePastel w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://guardioes-da-galaxia-tau.vercel.app/" target="_blank">
                  <img src={guardians} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-between  ">
                <div className="grid">
                  <h1 className="text-verdePastel text-center text-3xl">
                    Balcar
                  </h1>
                  <p className="pr-6 w-[70vh] text-justify indent-5">
                    Balcar é um site Front-End de caronas paga, onde há uma 
                    descrição de como funciona, ver quais as cidades disponíveis, 
                    baixar o aplicativo, quais tipos de serviços, além de poder 
                    entrar em contato com a Balcar em caso de dúvidas ou problemas.
                  </p>
                  <div className="flex justify-between pr-7">
                    <div className="flex space-x-5">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg" className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-10">
                      <a href="https://balcar.vercel.app" target="_blank">
                        <Link className="text-verdePastel w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://balcar.vercel.app" target="_blank">
                  <img src={balcar} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-between  ">
                <div className="grid">
                  <h1 className="text-verdePastel text-center text-3xl">
                    Xbox
                  </h1>
                  <p className="pr-6 w-[70vh] text-justify indent-5">
                    Site sobre a marca Xbox, onde o objetivo era aprender sobre Bootstrap, 
                    utilizando os componentes disponibilizado para a construção do site, 
                    além de estilizar cada componente utilizando o Bootstrap.
                    Este é um site descritivo sobre a loja do Xbox, onde é possível ver algumas 
                    informações da marca, e também alguns produtos e serviços disponíveis.
                  </p>
                  <div className="flex justify-between pr-7">
                    <div className="flex space-x-5">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-10">
                      <a href="https://github.com/SuaveGreen/Site_Xbox" target="_blank">
                        <GithubLogo className="text-verdePastel w-6 h-6" />
                      </a>
                      <a href="https://site-xbox.vercel.app/" target="_blank">
                        <Link className="text-verdePastel w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://site-xbox.vercel.app/" target="_blank">
                  <img src={xbox} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-between  ">
                <div className="grid">
                  <h1 className="text-verdePastel text-center text-3xl">
                    Site Responsivo
                  </h1>
                  <p className="pr-6 w-[70vh] text-justify indent-5">
                  Este é um site simples, sem muito elementos visuais.
                  O principal objetivo é aprender sobre a responsividade, aplicando 
                  neste site a responsividade para cada tamanho de tela, sendo ela: 
                  Celular, Tablets e Computadores/Notebooks.
                  </p>
                  <div className="flex justify-between pr-7">
                    <div className="flex space-x-5">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-10">
                      <a href="https://github.com/SuaveGreen/site_responsivo" target="_blank">
                        <GithubLogo className="text-verdePastel w-6 h-6" />
                      </a>
                      <a href="https://site-responsivo-plum.vercel.app/" target="_blank">
                        <Link className="text-verdePastel w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://site-responsivo-plum.vercel.app/" target="_blank">
                  <img src={responsive} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=footer"
              className="w-full"
            />
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
              className="w-full"
            />
        </div>
        <div className="pb-12">
          <h1 className="text-verdePastel text-4xl py-14 text-center">
            Projetos Intensivões
          </h1>
          <div className="pt-10 w-full space-y-24">
            <div>
              <div className="flex justify-between  ">
                <div className="grid">
                  <h1 className="text-verdePastel text-center text-3xl">
                    Expert notes
                  </h1>
                  <p className="pr-6 w-[70vh] text-justify indent-5">
                    Feito na RecketSeat, junto com o professo Diego Fernandes, na NLW - Trilha de React
                    O site é um bloco de notas, onde também podemos transcrever áudio em texto, e salvar 
                    na memória do navegador. Usamos o React para criar os conteúdos, e com Tailwind CSS estilizamos os componentes.
                  </p>
                  <div className="flex justify-between pr-7">
                    <div className="flex space-x-5">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                    </div>
                    <div className="flex space-x-10">
                      <a href="https://github.com/SuaveGreen/guardioes_da_galaxia" target="_blank">
                        <GithubLogo className="text-verdePastel w-6 h-6" />
                      </a>
                      <a href="https://expert-notes-green.vercel.app" target="_blank">
                        <Link className="text-verdePastel w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <a href="https://expert-notes-green.vercel.app" target="_blank">
                  <img src={expert} alt="Site Balcar" className="rounded-ss-[50%] rounded-ee-[50%] hover:rounded-[8%] hover:scale-105 duration-700"/>
                </a>
              </div>
            </div>
            <div>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
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
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
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
        <div>
            <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=footer"
              className="w-full"
            />
            {/* <img 
              src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=85&section=header"
              className="w-full"
            /> */}
        </div>
      </div>
    </main>
  )
}
