import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./App.css";
import { SocialIcon } from "react-social-icons";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedTecnology, setSelectedTecnology] = useState("");

  const tecnologias = [
    "html",
    "css",
    "php",
    "javascript",
    "typescript",
    "python",
    "tailwind",
    "react",
    "laravel",
    "mysql",
    "git",
    "figma",
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectedTecnology = (tecnology: string) => {
    setSelectedTecnology(tecnology);
  };

  const handleMenuItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        setCurrentSection(section.id);
      }
    });
  };

  return (
    <div className="h-screen">
      <header className="fixed z-10 flex justify-around items-center text-5xl w-full h-20 bg-gray-950/80 border-b-2 border-[#111111] ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h2 className="ml-3 text-4xl text-[#64ffda] font-[Anurati]">MARCO</h2>
          <menu className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              className={`text-lg mr-6 transition duration-300 ease-in-out hover:text-white ${
                currentSection === "Início" ? "text-white" : "text-[#bbbbbb]"
              }`}
              onClick={() => handleMenuItemClick("Início")}
            >
              Início
            </a>
            <a
              className={`text-lg mr-6 transition duration-300 ease-in-out hover:text-white ${
                currentSection === "Sobre mim" ? "text-white" : "text-[#bbbbbb]"
              }`}
              onClick={() => handleMenuItemClick("Sobre mim")}
            >
              Sobre mim
            </a>
            <a
              className={`text-lg mr-5 transition duration-300 ease-in-out hover:text-white ${
                currentSection === "Conhecimentos" ? "text-white" : "text-[#bbbbbb]"
              }`}
              onClick={() => handleMenuItemClick("Conhecimentos")}
            >
              Conhecimentos
            </a>
            <a
              className={`text-lg mr-5 transition duration-300 ease-in-out hover:text-white ${
                currentSection === "Projetos" ? "text-white" : "text-[#bbbbbb]"
              }`}
              onClick={() => handleMenuItemClick("Projetos")}
            >
              Projetos
            </a>
          </menu>
        </div>
      </header>

      <section id="Início" className="section bg-[#0a192f] pt-20">
        <main className="w-full h-screen">
          <div className="w-full h-full flex flex-col-reverse items-center justify-between md:grid md:grid-cols-2 px-5 md:px-48">
            <div className="py-5">
              <h3 className="text-2xl mb-2 text-[#64ffda]">Olá, meu nome é</h3>
              <h2 className="text-6xl mb-6 text-white/90 font-bold">Marco Pitanga.</h2>
              <p className="text-4xl text-white/60 font-medium">
                Sou um desenvolvedor especializado em desenvolver aplicações Web.
              </p>
            </div>

            <aside className="w-full h-full flex flex-col items-end justify-center">
              <img src="aside-main.png" className="aside-main" />
            </aside>
          </div>
        </main>
      </section>

      <section id="Sobre mim" className="section bg-[#0a192f]">
        <div className="flex justify-between items-center p-6  border-2 border-gray-800 bg-gray-950 md:grid md:grid-cols-2 max-w-[1140px] my-0 mx-auto">
          <div className="flex justify-center items-center h-[500px]">
            <div className="h-[300px] w-[300px] bg-[#64ffda] rounded-full flex justify-center items-center uppercase text-9xl text-gray-950 font-[Anurati]">
              <p>mp</p>
            </div>
          </div>
          <div className="py-5 h-full grid grid-rows-5">
            <div className="row-span-1"></div>
            <div className="row-span-3">
              <h2 className="text-4xl mb-3 text-white">Marco Pitanga</h2>
              <h3 className="text-xl mb-6 text-[#64ffda]">Desenvolvedor Web</h3>
              <p className="text-xl text-justify">
                Sou estudante de Ciência da Computação, focado em Desenvolvimento Web há 3 anos.
                Profissionalmente tenho experiência com estagio full-stack, contribuindo para o
                desenvolvimento de uma plataforma interna de gestão para um estúdio criativo.
              </p>
            </div>

            <div className="flex row-span-1 gap-5">
              <SocialIcon
                data-tooltip-id="github"
                network="github"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://github.com/MarcoPitanga"
                target="_blank"
              />
              <SocialIcon
                data-tooltip-id="linkedin"
                network="linkedin"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://www.linkedin.com/in/marco-pitanga/"
                target="_blank"
              />
              <SocialIcon
                data-tooltip-id="instagram"
                network="instagram"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://www.instagram.com/marco.215/"
                target="_blank"
              />
              <SocialIcon
                data-tooltip-id="email"
                network="email"
                fgColor="#64ffda"
                bgColor="#0a192f"
                className="hover:cursor-pointer"
                onClick={() => (window.location.href = "mailto:marcopitanga21@gmail.com")}
                target="_blank"
              />
              <SocialIcon
                data-tooltip-id="number"
                network="whatsapp"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://wa.me/5521983440206/"
                target="_blank"
              />
              <ReactTooltip
                id="github"
                place="bottom"
                style={{ fontSize: "14px" }}
                content="MarcoPitanga"
              />
              <ReactTooltip
                id="linkedin"
                place="bottom"
                style={{ fontSize: "14px" }}
                content="marco-pitanga"
              />
              <ReactTooltip
                id="instagram"
                place="bottom"
                style={{ fontSize: "14px" }}
                content="marco.215"
              />
              <ReactTooltip
                id="number"
                place="bottom"
                style={{ fontSize: "14px" }}
                content="(21) 98344-0206"
              />
              <ReactTooltip
                id="email"
                place="bottom"
                style={{ fontSize: "14px" }}
                content="marcopitanga21@gmail.com"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Conhecimentos" className="section bg-[#0a192f]">
        <div className="flex justify-between items-center p-6 md:grid md:grid-cols-2 max-w-[1140px] my-0 mx-auto">
          <div className="flex flex-col w-[500px] h-[500px] max-w-[500px]">
            <h3 className="font-semibold text-4xl mb-4 text-white">Conhecimentos</h3>
            <h4 className="font-semibold text-xl">
              {selectedTecnology || "Passe o mouse no card para ler"}
            </h4>
          </div>
          <div className="h-full grid grid-cols-4 gap-4">
            {tecnologias.map((tecnologia, index) => (
              <div
                key={index}
                tabIndex={1}
                onMouseEnter={() => handleSelectedTecnology(tecnologia)}
                onMouseLeave={() => handleSelectedTecnology("")}
                role="button"
                className="border border-[#0a192f] hover:border-[#64ffda] duration-500 rounded-xl bg-gray-950/25 flex justify-center items-center"
              >
                <img src={`logo-${tecnologia}.svg`} width={75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Projetos" className="section bg-[#0a192f]">
        Em breve
      </section>
    </div>
  );
};

export default App;
