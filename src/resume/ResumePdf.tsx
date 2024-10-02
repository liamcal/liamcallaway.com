import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    PDFDownloadLink,
} from "@react-pdf/renderer";

import ProfileImg from "../images/profile.jpeg";

import { EducationSection } from "./EducationSection";
import { EmploymentSection } from "./EmploymentSection";
import { EngagementSection } from "./EngagementSection";
import { CertificationSection } from "./CertificationSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ReferencesSection } from "./ReferencesSection";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        // backgroundColor: "#E4E4E4",
        backgroundColor: "#FFFFFF",
        fontSize: "16",
        fontFamily: "Roboto",
        fontWeight: "normal",
        // color: "#111827",
    },
    headingSection: {
        padding: 16,
        margin: 0,
        fontSize: 24,
        // backgroundColor: "#1F2937",
        backgroundColor: "#172554",
        height: "13.5%",
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        justifyContent: "center",
        flexDirection: "row",
    },
    profileImg: {
        borderRadius: 9999,
        width: 96,
        height: 96,
    },
    headingText: {
        color: "#FFFFFF",
    },
    headingSectionText: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    mainSection: {
        lineHeight: 1.5,
        fontSize: 12,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
    },
    leftSection: {
        backgroundColor: "#dbeafe",
        padding: 16,
        width: "30%",
        display: "flex",
        gap: 16,
    },
    rightSection: {
        padding: 16,
        display: "flex",
        gap: 16,
        width: "70%",
    },
    footerSection: {
        padding: 0,
        margin: 0,
        fontSize: 12,
        color: "white",
        backgroundColor: "#172554",
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 32,
    },
});

export const Resume = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View
                    style={{
                        ...styles.headingSection,
                        ...styles.headingSectionText,
                    }}
                >
                    {/* <View style={styles.headingSectionText}> */}
                    <Text style={{ ...styles.headingText, fontSize: 42 }}>
                        Liam Callaway
                    </Text>
                    <Text style={{ ...styles.headingText, fontSize: 16 }}>
                        Full Stack Software Engineer
                    </Text>
                    {/* </View> */}
                    {/* <Image style={styles.profileImg} src={ProfileImg} /> */}
                </View>
                <View style={styles.mainSection}>
                    <View style={styles.leftSection}>
                        <CertificationSection />
                        <SkillsSection />
                        <ProjectsSection />

                        <ReferencesSection />
                    </View>
                    <View style={styles.rightSection}>
                        <EmploymentSection />
                        <EngagementSection />
                        <EducationSection />
                    </View>
                </View>
                <View style={styles.footerSection}>
                    <Text>liamcallaway.com</Text>
                    <Text>github.com/liamcal</Text>
                </View>
            </Page>
        </Document>
    );
};

export const DownloadResume = () => {
    return (
        <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
            Download resume
        </PDFDownloadLink>
    );
};
