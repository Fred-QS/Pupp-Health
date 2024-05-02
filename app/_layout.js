import { Stack } from 'expo-router'
import {StatusBar} from "react-native";

export default function Navigator() {

    const fullPageDesign = {
        headerShown: false,
    }

    const modalDesign = {
        headerShown: false,
        presentation: 'modal',
    }

    return (
        <>
            <StatusBar style="light" />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={fullPageDesign}
                />
                <Stack.Screen
                    name="profile"
                    options={fullPageDesign}
                />
                <Stack.Screen
                    name="modal"
                    options={modalDesign}
                />
            </Stack>
        </>
    );
}
