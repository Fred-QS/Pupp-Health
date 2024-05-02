import {StyleSheet, View} from 'react-native'
import { Link, router } from 'expo-router'
import {modal} from "../styles"

export default function Modal() {

    const isPresented = router.canGoBack()

    return (
        <View style={styles.container}>
            {!isPresented && <Link href="../">Dismiss</Link>}

        </View>
    );
}

const styles = StyleSheet.create(modal)
