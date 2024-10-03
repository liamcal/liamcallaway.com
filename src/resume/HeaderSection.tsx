import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { spacing, color, fontSize } from "./theme";

const styles = StyleSheet.create({
    headingSection: {
        alignItems: "center",
        backgroundColor: color.primaryDark,
        color: color.white,
        display: "flex",
        gap: spacing.small,
        justifyContent: "center",
        padding: spacing.base,
    },
    headingTextTitle: {
        fontSize: fontSize.extraExtraLarge,
    },
    headingTextSubtitle: {
        fontSize: fontSize.extraLarge,
    },
});

export const HeaderSection = () => {
    return (
        <View style={styles.headingSection}>
            <Text style={styles.headingTextTitle}>Liam Callaway</Text>
            <Text style={styles.headingTextSubtitle}>
                Full Stack Software Engineer
            </Text>
        </View>
    );
};
