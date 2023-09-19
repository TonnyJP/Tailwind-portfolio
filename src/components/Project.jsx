import {projects} from "../data"
import {ProjectCard} from "./ProjectCard"
import {SectionTitle} from "./SectionTitle"

export const Projects = () => {

    return (<section className="py-20 align-element" id="projects">
        <SectionTitle title="web creations" />
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
                return <ProjectCard key={project.id} {...project} />
            })}
        </div>

    </section>)
}