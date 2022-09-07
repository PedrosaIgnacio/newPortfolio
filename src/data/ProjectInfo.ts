import pokeImg from "../assets/imgs/pokeImg.jpeg";
import ramirezImg from "../assets/imgs/ramirezImg.jpeg";
import heresImg from "../assets/imgs/heroesImg.jpeg";
export interface IProject {
  title: string;
  description: string;
  deploy: string;
  repository: string;
  img: string;
  id: number;
}

export const Projects: Array<IProject> = [
  {
    title: "Poke App",
    description: "First Generation Pokemon App",
    deploy: "https://pokeapp-pi.vercel.app/",
    repository: "https://github.com/PedrosaIgnacio/pokeapp",
    img: pokeImg,
    id: 1,
  },
  {
    title: "Ramirez App",
    description: "Personal / Professional page",
    deploy: "https://lic-ramirez.vercel.app/",
    repository: "https://github.com/PedrosaIgnacio/lic-ramirez",
    img: ramirezImg,
    id: 2,
  },
  {
    title: "Heroes App",
    description: "Marvel and DC Heroes App",
    deploy: "https://heroes-app-iota-ten.vercel.app/",
    repository: "https://github.com/PedrosaIgnacio/heroes-app",
    img: heresImg,
    id: 3,
  },
];
