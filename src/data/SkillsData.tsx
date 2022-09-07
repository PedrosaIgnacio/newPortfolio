import { ReactNode } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejsSmall } from "react-icons/di";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialui,
  SiCsharp,
  SiExpress,
  SiMicrosoftsqlserver,
} from "react-icons/si";
export interface ISkill {
  id: number;
  icon: ReactNode;
  title: string;
}

export const Skills: ISkill[] = [
  {
    id: 1,
    icon: <SiTypescript size="4rem" color="#2F74C0" />,
    title: "TypeScript",
  },
  {
    id: 2,
    icon: <SiJavascript size="4rem" color="#E9D44D" />,
    title: "JavaScript",
  },
  {
    id: 3,
    icon: <AiFillHtml5 size="4rem" color="#F75421" />,
    title: "HTML",
  },
  {
    id: 4,
    icon: <SiBootstrap size="4rem" color="#8712F4" />,
    title: "Bootstrap",
  },
  {
    id: 5,
    icon: <DiReact size="4rem" color="#5ED3F3" />,
    title: "React Js",
  },
  {
    id: 6,
    icon: <SiMaterialui size="4rem" color="#0284CA" />,
    title: "Material UI",
  },
  {
    id: 7,
    icon: <SiTailwindcss size="4rem" color="#42A3AD" />,
    title: "Tailwind",
  },

  {
    id: 8,
    icon: <SiMicrosoftsqlserver size="4rem" color="#B11B1B" />,
    title: "SQL Server",
  },
  {
    id: 9,
    icon: <SiCsharp size="4rem" color="#642075" />,
    title: "C#",
  },
  {
    id: 10,
    icon: <SiExpress size="4rem" color="" />,
    title: "Express",
  },

  {
    id: 11,
    icon: <DiCss3 size="4rem" color="#31A4D5" />,
    title: "CSS",
  },
  {
    id: 12,
    icon: <DiNodejsSmall size="4rem" color="#83BA3F" />,
    title: "Node Js",
  },
];
