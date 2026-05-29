import React, { useState, useRef } from 'react';
import { Projects } from './Projects';

import guardians from '../assets/guardians.png';
// import twitter from '../assets/twitterUi.png';
// import applePage from '../assets/apple.png';
// import audioBook from '../assets/audioBook.png';
// import expertNote from '../assets/expertNote.png';
import balcar from '../assets/balcarSite.png';
import xbox from '../assets/xbox.png';
import iprPasta from '../assets/iprMusicas.png';
import responsivo from '../assets/responsive.png';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const projects = [
    {
      tecnologiaUsada:['react', 'tailwindcss', 'typescript', 'html5', 'css3'],
          name:"Pasta de Música" ,
          text:"Este site tem a função de reunir todas as músicas em um único site, sendo possível pesquisar pelo nome da música, nome do autor/cantor e pelo ID, podendo também reorganizar a lista por ordem alfabética ou numérica.A lista possuí uma paginação, sendo cada página 10 itens, onde posso avançar ou voltar entre as páginas. Em cada música é possível ver o vídeo no Youtube, ver a cifra no CifraClub e salvar. Ao salvar, as músicas vão para uma lista a parte, onde é possível remover a música da lista ou enviar por Wathsapp.",
          path:iprPasta,
          linkGithub:"https://github.com/SuaveGreen/ipr_musicas", 
          linkSite:"https://ipr-musicas.vercel.app/"
    },
    {
      tecnologiaUsada:['html5', 'css3', 'javascript', 'sass'],
      name:"Guardiões da Galáxia Vol.3" ,
      text:"Este é um site descritivo do filme Guardiões da Galáxia Vol. 3, onde é possível ver o resumo do filme e dos personagens principais, além de ver os outros filme do grupo e em quais outros filmes já participaram. É possível também ver alguns postêrs do filmes e de alguns personagens.", 
      path:guardians,
      linkGithub:"https://github.com/SuaveGreen/guardioes_da_galaxia", 
      linkSite:"https://guardioes-da-galaxia-tau.vercel.app/"
    },
    {
      tecnologiaUsada:['html5', 'css3', 'javascript', 'sass'],
      name:"Balcar",
      text:"Balcar é um site Front-End de caronas paga, onde há uma descrição de como funciona, ver quais as cidades disponíveis, baixar o aplicativo, quais tipos de serviços, além de poder entrar em contato com a Balcar em caso de dúvidas ou problemas.",
      path:balcar,
      linkSite:"https://balcar.vercel.app/"
    },
    { 
      tecnologiaUsada:['html5', 'css3', 'javascript', 'bootstrap'],
      name:"Xbox", 
      text:"Site sobre a marca Xbox, onde o objetivo era aprender sobre Bootstrap, utilizando os componentes disponibilizado para a construção do site, além de estilizar cada componente utilizando o Bootstrap. Este é um site descritivo sobre a loja do Xbox, onde é possível ver algumas informações da marca, e também alguns produtos e serviços disponíveis.", 
      path:xbox,
      linkGithub:"https://github.com/SuaveGreen/Site_Xbox", 
      linkSite:"https://site-xbox.vercel.app/" 
    },
    {
      tecnologiaUsada:['html5', 'css3', 'javascript'],
      name:"Site responsivo", 
      text:"Este é um site simples, sem muito elementos visuais.O principal objetivo é aprender sobre a responsividade, aplicando neste site a responsividade para cada tamanho de tela, sendo ela: Celular, Tablets e Computadores/Notebooks.",
      path:responsivo,
      linkGithub:"https://github.com/SuaveGreen/site_responsivo",
      linkSite:"https://site-responsivo-plum.vercel.app/"
    }
    // Adicione mais projetos aqui
  ];

  // Função para ir ao próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  // Função para ir ao slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  // Funções de toque para detectar deslizar
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    touchEndX.current = event.changedTouches[0].screenX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  };

  return (
    <div className="relative max-w-[50vh] mx-auto overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="whitespace-nowrap transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {projects.map((project, index) => (
          <div key={index} className="inline-block min-w-full">
            <Projects
              name={project.name}
              text={project.text}
              path={project.path}
              linkGithub={project.linkGithub}
              linkSite={project.linkSite}
              tecnologiaUsada={project.tecnologiaUsada}
            />
          </div>
        ))}
      </div>

      {/* Controles de Navegação */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;


        

        

        


        //  tecnologiaUsada={['react', 'tailwindcss', 'typescript', 'html5']}
        //   name:"Expert notes" 
        //   text:"Feito na RecketSeat, junto com o professo Diego Fernandes, 
        //     na NLW - Trilha de React O site é um bloco de notas, onde também 
        //     podemos transcrever áudio em texto, e salvar na memória do navegador. 
        //     Usamos o React para criar os conteúdos, e com Tailwind CSS estilizamos 
        //     os componentes." 
        //   path:expertNote
        //   linkGithub:"https://github.com/SuaveGreen/Bloco_de_notas" 
        //   linkSite:"https://expert-notes-green.vercel.app"
                
        //  tecnologiaUsada:{['react', 'tailwindcss', 'typescript', 'html5']}
        //   name:"Twitter" 
        //   text:"Este site foi criado em um MasterClass junto com o professor 
        //     Diego Fernandes, da RocketSeat. O principal intuito desta 
        //     MasterClass, era aprender conceitos básicos, mas muito importantes 
        //     para um bom conhecimento e uma boa base." 
        //   path:twitter
        //   linkGithub:"https://github.com/SuaveGreen/ui-twitter" 
        //   linkSite:"https://ui-twitter-lime.vercel.app"
                
        //  tecnologiaUsada:{['html5', 'css3', 'javascript']}
        //   name:"SmartWatch Apple" 
        //   text:"Um site sobre o smartwatch da Apple, feito no intensivão da 
        //     Hashtag de JavaScript Aula 2,
        //     o objetivo deste site era a manipulação dos elementos da tela, 
        //     onde cada clique de um usuário alteraria a cor, o tamanho do 
        //     relógio e o titulo." 
        //   path:applePage
        //   linkGithub:"https://github.com/SuaveGreen/landing-page_Apple" 
        //   linkSite:"https://page-apple.vercel.app"

        //  tecnologiaUsada:{['html5', 'css3', 'javascript']}
        //   name:"Áudio Book" 
        //   text:"Um site simples, como objetivo de aprender mais sobre alguns 
        //     conceitos importantes sobre JavaScript. Foi criado
        //     um player de Áudio Book, onde percorremos sobre cada uns dos 
        //     áudios, onde podemos apertar o play para ouvir, ou avançar a 
        //     faixa ou retroceder." 
        //   path:audioBook
        //   linkGithub:"https://github.com/SuaveGreen/audio-book" 
        //   linkSite:"https://audio-book-roan.vercel.app"
          