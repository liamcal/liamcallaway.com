import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import { UnorderedList } from "./UnorderedList";
import { fontSize, spacing } from "./theme";

const styles = StyleSheet.create({
    sectionItem: {
        display: "flex",
    },
    sectionItemHeading: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionItemDescription: { paddingTop: spacing.tiny },
    sectionItemDuration: { display: "flex" },
    linkText: {
        fontSize: fontSize.tiny,
        marginTop: spacing.tiny / 2,
    },
});

interface SectionProps {
    heading: string;
    link?: string;
    duration?: string;
    subHeading?: string;
    description: string[];
    includeListBullets?: boolean;
    includeSeparateLink?: boolean;
}

export const SectionItem = ({
    heading,
    subHeading,
    link,
    duration,
    description,
    includeListBullets = false,
    includeSeparateLink = false,
}: SectionProps) => {
    const descriptionItems = description.map((descriptionLine, idx) => (
        <Text key={idx}>{descriptionLine}</Text>
    ));

    return (
        <View style={styles.sectionItem}>
            <View style={styles.sectionItemHeading}>
                <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                    <View>
                        <Text style={{ fontWeight: "bold" }}>
                            {link ? (
                                <Link
                                    href={link}
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                    }}
                                >
                                    {heading}
                                </Link>
                            ) : (
                                `${heading}`
                            )}
                            {subHeading && ":"}
                        </Text>
                    </View>
                    {subHeading && (
                        <View>
                            <Text style={{ fontWeight: "normal" }}>
                                {subHeading}
                            </Text>
                        </View>
                    )}
                </View>

                {duration && (
                    <View>
                        <Text style={styles.sectionItemDuration}>
                            {duration}
                        </Text>
                    </View>
                )}
            </View>
            <View style={styles.sectionItemDescription}>
                {includeListBullets ? (
                    <UnorderedList>{descriptionItems}</UnorderedList>
                ) : (
                    descriptionItems
                )}
            </View>
            {link && includeSeparateLink && (
                <View>
                    <Text style={styles.linkText}>{link}</Text>
                </View>
            )}
        </View>
    );
};
