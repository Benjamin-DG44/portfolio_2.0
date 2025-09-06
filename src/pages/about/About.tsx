import './About.css'
import {ABOUT_URL, MY_PHOTO} from "../../constants/URL";
import TagList from "../../components/TagsList/TagList";
import {personnal_skills, softwares} from "../../constants/Data";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

function About() {
    return (
        <section className="about" id={ABOUT_URL} role="presentation">
            <SectionTitle title="Qui suis je ?" />
            <div className="grid-about">
                {/* Card */}
                <div className="grid-item-1">
                    <div className="card shadows">
                        <p className="text-2xl mb-1-25">Hey ! Je m'appelle Benjamin</p>
                        {/* TODO : arranger les classes de titres*/}
                        <p className="text-sm mb-1-25">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum
                            nostrum pariatur possimus sit. Autem blanditiis consequuntur corporis quia. Aliquam animi,
                            aperiam autem blanditiis commodi debitis et explicabo facilis fugit iure minus numquam odio
                            pariatur possimus rerum similique velit. Ipsa?<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aut beatae cum deserunt
                            dignissimos ea eius eligendi esse facilis iusto laboriosam libero magnam maiores molestiae
                            non
                            odit quam quidem quo, reprehenderit saepe soluta sunt suscipit temporibus, totam vel
                            voluptate?
                        </p>
                        <p className="text-lg mb-1">Compétences techniques</p>
                        <TagList data_list={personnal_skills}/>
                        <p className="text-lg mb-1 mt-1">Éditeurs de code</p>
                        <TagList data_list={softwares}/>
                    </div>

                </div>
                {/* Photo */}
                <div className="grid-item-2">
                    <img src={MY_PHOTO} alt="photo de ma tête" className="photo shadows"/>
                </div>
            </div>
        </section>
    )
}

export default About;
