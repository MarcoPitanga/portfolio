import { ReactNode } from "react";

interface SectionProps {
  name: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({ name, className, children }: SectionProps) {
  return (
    <section
      id={name}
      className={
        `max-h-[90vh] py-[72px] h-[90vh] flex justify-center items-center text-2xl pt-20 ` +
        className
      }
    >
      {children}
    </section>
  );
}
