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
  img?: string;
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
    position: "Full Stack Developer",
    dateFrom: "May 14, 2022",
    dateTo: "Aug 1, 2022",
    tasks: [
      {
        id: 1,
        description: "Develop User Interfaces (React)",
      },

      {
        id: 2,
        description: "Libraries: Material UI, Tailwind, Bootstrap",
      },
      {
        id:3,
        description: "Backend develop"
      },
      {
        id:4,
        description: "Manage Databases (MongoDB, SQL Server)"
      }
    ],
    img: freelance,
    id: 2,
  },
  {
    company: "Innovasoft",
    position: "React Front End Developer",
    dateFrom: "Aug 1, 2022",
    dateTo: "Jan 20, 2023",
    tasks: [
      {
        id: 1,
        description: "Develop User Interfaces (React)",
      },
      {
        id: 2,
        description: "Libraries: Material UI, Tailwind, Bootstrap",
      }
    ],
    id:3,
  },
  {
    company: "Global Think Technology",
    position: "React Front End Developer",
    dateFrom: "Jan 20, 2023",
    dateTo: "",
    tasks: [
      {
        id: 1,
        description: "Develop User Interfaces (React)",
      },
      {
        id: 2,
        description: "Estimated planning",
      },
      {
        id: 3,
        description: "Jira, Bitbucket, Confluence, Github",
      },
      {
        id: 4,
        description: "Datadog",
      }
    ],
    id:3,
  }
];
