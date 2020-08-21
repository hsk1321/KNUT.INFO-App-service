import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Picker,
    Dimensions,
    ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");

export default class BusTime extends Component {
    state = {
        current_value1: "시간을 선택하세요.",
        current_value2: "시간을 선택하세요.",
        time_1: [
            "6:20",
            "7:03\n7:24\n7:46",
            "8:08\n8:52",
            "9:14\n9:36\n9:58",
            "10:41",
            "11:02\n11:24\n11:46",
            "12:30\n12:52",
            "13:14\n13:36",
            "14:19\n14:40",
            "15:02\n15:24",
            "16:08\n16:30\n16:52",
            "17:14\n17:57",
            "18:18\n18:40",
            "19:02\n19:46",
            "20:08\n20:35\n20:52",
            "21:50",
            "22:10\n22:25",
        ],
        time_2: [
            "6:00\n6:10\n6:50",
            "7:58",
            "8:41",
            "9:02\n9:24\n9:46",
            "10:30\n10:52",
            "11:14\n11:36",
            "12:19\n12:40",
            "13:02\n13:24",
            "14:08\n14:30\n14:52",
            "15:14\n15:57",
            "16:18\n16:40",
            "17:02\n17:46",
            "18:08\n18:30\n18:52",
            "19:35\n19:56",
            "20:18\n20:40",
            "21:24\n21:46",
            "22:13\n:22:30",
        ],
    };

    render = () => {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.go_terminal}>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.current_value1}
                        onValueChange={(itemValue) => {
                            this.setState({
                                current_value1: itemValue,
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
                        />
                        <Picker.Item
                            label="6:00"
                            value={this.state.time_1[0]}
                        />
                        <Picker.Item
                            label="7:00"
                            value={this.state.time_1[1]}
                        />
                        <Picker.Item
                            label="8:00"
                            value={this.state.time_1[2]}
                        />
                        <Picker.Item
                            label="9:00"
                            value={this.state.time_1[3]}
                        />
                        <Picker.Item
                            label="10:00"
                            value={this.state.time_1[4]}
                        />
                        <Picker.Item
                            label="11:00"
                            value={this.state.time_1[5]}
                        />
                        <Picker.Item
                            label="12:00"
                            value={this.state.time_1[6]}
                        />
                        <Picker.Item
                            label="13:00"
                            value={this.state.time_1[7]}
                        />
                        <Picker.Item
                            label="14:00"
                            value={this.state.time_1[8]}
                        />
                        <Picker.Item
                            label="15:00"
                            value={this.state.time_1[9]}
                        />
                        <Picker.Item
                            label="16:00"
                            value={this.state.time_1[10]}
                        />
                        <Picker.Item
                            label="17:00"
                            value={this.state.time_1[11]}
                        />
                        <Picker.Item
                            label="18:00"
                            value={this.state.time_1[12]}
                        />
                        <Picker.Item
                            label="19:00"
                            value={this.state.time_1[13]}
                        />
                        <Picker.Item
                            label="20:00"
                            value={this.state.time_1[14]}
                        />
                        <Picker.Item
                            label="21:00"
                            value={this.state.time_1[15]}
                        />
                        <Picker.Item
                            label="22:00"
                            value={this.state.time_1[16]}
                        />
                    </Picker>
                    <View style={styles.text_box}>
                        <Text style={styles.text}>
                            111번 동부종점 >> 교통대
                        </Text>
                        <View
                            style={{
                                width: width - 100,
                                borderBottomWidth: 2,
                                borderBottomColor: "white",
                            }}
                        />
                        <ScrollView
                            contentContainerStyle={styles.text_result_scroll}
                        >
                            <Text style={styles.text_result}>
                                {this.state.current_value1}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.go_terminal}>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.current_value2}
                        onValueChange={(itemValue) => {
                            this.setState({
                                current_value2: itemValue,
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
                        />
                        <Picker.Item
                            label="6:00"
                            value={this.state.time_2[0]}
                        />
                        <Picker.Item
                            label="7:00"
                            value={this.state.time_2[1]}
                        />
                        <Picker.Item
                            label="8:00"
                            value={this.state.time_2[2]}
                        />
                        <Picker.Item
                            label="9:00"
                            value={this.state.time_2[3]}
                        />
                        <Picker.Item
                            label="10:00"
                            value={this.state.time_2[4]}
                        />
                        <Picker.Item
                            label="11:00"
                            value={this.state.time_2[5]}
                        />
                        <Picker.Item
                            label="12:00"
                            value={this.state.time_2[6]}
                        />
                        <Picker.Item
                            label="13:00"
                            value={this.state.time_2[7]}
                        />
                        <Picker.Item
                            label="14:00"
                            value={this.state.time_2[8]}
                        />
                        <Picker.Item
                            label="15:00"
                            value={this.state.time_2[9]}
                        />
                        <Picker.Item
                            label="16:00"
                            value={this.state.time_2[10]}
                        />
                        <Picker.Item
                            label="17:00"
                            value={this.state.time_2[11]}
                        />
                        <Picker.Item
                            label="18:00"
                            value={this.state.time_2[12]}
                        />
                        <Picker.Item
                            label="19:00"
                            value={this.state.time_2[13]}
                        />
                        <Picker.Item
                            label="20:00"
                            value={this.state.time_2[14]}
                        />
                        <Picker.Item
                            label="21:00"
                            value={this.state.time_2[15]}
                        />
                        <Picker.Item
                            label="22:00"
                            value={this.state.time_2[16]}
                        />
                    </Picker>
                    <View style={styles.text_box}>
                        <Text style={styles.text}>
                            111번 교통대 >> 동부종점
                        </Text>
                        <View
                            style={{
                                width: width - 100,
                                borderBottomWidth: 2,
                                borderBottomColor: "white",
                            }}
                        />
                        <ScrollView
                            contentContainerStyle={styles.text_result_scroll}
                        >
                            <Text style={styles.text_result}>
                                {this.state.current_value2}
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
        alignItems: "center",
    },
    go_terminal: {
        padding: 30,
        marginTop: 10,
        flexDirection: "row",
        backgroundColor: "#833537",
    },
    text_box: {
        width: width - 100,
        height: 300,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 10,
        alignItems: "center",
        flexDirection: "column",
        borderColor: "white",
    },
    picker: {
        width: 80,
        height: 30,
        marginTop: 40,
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
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        color: "white",
    },
    text_result_scroll: {
        width: 300,
    },
});
