import React, { Component } from "react";
import { View } from "react-native";
import UiwangBottomNavigator from "../routers/UiwangBottomNavigator";

export default class UiwangUniv extends Component {
    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <UiwangBottomNavigator />
            </View>
        );
    };
}
