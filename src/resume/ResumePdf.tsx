import {
    Page,
    View,
    Document,
    StyleSheet,
    PDFDownloadLink,
} from "@react-pdf/renderer";

import { EducationSection } from "./EducationSection";
import { EmploymentSection } from "./EmploymentSection";
import { EngagementSection } from "./EngagementSection";
import { CertificationSection } from "./CertificationSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ReferencesSection } from "./ReferencesSection";
import { spacing, color, fontSize } from "./theme";
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";

const styles = StyleSheet.create({
    page: {
        backgroundColor: color.white,
        flexDirection: "column",
        fontFamily: "Roboto",
        fontSize: fontSize.small,
        fontWeight: "normal",
        margin: 0,
    },
    mainSection: {
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        lineHeight: 1.25,
    },
    leftSection: {
        backgroundColor: color.primaryLight,
        display: "flex",
        flexDirection: "column",
        gap: spacing.base,
        padding: spacing.base,
        width: "30%",
    },
    rightSection: {
        display: "flex",
        flexDirection: "column",
        gap: spacing.base,
        padding: spacing.base,
        width: "70%",
    },
});

export const Resume = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <HeaderSection />
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
                <FooterSection />
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
