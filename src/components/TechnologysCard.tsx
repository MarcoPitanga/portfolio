import { ReactNode } from "react";
import { technology } from "../data/technologies";

interface TechnologysCardProps {
  index: number;
  setSelectedTechnology: (value: string) => void;
  tech: technology;
  children?: ReactNode;
}

export default function TechnologysCard({
  index,
  setSelectedTechnology,
  tech,
  children,
}: TechnologysCardProps) {
  return (
    <div
      key={index}
      tabIndex={1}
      onMouseEnter={() => setSelectedTechnology(tech.description)}
      onMouseLeave={() => setSelectedTechnology("")}
      role="button"
      className="border border-background hover:border-primary duration-500 rounded-xl bg-background3/25 flex justify-center items-center"
    >
      {children}
    </div>
  );
}
