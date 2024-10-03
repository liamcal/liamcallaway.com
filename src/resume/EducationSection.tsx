import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import educationData from "./data/education.json" assert { type: "json" };

export const EducationSection = () => {
    return (
        <Section title="Education">
            {educationData.map((education, idx) => (
                <SectionItem
                    key={idx}
                    heading={education.name}
                    duration={education.duration}
                    description={education.description}
                    includeListBullets={true}
                />
            ))}
        </Section>
    );
};
