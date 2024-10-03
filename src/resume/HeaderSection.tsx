import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import {size, color} from './theme';

const styles = StyleSheet.create({

    headingSection: {
        padding: size.base,
        color: color.white,

        backgroundColor: color.primaryDark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: size.small,
    },
    headingTextTitle: {
        fontSize: size.extraExtraLarge,
    },
});

export const HeaderSection = () => {
    return   <View
    style={
        styles.headingSection
    }
>
    <Text style={styles.headingTextTitle}>
        Liam Callaway
    </Text>
    <Text>
        Full Stack Software Engineer
    </Text>
                  </View>;
}