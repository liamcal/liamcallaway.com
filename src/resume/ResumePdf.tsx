import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    PDFDownloadLink,
    type BlobProviderParams,
    PDFViewer,
} from "@react-pdf/renderer";

import ProfileImg from "../images/profile.jpeg";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
    },
    headingSection: {
        padding: 16,
        margin: 0,
        backgroundColor: "#374151",
        height: "15%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    headingText: {
        color: "#3b82f6",
    },
    mainSection: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    leftSection: {
        backgroundColor: "#0F0",
        padding: 16,
        width: "33%",
    },
    footerSection: {
        padding: 0,
        margin: 0,
        backgroundColor: "#374151",
        height: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    profileImg: {
        borderRadius: "9999px",
        width: "96px",
        height: "96px",
    },
    headingSectionText: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headingSection}>
                <View style={styles.headingSectionText}>
                    <Text style={styles.headingText}>Liam Callaway</Text>
                    <Text style={styles.headingText}>
                        Full Stack Software Engineer
                    </Text>
                </View>
                <Image style={styles.profileImg} src={ProfileImg} />
            </View>
            <View style={styles.mainSection}>
                <View style={styles.leftSection}>
                    <Text>Section Left</Text>
                </View>
                <View>
                    <Text>Section Right</Text>
                </View>
            </View>
            <View style={styles.footerSection}>
                <Text>Section #3</Text>
            </View>
        </Page>
    </Document>
);

export const DownloadResume = () => {
    const children = (({ loading }: BlobProviderParams) =>
        loading
            ? "Loading"
            : " Click here to download resume") as unknown as React.ReactElement<BlobProviderParams>; // TS Hack to workaround https://github.com/diegomura/react-pdf/issues/2886

    return (
        <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf">
            {children}
        </PDFDownloadLink>
    );
};
