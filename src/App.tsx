import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./App.css";
import { SocialIcon } from "react-social-icons";

const App = () => {
  const [selectedTecnology, setSelectedTecnology] = useState("");

  const tecnologias = [
    {
      nome: "html",
      descricao:
        "HTML é uma linguagem de marcação para páginas web, estruturando conteúdo e incluindo elementos como texto, imagens e links. É interpretado pelos navegadores para exibir páginas interativas na web.",
    },
    {
      nome: "css",
      descricao:
        "CSS é uma linguagem de estilo para páginas web, controlando layout, cores e fontes. Permite design responsivo e melhora a aparência das páginas.",
    },
    {
      nome: "php",
      descricao:
        "PHP é uma linguagem de script para web, processa formulários, acessa bancos de dados e gera conteúdo dinâmico em páginas web.",
    },
    {
      nome: "javascript",
      descricao:
        "JavaScript é uma linguagem de programação para web que adiciona interatividade a páginas. Roda no navegador, permitindo validação de formulários, animações e atualizações dinâmicas, melhorando a experiência do usuário.",
    },
    {
      nome: "typescript",
      descricao:
        "TypeScript é uma extensão do JavaScript que adiciona tipagem estática e recursos de orientação a objetos. Compila para JavaScript, melhorando a segurança e a manutenção do código. Ideal para desenvolvimento de aplicativos web escaláveis e robustos.",
    },
    {
      nome: "python",
      descricao:
        "Python é uma linguagem de programação usada em desenvolvimento web, automação, análise de dados e inteligência artificial. É popular por sua simplicidade e poder, sendo escolha comum para profissionais e iniciantes.",
    },
    {
      nome: "tailwind",
      descricao:
        "Tailwind CSS é um framework de estilo que simplifica o desenvolvimento web, oferecendo classes pré-definidas para estilizar elementos HTML. Ajuda a criar designs atraentes e responsivos com facilidade e eficiência. É altamente configurável e amplamente usado por desenvolvedores.",
    },
    {
      nome: "react",
      descricao:
        "React é uma biblioteca JavaScript para criar interfaces de usuário dinâmicas em aplicações web. Ele utiliza componentes reutilizáveis e um modelo declarativo para atualizar automaticamente a interface com mudanças nos dados. Amplamente usado para desenvolver aplicações web modernas e interativas.",
    },
    {
      nome: "laravel",
      descricao:
        "Laravel é um framework de desenvolvimento web em PHP que simplifica a criação de aplicativos seguros e escaláveis, oferecendo recursos como roteamento, autenticação e manipulação de bancos de dados. É amplamente usado e conta com uma comunidade ativa de desenvolvedores.",
    },
    {
      nome: "mysql",
      descricao:
        "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto, amplamente utilizado em aplicativos web. Utiliza a linguagem SQL para consultas e operações, sendo conhecido por sua confiabilidade e escalabilidade. É uma escolha popular entre os desenvolvedores devido ao seu desempenho e facilidade de uso.",
    },
    {
      nome: "git",
      descricao:
        "Git é um sistema de controle de versão que rastreia alterações em projetos de software, permitindo colaboração e gerenciamento eficaz de código. Ele usa ramos para desenvolvimento paralelo e é essencial para trabalho em equipe, mantendo um registro completo de modificações no código ao longo do tempo.",
    },
    {
      nome: "figma",
      descricao:
        "Figma é uma plataforma de design baseada na nuvem que permite criar, colaborar e prototipar interfaces de usuário em tempo real. É usado para design de aplicativos e sites, oferecendo facilidade de uso, colaboração simultânea e recursos avançados de prototipagem.",
    },
  ];

  const projetos = [
    {
      titulo: "HTML",
      descricao: "descrição html",
    },
    { titulo: "css", descricao: "descrição css" },
    { titulo: "php", descricao: "descrição php" },
    { titulo: "javascript", descricao: "descrição javascript" },
    { titulo: "typescript", descricao: "descrição typescript" },
    { titulo: "python", descricao: "descrição python" },
    { titulo: "tailwind", descricao: "descrição tailwind" },
    { titulo: "react", descricao: "descrição react" },
    { titulo: "laravel", descricao: "descrição laravel" },
    { titulo: "mysql", descricao: "descrição mysql" },
    { titulo: "git", descricao: "descrição git" },
    { titulo: "figma", descricao: "descrição figma" },
  ];

  const handleSelectedTecnology = (tecnology: string) => {
    setSelectedTecnology(tecnology);
  };

  const handleMenuItemClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen scrollbar">
      <header className="fixed z-10 flex justify-around items-center text-5xl w-full h-20 bg-background3/80 border-b-2 border-background3 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h2 className="ml-3 text-4xl text-primary font-[Anurati]">MARCO</h2>
          <menu className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              className="text-lg mr-6 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer"
              onClick={() => handleMenuItemClick("Início")}
            >
              Início
            </a>
            <a
              className="text-lg mr-6 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer"
              onClick={() => handleMenuItemClick("Sobre mim")}
            >
              Sobre mim
            </a>
            <a
              className="text-lg mr-5 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer"
              onClick={() => handleMenuItemClick("Conhecimentos")}
            >
              Conhecimentos
            </a>
            <a
              className="text-lg mr-5 transition duration-300 ease-in-out hover:text-white text-[#bbbbbb] cursor-pointer"
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
        <div className="flex justify-between items-center p-6 md:grid md:grid-cols-2 max-w-[1140px] my-0 mx-auto gap-5">
          <div className="flex flex-col w-[500px] h-[500px] max-w-[500px] mr-10">
            <h3 className="font-semibold text-4xl mb-4 text-white">Conhecimentos</h3>
            <h4 className="font-semibold text-lg text-justify">
              {selectedTecnology || "Passe o mouse sobre um card para ler"}
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
          <div className="h-full grid grid-cols-4 gap-4 scrollbar max-h-[60vh] p-4">
            {projetos.map((projeto, index) => (
              <div
                key={index}
                tabIndex={1}
                role="button"
                className="border border-background px-3 pt-3 duration-500 rounded-xl bg-background3/25 flex flex-col justify-center items-center"
              >
                <div className="w-[200px] h-[200px] border-b border-primary">
                  <h3 className="text-2xl text-center text-white">{projeto.titulo}</h3>
                  <p className="text-lg">{projeto.descricao}</p>
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
