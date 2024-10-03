import { Text } from "@react-pdf/renderer";
import { Section } from "./Section";
import skillsData from "./data/skills.json";

export const SkillsSection = () => {
    return (
        <Section title="Technical Skills">
            <Text>{skillsData.join(", ")}</Text>
        </Section>
    );
};
