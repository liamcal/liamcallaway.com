import { View, StyleSheet, Svg, Circle } from "@react-pdf/renderer";
import { spacing } from "./theme";

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flexDirection: "column",
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        gap: spacing.small,
        width: "100%",
    },
    bullet: {
        marginTop: spacing.tiny,
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
                                    <Circle cx="2" cy="2" r="2" fill="black" />
                                </Svg>
                            </View>
                            {child}
                        </View>
                    );
                })}
        </View>
    );
};
