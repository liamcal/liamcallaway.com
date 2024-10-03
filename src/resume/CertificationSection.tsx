import { Section } from "./Section";
import { SectionItem } from "./SectionItem";
import certifications from "./data/certifications.json";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Link,
    Image,
    PDFDownloadLink,
} from "@react-pdf/renderer";

export const CertificationSection = () => {
    const certificationData = certifications;

    return (
        <Section title="Certifications">
            <View
                style={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Link href="https://cp.certmetrics.com/amazon/en/public/verify/credential/845427c86b4d48baa5f386cd95edd646">
                    <Image
                        src="https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
                        style={{ height: 64, width: 64 }}
                    ></Image>
                </Link>
            </View>
            {certificationData.map((certification, idx) => (
                <SectionItem
                    key={idx}
                    heading={certification.name}
                    link={certification.link}
                    description={[`Attained: ${certification.attained}`]}
                />
            ))}
        </Section>
    );
};
