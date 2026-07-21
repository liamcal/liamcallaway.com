import { Text, View } from "@react-pdf/renderer";
import { Section } from "./Section";
import skillsData from "./data/skills.json" assert { type: "json" };

export const SkillsSection = () => {
    return (
        <Section title="Technical Skills">
            <View style={{ display: "flex", flexDirection: "column" }}>
                {skillsData.map(({ title, values }, idx) => (
                    <Text key={idx}>
                        <Text style={{ fontWeight: "bold" }}>{title}: </Text>
                        <Text>{values.join(", ")}</Text>
                    </Text>
                ))}
            </View>
        </Section>
    );
};
