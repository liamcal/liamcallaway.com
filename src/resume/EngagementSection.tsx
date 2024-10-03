import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import engagementData from "./data/engagement.json";

export const EngagementSection = () => {
    return (
        <Section title="Industry Engagement">
            {engagementData.map((engagement, idx) => (
                <SectionItem
                    key={idx}
                    heading={engagement.name}
                    subHeading={engagement.role}
                    duration={engagement.duration}
                    description={engagement.description}
                    includeListBullets={true}
                />
            ))}
        </Section>
    );
};
