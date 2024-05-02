import {SafeAreaView, StyleSheet} from "react-native";
import {Link} from "expo-router";
import {profile} from "../styles";

export default function Profile() {

    return(
        <SafeAreaView style={styles.container}>
            <Link href="/">Index</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(profile)
