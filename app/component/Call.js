import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Platform,
    Linking,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width } = Dimensions.get("window");

export default class Call extends Component {
    state = { phoneNumber: this.props };

    dialCall = () => {
        const { phoneNumber } = this.props;
        let stringPhone = "";

        if (Platform.OS === "android") {
            stringPhone = `tel:${phoneNumber}`;
        } else {
            stringPhone = `telprompt:${phoneNumber}`;
        }
        console.log(stringPhone);
        Linking.openURL(stringPhone);
    };

    render = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.touchbox}
                    onPress={this.dialCall}
                >
                    <Icon name="phone" size={25} color="white" />
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: width,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
    },
    touchbox: {
        marginTop: 10,
        marginBottom: 10,
        width: 70,
        height: 50,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
    },
});
