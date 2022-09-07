import encode from "../assets/imgs/logo-encode.png";
import freelance from "../assets/imgs/freelance.png";
export interface ITask {
  id: number;
  description: string;
}

export interface IExperienceInfo {
  company: string;
  position: string;
  dateFrom: string;
  dateTo: string;
  tasks: ITask[];
  img: string;
  id: number;
}

export const ExperienceInfoList: Array<IExperienceInfo> = [
  {
    company: "Encode SA",
    position: "Full Stack Developer",
    dateFrom: "Aug 14, 2021",
    dateTo: "May 14, 2022",
    tasks: [
      {
        id: 1,
        description: "Database managment (SQL Server)",
      },
      {
        id: 2,
        description: "Develop User Interfaces (React)",
      },
      {
        id: 3,
        description: "API Rest (.Net Core 3.1)",
      },
      {
        id: 4,
        description: "Work at Agile Methodologies SCRUM",
      },
      {
        id: 5,
        description: "Libraries:  Bootstrap",
      },
    ],
    img: encode,
    id: 1,
  },
  {
    company: "Freelance",
    position: "Front End Developer",
    dateFrom: "May 14, 2022",
    dateTo: "",
    tasks: [
      {
        id: 1,
        description: "Develop User Interfaces (React)",
      },

      {
        id: 5,
        description: "Libraries: Material UI, Tailwind, Bootstrap",
      },
    ],
    img: freelance,
    id: 2,
  },
];
