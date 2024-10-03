import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { spacing, color, fontSize } from "./theme";

const styles = StyleSheet.create({
    footerSection: {
        paddingHorizontal: spacing.base,
        paddingVertical: spacing.small,
        fontSize: fontSize.medium,
        color: "white",
        backgroundColor: color.primaryDark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: spacing.extraLarge,
    },
});

export const FooterSection = () => {
    return (
        <View style={styles.footerSection}>
            <Text>liamcallaway.com</Text>
            <Text>github.com/liamcal</Text>
        </View>
    );
};
