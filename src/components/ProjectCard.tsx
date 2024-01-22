import { project } from "../data/projects";
import { SocialIcon } from "react-social-icons";

interface ProjectCardProps {
  index: number;
  project: project;
}

export default function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <div key={index} className="card relative bg-background3 rounded-lg shadow-lg">
      <div className="w-full h-full face face1 p-5">
        <div className="content">
          <div className="h-20 flex justify-around items-center">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                className="text-center text-xl text-primary hover:text-primary/60 cursor-pointer"
              >
                Visualizar Projeto
              </a>
            )}
            <SocialIcon
              network="github"
              fgColor="#64ffda"
              bgColor="#0a192f"
              url={project.github}
              target="_blank"
              className="hover:border-2 hover:border-primary rounded-full"
            />
          </div>
          <p className="text-white px-1 text-justify text-xl max-h-80 scrollbar">
            {project.description}
          </p>
        </div>
      </div>
      <div className="face face2 w-full h-full flex flex-col justify-center items-center bg-background rounded-2xl transition-all duration-500">
        <h2 className="text-primary text-4xl text-center transition-all duration-500 z-10">
          {project.name}
        </h2>
      </div>
    </div>
  );
}
