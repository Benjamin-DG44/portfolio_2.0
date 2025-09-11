import {getImageUrl} from "../utils/getUrls";

// A propos de moi
// TODO: faire une liste de soft skills et l'ajouter dans la section à propos de moi
export const soft_skills: string[] = [];

export const personnal_skills: string[] =
    ["HTML", "CSS", "Javascript", "PHP", "Java", "Python", "MySQL", "PostgreSQL", "Express JS", "Prisma", "React", "React Native"];

export const softwares: string[] =
    ["VS Code", "NetBeans", "Pycharm", "Webstorm", "IntelliJ IDEA"]


// Projets réalisés
export interface Project {
    idProject: number;
    img: string;
    name: string;
    resume: string;
    features: string[];
    tags: string[];
    url: string;
}

// TODO : ajouté les projets
export const projects: Project[] = [
    {
        idProject: 1,
        img: getImageUrl("test"),
        name: "projet 1",
        resume: "lorem ipsum",
        features: [
            "test",
            "test",
            "test"
        ],
        tags: ["React", "Prisma"],
        url: ""
    },
    {
        idProject: 2,
        img: getImageUrl("test"),
        name: "projet 2",
        resume: "lorem ipsum",
        features: [
            "test",
            "test",
            "test"
        ],
        tags: ["React", "Prisma"],
        url: "blablacar"
    },
];
