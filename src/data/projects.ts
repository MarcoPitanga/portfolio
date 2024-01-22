export interface project {
  name: string;
  description?: string;
  url?: string;
  github: string;
}
export const projects: Array<project> = [
  {
    name: "Netflix Clone",
    description: "Um clone simples da Netflix feito com React JS e consumindo uma API de videos.",
    url: "https://clinquant-frangipane-b11faa.netlify.app/",
    github: "https://github.com/MarcoPitanga/netflix-clone",
  },
  {
    name: "Pong Multiplayer",
    description:
      "Jogo Pong integrado a um sistema de chat em tempo real desenvolvido com React, Node.js e Socket.io. O projeto visa explorar e aplicar os princípios do Socket.io. Os usuários têm a capacidade de criar salas onde, ao entrar, podem participar de partidas do clássico jogo Pong.",
    github: "https://github.com/MarcoPitanga/Pong-Multiplayer",
  },
];
