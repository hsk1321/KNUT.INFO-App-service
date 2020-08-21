import React, { Component } from "react";
import { View } from "react-native";
import ChungjuBottomNaviator from "../routers/ChungjuBottomNaviator";

export default class ChungjuUniv extends Component {
    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <ChungjuBottomNaviator />
            </View>
        );
    };
}
