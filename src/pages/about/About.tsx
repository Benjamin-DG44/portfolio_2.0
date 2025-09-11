import './About.css'
import {ABOUT_URL, MY_PHOTO} from "../../constants/URL";
import TagList from "../../components/TagsList/TagList";
import {personnal_skills, softwares} from "../../constants/Data";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Card from "../../components/Card/Card";
import Grid from "../../components/Grid/Grid";

function About() {
    return (
        <section className="about" id={ABOUT_URL} role="presentation">
            <SectionTitle title="Qui suis je ?" />
            <Grid min="325px" max="1fr" gap="1.5rem">
                <div className="grid-item-1">
                    <Card variant="card">
                        <p className="text-2xl mb-1-25">Hey ! Je m'appelle Benjamin</p>
                        {/* TODO : arranger les classes de titres*/}
                        <p className="text-sm mb-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum
                            nostrum pariatur possimus sit. Autem blanditiis consequuntur corporis quia. Aliquam animi,
                            aperiam autem blanditiis commodi debitis et explicabo facilis fugit iure minus numquam odio
                            pariatur possimus rerum similique velit. Ipsa?<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aut beatae cum deserunt
                            dignissimos ea eius eligendi esse facilis iusto laboriosam libero magnam maiores molestiae
                            non odit quam quidem quo, reprehenderit saepe soluta sunt suscipit temporibus, totam vel
                            voluptate?
                        </p>
                        {/* +TODO : faire de ces sous-titres des composants*/}
                        <p className="text-lg mb-1">Compétences techniques</p>
                        <TagList data_list={personnal_skills}/>
                        <p className="text-lg mb-1 mt-1">Éditeurs de code</p>
                        <TagList data_list={softwares}/>
                    </Card>
                </div>
                {/* Photo */}
                <div className="grid-item-2">
                    <Card variant="photo" srcPhoto={MY_PHOTO} altText=" de ma tête" />
                </div>
            </Grid>
        </section>
    )
}

export default About;
