import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TextComponent extends Component {
    render = () => {
        return (
            <View style={styles.txtair}>
                <Text style={styles.txtfont}>{this.props.text}</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    txtair: {
        margin: 10,
    },
    txtfont: {
        fontWeight: "600",
        fontSize: 19,
        marginLeft: 10,
    },
});
