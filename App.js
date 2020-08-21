import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./app/routers/DrawerNavigator";

export default class App extends Component {
    render = () => {
        return (
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1, backgroundColor: "#bbb" }}>
                    <DrawerNavigator />
                </SafeAreaView>
            </NavigationContainer>
        );
    };
}
