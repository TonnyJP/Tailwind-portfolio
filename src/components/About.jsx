import about from "../assets/about.svg"
import {SectionTitle} from "./SectionTitle"
export const About = () => {
    return (<section className="bg-white py-20" id="about">
        <div className="align-element grid md:grid-cols-2"> 
        <img src={about} className="w-full h-64" />
        <article>
            <SectionTitle title="code and cofe"/>
            <p className="text-slade-600 mt-8 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex asperiores officiis voluptates quisquam maiores doloremque distinctio commodi unde? Atque necessitatibus velit libero voluptates itaque obcaecati unde. Sapiente consectetur aut eaque minima modi. Sequi consectetur optio alias, tempora voluptatem expedita mollitia cumque, unde laboriosam eveniet recusandae, dolor modi eum illum.
            </p>
        </article>
        </div>
    </section>)
}