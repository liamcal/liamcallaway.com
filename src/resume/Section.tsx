import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { fontSize, spacing } from "./theme";

const styles = StyleSheet.create({
    section: { width: "100%" },
    sectionTitle: {
        borderBottom: 1,
        borderColor: "black",
        borderStyle: "solid",
        fontSize: fontSize.large,
        fontWeight: "bold",
    },
    sectionItems: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.small,
        paddingTop: spacing.small,
        lineHeight: 0.825,
    },
});

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionItems}>{children}</View>
        </View>
    );
};
