import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class BusTime extends Component {
    render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.updatacontents}>
                    <Text style={styles.text}>업데이트 예정입니다.</Text>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {},
    updatacontents: {
        marginTop: 10,
        width: width,
        height: height - 200,
        backgroundColor: "gray",
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
});
