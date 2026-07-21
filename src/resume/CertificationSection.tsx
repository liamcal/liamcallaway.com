import { View, Link, Image, Text } from "@react-pdf/renderer";
import { Section } from "./Section";
import certifications from "./data/certifications.json" assert { type: "json" };

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
            {certificationData.map(({ name, link, attained }, idx) => (
                <Text key={idx}>
                    <Text style={{ fontWeight: "bold" }}>
                        {link ? (
                            <Link
                                href={link}
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                }}
                            >
                                {name}
                            </Link>
                        ) : (
                            `${name}`
                        )}
                    </Text>
                    <Text>: {attained}</Text>
                </Text>
            ))}
        </Section>
    );
};
