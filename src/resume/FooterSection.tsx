import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { size, color } from "./theme";

const styles = StyleSheet.create({
    footerSection: {
        paddingHorizontal: size.base,
        paddingVertical: size.small,
        fontSize: size.medium,
        color: "white",
        backgroundColor: color.primaryDark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: size.extraLarge,
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
