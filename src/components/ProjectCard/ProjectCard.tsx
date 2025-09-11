// src/components/ProjectCard/ProjectCard.tsx
import * as React from "react";
import './ProjectCard.css';
import {projects} from "../../constants/Data";
import TagList from "../TagsList/TagList";

interface ProjectCardProps {
    projectId: number;
    children?: React.ReactNode;
}

function ProjectCard ({ projectId, children }: ProjectCardProps)  {
    const project = projects.filter(p => p.idProject === projectId)[0]; // seul moyen de

    return (
        <article className="project-card shadows">
            <img src={project.img} alt={project.name} className="project-image" />
            <div className="project-content">
                <h2 id={`project-title-${projectId}`} className="project-title">{project.name}</h2>
                <p className="project-resume">{project.resume}</p>

                <ul className="project-features">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>

                <TagList data_list={project.tags} />

                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    Voir le projet
                </a>
                {children}
            </div>
        </article>
    );
}

export default ProjectCard;
