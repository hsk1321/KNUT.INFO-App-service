import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from "accordion-collapse-react-native";
import Call from "./Call";
import ImageModal from "react-native-image-modal";

const { width } = Dimensions.get("window");

export default class FoodList extends Component {
    render = () => {
        return (
            <Collapse>
                <CollapseHeader>
                    <View style={styles.accodian}>
                        <Text style={styles.text}>{this.props.name}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.accodian_child}>
                        <ImageModal
                            resizeMode="contain"
                            imageBackgroundColor="gray"
                            style={{
                                height: 300,
                                width: 450,
                            }}
                            source={this.props.pathOne}
                        />
                    </View>
                    <View style={styles.accodian_child}>
                        <ImageModal
                            resizeMode="contain"
                            imageBackgroundColor="gray"
                            style={{
                                height: 300,
                                width: 450,
                            }}
                            source={this.props.pathTwo}
                        />
                    </View>
                    <Call phoneNumber={this.props.phoneNumber} />
                </CollapseBody>
            </Collapse>
        );
    };
}

const styles = StyleSheet.create({
    accodian: {
        backgroundColor: "#833537",
        width: width,
        height: 30,
        borderWidth: 2,
        borderColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
    },
    accodian_child: {
        width: width,
        height: 300,
        backgroundColor: "gray",
    },
});
