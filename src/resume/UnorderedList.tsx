import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    PDFDownloadLink,
    Svg,
    Circle,
} from "@react-pdf/renderer";

// styles
const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "column",
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        width: "100%",
    },
    bullet: {
        marginTop: 4,
    },
});

interface UnorderedListProps {
    children: React.ReactNode[];
}

export const UnorderedList = ({ children }: UnorderedListProps) => {
    return (
        <View style={styles.list}>
            {children &&
                children.map((child, idx) => {
                    return (
                        <View style={styles.listItem} key={idx}>
                            <View style={styles.bullet}>
                                <Svg width={4} height={4}>
                                    <Circle
                                        cx="2"
                                        cy="2"
                                        r="2"
                                        fill={"black"}
                                    />
                                </Svg>
                            </View>
                            {child}
                        </View>
                    );
                })}
        </View>
    );
};
