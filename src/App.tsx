import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./App.css";
import { SocialIcon } from "react-social-icons";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [selectedTecnology, setSelectedTecnology] = useState("");

  const tecnologias = [
    { nome: "html", descricao: "descrição html" },
    { nome: "css", descricao: "descrição css" },
    { nome: "php", descricao: "descrição php" },
    { nome: "javascript", descricao: "descrição javascript" },
    { nome: "typescript", descricao: "descrição typescript" },
    { nome: "python", descricao: "descrição python" },
    { nome: "tailwind", descricao: "descrição tailwind" },
    { nome: "react", descricao: "descrição react" },
    { nome: "laravel", descricao: "descrição laravel" },
    { nome: "mysql", descricao: "descrição mysql" },
    { nome: "git", descricao: "descrição git" },
    { nome: "figma", descricao: "descrição figma" },
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
      <header className="fixed z-10 flex justify-around items-center text-5xl w-full h-20 bg-background3/80 border-b-2 border-background3 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h2 className="ml-3 text-4xl text-primary font-[Anurati]">MARCO</h2>
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

      <section id="Início" className="section bg-background2 pt-20">
        <main className="w-full h-screen">
          <div className="w-full h-full flex flex-col-reverse items-center justify-between md:grid md:grid-cols-2 px-5 md:px-48">
            <div className="py-5">
              <h3 className="text-2xl mb-2 text-primary">Olá, meu nome é</h3>
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

      <section id="Sobre mim" className="section bg-background">
        <div className="flex justify-between items-center p-6  border-2 border-gray-800 bg-background3 md:grid md:grid-cols-2 max-w-[1140px] my-0 mx-auto">
          <div className="flex justify-center items-center h-[500px]">
            <div className="h-[300px] w-[300px] bg-primary rounded-full flex justify-center items-center uppercase text-9xl text-gray-950 font-[Anurati]">
              <p>mp</p>
            </div>
          </div>
          <div className="py-5 h-full grid grid-rows-5">
            <div className="row-span-1"></div>
            <div className="row-span-3">
              <h2 className="text-4xl mb-3 text-white">Marco Pitanga</h2>
              <h3 className="text-xl mb-6 text-primary">Desenvolvedor Web</h3>
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
                className="hover:border-2 hover:border-primary rounded-full"
              />
              <SocialIcon
                data-tooltip-id="linkedin"
                network="linkedin"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://www.linkedin.com/in/marco-pitanga/"
                target="_blank"
                className="hover:border-2 hover:border-primary rounded-full"
              />
              <SocialIcon
                data-tooltip-id="instagram"
                network="instagram"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://www.instagram.com/marco.215/"
                target="_blank"
                className="hover:border-2 hover:border-primary rounded-full"
              />
              <SocialIcon
                data-tooltip-id="email"
                network="email"
                fgColor="#64ffda"
                bgColor="#0a192f"
                onClick={() => (window.location.href = "mailto:marcopitanga21@gmail.com")}
                target="_blank"
                className="hover:cursor-pointer hover:border-2 hover:border-primary rounded-full"
              />
              <SocialIcon
                data-tooltip-id="number"
                network="whatsapp"
                fgColor="#64ffda"
                bgColor="#0a192f"
                url="https://wa.me/5521983440206/"
                target="_blank"
                className="hover:border-2 hover:border-primary rounded-full"
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

      <section id="Conhecimentos" className="section bg-background2">
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
                onMouseEnter={() => handleSelectedTecnology(tecnologia.descricao)}
                onMouseLeave={() => handleSelectedTecnology("")}
                role="button"
                className="border border-background hover:border-primary duration-500 rounded-xl bg-background3/25 flex justify-center items-center"
              >
                <img src={`logo-${tecnologia.nome}.svg`} width={75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Projetos" className="section bg-background">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white font-semibold text-4xl mb-20">Projetos</h2>
          <div className="h-full grid grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((tecnologia, index) => (
              <div
                key={index}
                tabIndex={1}
                role="button"
                className="border border-background px-3 pt-3 duration-500 rounded-xl bg-background3/25 flex flex-col justify-center items-center"
              >
                <div className="w-[200px] h-[200px] border-b border-primary">
                  <h3 className="text-2xl text-center text-white">Titulo</h3>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit, numquam temporibus
                    voluptas.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 p-2">
                  <div className="w-11 h-11 border-2 border-transparent hover:border-primary rounded-full text-xl hover:text-lg flex justify-center items-center p-6 bg-background text-primary">
                    site
                  </div>
                  <SocialIcon
                    data-tooltip-id="github"
                    network="github"
                    fgColor="#64ffda"
                    bgColor="#0a192f"
                    url="https://github.com/MarcoPitanga"
                    target="_blank"
                    className="hover:border-2 hover:border-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
