import { Text, View } from "@react-pdf/renderer";
import { Section } from "./Section";
import skillsData from "./data/skills.json";

export const SkillsSection = () => {
    return (
        <Section title="Technical Skills">
            {/* <View style={{display: "flex", flexDirection: "column", gap: 0}}>
                {skillsData.map((skill, idx) => (
                    <Text key={idx} style={{ fontSize: 10 }}>
                        • {skill}
                    </Text>
                ))}
            </View> */}
            <Text style={{ fontSize: 10 }}>{skillsData.join(", ")}</Text>
        </Section>
    );
};
