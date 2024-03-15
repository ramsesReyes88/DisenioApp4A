import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ label, theme, onPress}) {
    if (theme === 'primary') {
        return (
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#FFD33D', borderRadius: 18 }]}>
                <Pressable
                    style={[styles.button, { backgroundColor: '#FFFF' }]}
                    onPress={onPress}
                >
                    <FontAwesome name="picture-o"
                    size={20}
                    color="#25292E"
                    style={styles.buttonIcon}/>
                    <Text style={(styles.buttonLabel, {color: '#25292RE'})}>
                    {label}

                    </Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 16,
    },
});