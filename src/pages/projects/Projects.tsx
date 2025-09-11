import './Projects.css'
import {PROJECTS_URL} from "../../constants/URL";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Grid from "../../components/Grid/Grid";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectCardList from "../../components/ProjectCardList/ProjectCardList";

function Projects() {
    return (
        <section className="projects" id={PROJECTS_URL} role="Présenter brièvement mes projets">
            <SectionTitle title="Mes réalisations"/>
            <Grid min="21rem" max="1fr" gap="5rem">
                <ProjectCard projectId={2}/>
                <ProjectCardList />
            </Grid>
        </section>
    )
}

export default Projects;
