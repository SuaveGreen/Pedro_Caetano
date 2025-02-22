import { Aside } from "./containers/Aside";
import { Divider } from "./components/Divider";
// import { AboutMe } from "./containers/AboutMe";
import { JaEstudei } from "./containers/JaEstudei";
// import { NameSection } from "./components/NameSection";
// import { Projects } from "./components/Projects";
// import guardians from './assets/guardians.png';
// import twitter from './assets/twitterUi.png';
// import applePage from './assets/apple.png';
// import audioBook from './assets/audioBook.png';
// import expertNote from './assets/expertNote.png';
// import balcar from './assets/balcarSite.png';
// import xbox from './assets/xbox.png';
// import responsivo from './assets/responsive.png';
import { Hero } from "./containers/Hero";
// import Carousel from "nuka-carousel";
import { ButtonTop } from "./components/ButtonTop";
import { Link } from "react-scroll";

// import Teste from "./components/Teste";

// Instalar →  npm i swiper

export function App() {
  return (
    // grid grid-cols-mainContainer
    <main className=" bg-gradient-to-r from-[#121922]">
      <Aside />
      <div className="" id="hero">
        <Hero />
        <div className="space-y-7" id="aboutMe">
          {/* <AboutMe /> */}
          <Divider id="jaEstudei" />
          <JaEstudei
            tecnologia={[
              "html5",
              "css3",
              "javascript",
              "react",
              "tailwindcss",
              "typescript",
              "sass",
              "redux",
              "github",
              "grunt",
              "jquery",
              "vuejs",
            ]}
          />
          <Divider id="mainProjects" />
        </div>

        {/* Secão 1 */}
        {/* <NameSection name="Projetos" /> */}
        {/* <Carousel className="" cellSpacing={25} wrapAround={true} swiping={false} cellAlign="center"  
            autoplay={true} autoplayInterval={5000} speed={800} withoutControls={true} animation="zoom" >
            <Projects tecnologiaUsada={['html5', 'css3', 'javascript', 'sass']}
              name="Guardiões da Galáxia Vol.3" 
              text="Este é um site descritivo do filme Guardiões da Galáxia Vol. 3, 
                onde é possível ver o resumo do filme e dos personagens principais, 
                além de ver os outros filme do grupo e em quais outros filmes já participaram. 
                É possível também ver alguns postêrs do filmes e de alguns personagens." 
              path={guardians}
              linkGithub="https://github.com/SuaveGreen/guardioes_da_galaxia" 
              linkSite="https://guardioes-da-galaxia-tau.vercel.app/"
            />
            <Projects tecnologiaUsada={['html5', 'css3', 'javascript', 'sass']}
              name="Balcar" 
              text="Balcar é um site Front-End de caronas paga, onde há uma descrição 
                de como funciona, ver quais as cidades disponíveis, baixar o aplicativo, 
                quais tipos de serviços, além de poder entrar em contato com a Balcar em 
                caso de dúvidas ou problemas." 
              path={balcar}
              linkSite="https://balcar.vercel.app/"
            />
            <Projects tecnologiaUsada={['html5', 'css3', 'javascript', 'bootstrap']}
              name="Xbox" 
              text="Site sobre a marca Xbox, onde o objetivo era aprender sobre 
                Bootstrap, utilizando os componentes disponibilizado para a construção 
                do site, além de estilizar cada componente utilizando o Bootstrap. 
                Este é um site descritivo sobre a loja do Xbox, onde é possível ver 
                algumas informações da marca, e também alguns produtos e serviços 
                disponíveis." 
              path={xbox}
              linkGithub="https://github.com/SuaveGreen/guardioes_da_galaxia" 
              linkSite="https://guardioes-da-galaxia-tau.vercel.app/"
            />
            <Projects tecnologiaUsada={['html5', 'css3', 'javascript']}
              name="Site responsivo" 
              text="Este é um site simples, sem muito elementos visuais.

              O principal objetivo é aprender sobre a responsividade, aplicando 
              neste site a responsividade para cada tamanho de tela, sendo ela: 
              Celular, Tablets e Computadores/Notebooks." 
              path={responsivo}
              linkGithub="https://github.com/SuaveGreen/site_responsivo" 
              linkSite="https://site-responsivo-plum.vercel.app/"
            />
          </Carousel> */}
        {/* <Divider id="intensivos" /> */}

        {/* Secão 2 */}
        {/* <NameSection name="Intensivos" /> */}
        {/* <Carousel cellSpacing={25} wrapAround={true} swiping={false} cellAlign="center"  
          autoplay={true} autoplayInterval={5000} speed={800} withoutControls={true} animation="zoom">
          <Projects tecnologiaUsada={['react', 'tailwindcss', 'typescript', 'html5']}
            name="Expert notes" 
            text="Feito na RecketSeat, junto com o professo Diego Fernandes, 
              na NLW - Trilha de React O site é um bloco de notas, onde também 
              podemos transcrever áudio em texto, e salvar na memória do navegador. 
              Usamos o React para criar os conteúdos, e com Tailwind CSS estilizamos 
              os componentes." 
            path={expertNote}
            linkGithub="https://github.com/SuaveGreen/Bloco_de_notas" 
            linkSite="https://expert-notes-green.vercel.app"
          />        
          <Projects tecnologiaUsada={['react', 'tailwindcss', 'typescript', 'html5']}
            name="Twitter" 
            text="Este site foi criado em um MasterClass junto com o professor 
              Diego Fernandes, da RocketSeat. O principal intuito desta 
              MasterClass, era aprender conceitos básicos, mas muito importantes 
              para um bom conhecimento e uma boa base." 
            path={twitter}
            linkGithub="https://github.com/SuaveGreen/ui-twitter" 
            linkSite="https://ui-twitter-lime.vercel.app"
          />        
          <Projects tecnologiaUsada={['html5', 'css3', 'javascript']}
            name="SmartWatch Apple" 
            text="Um site sobre o smartwatch da Apple, feito no intensivão da 
              Hashtag de JavaScript Aula 2,
              o objetivo deste site era a manipulação dos elementos da tela, 
              onde cada clique de um usuário alteraria a cor, o tamanho do 
              relógio e o titulo." 
            path={applePage}
            linkGithub="https://github.com/SuaveGreen/landing-page_Apple" 
            linkSite="https://page-apple.vercel.app"
          />       
          <Projects tecnologiaUsada={['html5', 'css3', 'javascript']}
            name="Áudio Book" 
            text="Um site simples, como objetivo de aprender mais sobre alguns 
              conceitos importantes sobre JavaScript. Foi criado
              um player de Áudio Book, onde percorremos sobre cada uns dos 
              áudios, onde podemos apertar o play para ouvir, ou avançar a 
              faixa ou retroceder." 
            path={audioBook}
            linkGithub="https://github.com/SuaveGreen/audio-book" 
            linkSite="https://audio-book-roan.vercel.app"
          />  
        </Carousel> */}
        {/* <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=80&section=footer"
          className="w-full pt-28"
        /> */}
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <ButtonTop />
        </Link>
      </div>
    </main>
  );
}
