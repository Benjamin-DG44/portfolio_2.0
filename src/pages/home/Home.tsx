import * as React from "react";
import './Home.css'
import {Link} from "react-scroll";
import Button from '../../components/Button/Button'
import {ABOUT_URL, HOME_URL, PDF_CV, PROJECTS_URL} from "../../constants/URL";
import {ChevronDown} from "lucide-react";

function Home() {
    return (
        <section className="home" id={HOME_URL} role="Courte présentation">
            <div className="all-center">
                <p className="text-3xl text-gradient margin-home">Benjamin <br/>DELAUNAY-GUITTON</p>
                <p className="text-2xl margin-home">Étudiant en BTS SIO option SLAM</p>
                <div className="description">
                    <p className="text-lg ">Passionné par la programmation. J’entame ma <strong><i>seconde année en BTS
                        SIO option SLAM</i></strong> à La Joliverie à Nantes. Ayant un attrait pour la <strong><i>
                        programmation orientée objet</i></strong>, je souhaiterais me spécialiser dans le développement
                        logiciel.
                    </p>
                </div>
                <div className="button-group">
                    {/* TODO LATER: "draw" animation button*/}
                    <Button variant="primary" to={PROJECTS_URL}>
                        <p className="text-lg-bold">Voir mon travail</p>
                    </Button>
                    <Button variant="secondary" onClick={() => window.open(PDF_CV)} >
                        <p className="text-lg-bold">Télécharger CV</p>
                    </Button>
                </div>
                <div className="chevron bounce">
                    <Link to={ABOUT_URL} duration={500} smooth={true}>
                        <ChevronDown color="var(--primary-500)" size={"2rem"}/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;
