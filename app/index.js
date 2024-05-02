import {SafeAreaView, StyleSheet} from 'react-native'
import {dashboard} from "../styles"
import {Link} from "expo-router"

export default function Dashboard() {

    return (
        <SafeAreaView style={styles.container}>
            <Link href="/modal">Present modal</Link>
            <Link href="/profile">Profile</Link>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(dashboard)
