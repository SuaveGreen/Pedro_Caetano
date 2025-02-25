import { Aside } from "./containers/Aside";
import { AboutMe } from "./containers/AboutMe";
import { JaEstudei } from "./containers/JaEstudei";
import { Hero } from "./containers/Hero";
import { ButtonTop } from "./components/ButtonTop";
import { Link } from "react-scroll";
import { CarouselProjects } from "./components/carrouselProjects";

export function App() {
  return (
    // grid grid-cols-mainContainer
    <main className=" bg-gradient-to-r from-[#121922]">
      <Aside />
      <div className="" id="hero">
        <Hero />
          <AboutMe />
          <JaEstudei
            tecnologia={[
              { nome: "react", valor: 65 },
              { nome: "tailwindcss", valor: 70 },
              { nome: "typescript", valor: 55 },
              { nome: "javascript", valor: 45 },
              { nome: "html5", valor: 75 },
              { nome: "css3", valor: 70 },
              { nome: "git", valor: 65 },
              { nome: "github", valor: 70 }
            ]}
          />
        <CarouselProjects/>
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&color=C6E5B1&height=80&section=footer"
          className="w-full mt-5"
        />
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={30}
          duration={1000}
        >
          <ButtonTop />
        </Link>
      </div>
    </main>
  );
}
