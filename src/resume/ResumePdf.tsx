import {
    Page,
    Text,
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
import {size, color} from './theme';
import { HeaderSection } from "./HeaderSection";
import { FooterSection } from "./FooterSection";


const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: color.white,
        fontSize: size.base,
        fontFamily: "Roboto",
        fontWeight: "normal",
        margin: 0,

    },
    mainSection: {
        lineHeight: 1.5,
        fontSize: size.medium,
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
    },
    leftSection: {
        backgroundColor: color.primaryLight,
        padding: size.base,
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: size.base,
    },
    rightSection: {
        padding: size.base,
        display: "flex",
        flexDirection: "column",

        gap: size.base,
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
