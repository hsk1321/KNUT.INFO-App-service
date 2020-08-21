import React, { Component } from "react";
import { View } from "react-native";
import JeungpyeongBottomNavigator from "../routers/JeungpyeongBottomNavigator";

export default class JeungpyeongUniv extends Component {
    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <JeungpyeongBottomNavigator />
            </View>
        );
    };
}
