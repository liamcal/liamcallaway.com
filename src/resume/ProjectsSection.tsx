import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import projects from "./data/projects.json" assert { type: "json" };

export const ProjectsSection = () => {
    const projectData = projects;

    return (
        <Section title="Personal Projects">
            {projectData.map((project, idx) => (
                <SectionItem
                    key={idx}
                    heading={project.name}
                    link={project.link}
                    description={[project.description]}
                    includeSeparateLink={true}
                />
            ))}
        </Section>
    );
};
