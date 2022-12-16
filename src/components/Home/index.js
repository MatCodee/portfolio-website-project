import {Link} from "react-router-dom";

import Card from "../Card";

import "./index.css";

import p1 from "../../assets/p1.jpg";


import projects from "../../utils/projects.json";

const Home = () => {
    return (
        <div className="container-home">
            <div className="box-layout">
                <h1> Website and user interface designer</h1>
                <p>Over the past 9 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups to successfully 
                    help them reach their full potential and attract new customers.</p>
            </div>


            <section className="section-layout">
                <p>SELECTED PROJECTS</p>
                <h3>Algunos de mis proyectos </h3>

                <div className="list">
                    {projects.map((e,index) => {
                        return <div className="list-item-1 animation-list">
                            <Card key={index}  data={e} />
                        </div> 
                    })}
                </div>

            </section>



            <section className="footer-section">
                <h2>¿Preparado para comenzar?</h2>
                <p>You know about me, let’s talk about you.</p>
            </section>
        </div>
    )
}

export default Home