import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Picker,
    Dimensions,
    ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Subway extends Component {
    state = {
        current_value: "시간을 선택하세요.",
        subway_time: [
            "6:44\n7:31\n8:33\n18:35\n19:33\n20:32",
            "7:34\n8:08\n18:23\n19:03\n19:52",
        ],
    };

    render = () => {
        return (
            <ScrollView>
                <View style={styles.subway_container}>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.current_value}
                        onValueChange={(itemValue) => {
                            this.setState({
                                current_value: itemValue,
                            });
                        }}
                        itemStyle={{
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                        mode={"dialog"}
                    >
                        <Picker.Item
                            label="선택"
                            value={"시간을 선택하세요."}
                        ></Picker.Item>
                        <Picker.Item
                            label="상행"
                            value={this.state.subway_time[0]}
                        ></Picker.Item>
                        <Picker.Item
                            label="하행"
                            value={this.state.subway_time[1]}
                        ></Picker.Item>
                    </Picker>
                    <View style={styles.text_box}>
                        <Text style={styles.text}>급행 전철</Text>
                        <ScrollView
                            contentContainerStyle={styles.text_result_scroll}
                        >
                            <View
                                style={{
                                    width: width - 100,
                                    borderBottomWidth: 2,
                                    borderBottomColor: "white",
                                }}
                            />
                            <Text style={styles.text_result}>
                                {this.state.current_value}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    picker: {
        width: 70,
    },
    subway_container: {
        marginTop: 10,
        width: width,
        height: 300,
        backgroundColor: "#833537",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text_box: {
        width: width - 110,
        height: 200,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "column",
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "600",
        fontSize: 20,
        borderBottomWidth: 2,
        color: "white",
    },
    text_result: {
        fontWeight: "600",
        fontSize: 17,
        marginTop: 10,
        marginLeft: 10,
        color: "white",
    },
    text_result_scroll: {
        width: 300,
    },
});
