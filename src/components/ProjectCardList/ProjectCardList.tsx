import * as React from "react";
import {projects} from "../../constants/Data";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectCardListProps {
    reverse?: boolean;
}

/**
 * Affiche tous les projets dans l'ordre croissant ou décroissant.
 *
 * @param reverse inverse ou non la liste des projets
 * @constructor
 */
function ProjectCardList({ reverse = false }: ProjectCardListProps) {
    const dataToRender = reverse ? [...projects].reverse() : projects;

    return (
        <>
            {dataToRender.map((p) => (
                <ProjectCard key={p.idProject} projectId={p.idProject} />
            ))}
        </>
    );
}

export default ProjectCardList;
