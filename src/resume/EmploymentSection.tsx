import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import employmentData from "./data/employment.json" assert { type: "json" };

export const EmploymentSection = () => {
    return (
        <Section title="Employment">
            {employmentData.map((employment, idx) => (
                <SectionItem
                    key={idx}
                    heading={employment.name}
                    subHeading={employment.role}
                    duration={employment.duration}
                    description={employment.description}
                    includeListBullets={true}
                />
            ))}
        </Section>
    );
};
