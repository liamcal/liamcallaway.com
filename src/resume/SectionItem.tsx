import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import { UnorderedList } from "./UnorderedList";

const styles = StyleSheet.create({
    sectionItem: {
        display: "flex",
        fontSize: 10,
    },
    sectionItemHeading: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // fontWeight: "bold",
    },
    sectionItemDescription: { paddingTop: 4 },
    sectionItemDuration: { display: "flex" },
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
        <Text key={idx}>
            {descriptionLine}
        </Text>
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
            {/* {subHeading && (
                <View>
                    <Text style={{ fontStyle: "italic" }}>{subHeading}</Text>
                </View>
            )} */}
            <View style={styles.sectionItemDescription}>
                {includeListBullets ? (
                    <UnorderedList>{descriptionItems}</UnorderedList>
                ) : (
                    descriptionItems
                )}
            </View>
            {link && includeSeparateLink && (
                <View>
                    <Text style={{ fontSize: 8, marginTop: 2 }}>{link}</Text>
                </View>
            )}
        </View>
    );
};
