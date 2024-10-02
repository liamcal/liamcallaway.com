import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    section: { width: "100%" },
    sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        borderColor: "black",
        borderBottom: 1,
        borderStyle: "solid",
    },
    sectionItems: {
        paddingTop: 8,
        display: "flex",
        flexDirection: "column",
        gap: 8,
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
