import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { SocialIcon } from "react-social-icons";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { technologies } from "./data/technologies";
import { projects } from "./data/projects";
import CardTechnology from "./components/TechnologysCard";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("");

  return (
    <div className="h-screen scrollbar">
      <Navbar items={["Início", "Sobre mim", "Conhecimentos", "Projetos"]} />

      <Section name="Início" className="bg-background2 bg-texture bg-fixed h-auto">
        <main className="w-full h-screen mt-20 md:mt-0">
          <div className="w-full h-full flex flex-col-reverse items-center justify-between lg:grid lg:grid-cols-2 px-5 lg:px-48">
            <div className="py-5 hidden md:block">
              <h3 className="text-2xl mb-2 text-primary text-center lg:text-start">
                Olá, meu nome é
              </h3>
              <h2 className="text-6xl mb-6 text-white/90 font-bold text-center lg:text-start">
                Marco Pitanga.
              </h2>
              <p className="text-4xl text-white/60 font-medium text-center lg:text-start">
                Sou um desenvolvedor especializado em aplicações Web.
              </p>
            </div>

            <div className="py-5 block md:hidden">
              <h2 className="text-4xl mb-3 text-white">Marco Pitanga</h2>
              <h3 className="text-xl mb-6 text-primary">Desenvolvedor Web</h3>
              <p className="text-xl text-justify">
                Recém-formado em Ciência da Computação, com 3 anos de foco em Desenvolvimento Web.
                Contribuí como estagiário full-stack para o desenvolvimento de uma plataforma
                interna de gestão em um estúdio criativo. Agora, estou buscando oportunidades para
                aplicar e expandir minhas habilidades no desenvolvimento web.
              </p>
              <div className="flex justify-center row-span-1 gap-5 mt-10">
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

            <aside className="w-full h-full flex flex-col items-center lg:items-end justify-center">
              <img src="aside-main.png" className="aside-main" />
            </aside>
          </div>
        </main>
      </Section>

      <Section name="Sobre mim" className="hidden md:block bg-background2 bg-texture bg-fixed">
        <div className="flex justify-between items-center p-6  border-2 border-gray-800 bg-background3 md:grid md:grid-cols-2 max-w-[1140px] my-0 mx-auto">
          <div className="flex justify-center items-center h-[500px]">
            <div className="h-[300px] w-[300px] bg-primary rounded-full flex justify-center items-center uppercase text-9xl text-gray-950 font-[Anurati]">
              <p>mp</p>
            </div>
          </div>
          <div className="h-full grid grid-rows-5">
            <div className="row-span-1"></div>
            <div className="row-span-3">
              <h2 className="text-4xl mb-3 text-white">Marco Pitanga</h2>
              <h3 className="text-xl mb-6 text-primary">Desenvolvedor Web</h3>
              <p className="text-xl text-justify">
                Recém-formado em Ciência da Computação, com 3 anos de foco em Desenvolvimento Web.
                Contribuí como estagiário full-stack para o desenvolvimento de uma plataforma
                interna de gestão em um estúdio criativo. Agora, estou buscando oportunidades para
                aplicar e expandir minhas habilidades no desenvolvimento web.
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
      </Section>

      <Section name="Conhecimentos" className="bg-background h-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center p-6 lg:grid lg:grid-cols-2 max-w-[1140px] my-0 mx-auto gap-5">
          <div className="flex flex-col lg:w-[500px] lg:h-[500px] lg:max-w-[500px] lg:mr-10">
            <h3 className="font-semibold text-4xl mb-10 md:mb-4 text-white">Conhecimentos</h3>
            <h4 className="font-semibold text-lg text-justify hidden lg:block">
              {selectedTechnology || "Passe o mouse sobre um card para ler"}
            </h4>
          </div>
          <div className="h-full grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto">
            {technologies.map((tech, index) => (
              <CardTechnology tech={tech} key={index} setSelectedTechnology={setSelectedTechnology}>
                <img src={`logo-${tech.name}.svg`} width={75} />
              </CardTechnology>
            ))}
          </div>
        </div>
      </Section>

      <Section name="Projetos" className="bg-background2 bg-texture bg-fixed h-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white font-semibold text-4xl mb-20">Projetos</h2>
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto py-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
