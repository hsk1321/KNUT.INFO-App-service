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
        current_value: "시간을 선택하세요.",
        time: [
            "105번 7 : 20\n151번 7 : 25\n157번 7 : 30\n131번 7 : 35\n121번 7 : 40\n143번 7 : 45\n159번 7 : 50",
            "152번 8 : 05\n154번 8 : 20\n142번 8 : 40\n103번 8 : 50\n\n999번\n8 : 40",
            "120번 9 : 00\n159번 9 : 15\n154번 9 : 30\n121번 9 : 35\n122번 9 : 40\n105번 9 : 50\n141번 9 : 50\n\n999번\n9 : 00\n9 : 20\n9 : 40",
            "151번 10 : 00\n131번 10 : 10\n157번 10 : 20\n143번 10 : 35\n159번 10 : 40\n106번 10 : 50\n152번 10 : 50\n\n999번\n10 : 00\n10 : 20\n10 : 40",
            "157번 11 : 10\n120번 11 : 20\n103번 11 : 25\n142번 11 : 35\n159번 11 : 50\n121번 11 : 55\n\n999번\n11 : 00\n11 : 20\n11 : 40",
            "122번 12 : 05\n172번 12 : 25\n151번 12 : 50\n\n999번\n12 : 00\n12 : 20\n12 : 40",
            "141번 13 : 05\n131번 13 : 20\n157번 13 : 45\n105번 13 : 45\n\n999번\n13 : 00",
            "143번 14 : 00\n159번 14 : 15\n120번 14 : 25\n103번 14 : 30\n121번 14 : 30\n152번 14 : 50\n\n999번\n14 : 30\n14 : 50",
            "106번 15 : 05\n154번 15 : 05\n141번 15 : 20\n151번 15 : 25\n122번 15 : 35\n159번 15 : 50\n\n999번\n15 : 10\n15 : 30\n15 : 50",
            "131번 16 : 05\n152번 16 : 30\n157번 16 : 40\n120번 16 : 45\n121번 16 : 45\n\n999번\n16 : 10\n16 : 30\n16 : 50",
            "142번 17: 00\n172번 17 : 10\n105번 17 : 20\n141번 17 : 30\n154번 17 : 40\n103번 17 : 50\n\n999번\n17 : 10\n17 : 30\n17 : 50",
            "151번 18 : 00\n122번 18 : 25\n143번 18 : 25\n172번 18 : 35\n131번 18 : 45\n159번 18 : 55\n\n999번\n18 : 10\n18 : 30\n18 : 50",
            "106번 19 : 05\n120번 19 : 15\n121번 19 : 15\n152번 19 : 25\n157번 19 : 40",
            "159번 20 : 00\n154번 20 : 30\n122번 20 : 45",
            "159번 21 : 15\n121번 21 : 20\n150번 21 : 40\n120번 21 : 55",
        ],
    };

    render = () => {
        return (
            <View style={styles.container}>
                <View style={styles.go_terminal}>
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
                        />
                        <Picker.Item label="7:00" value={this.state.time[0]} />
                        <Picker.Item label="8:00" value={this.state.time[1]} />
                        <Picker.Item label="9:00" value={this.state.time[2]} />
                        <Picker.Item label="10:00" value={this.state.time[3]} />
                        <Picker.Item label="11:00" value={this.state.time[4]} />
                        <Picker.Item label="12:00" value={this.state.time[5]} />
                        <Picker.Item label="13:00" value={this.state.time[6]} />
                        <Picker.Item label="14:00" value={this.state.time[7]} />
                        <Picker.Item label="15:00" value={this.state.time[8]} />
                        <Picker.Item label="16:00" value={this.state.time[9]} />
                        <Picker.Item
                            label="17:00"
                            value={this.state.time[10]}
                        />
                        <Picker.Item
                            label="18:00"
                            value={this.state.time[11]}
                        />
                        <Picker.Item
                            label="19:00"
                            value={this.state.time[12]}
                        />
                        <Picker.Item
                            label="20:00"
                            value={this.state.time[13]}
                        />
                        <Picker.Item
                            label="21:00"
                            value={this.state.time[14]}
                        />
                    </Picker>
                    <View style={styles.text_box}>
                        <Text style={styles.text}>교통대 >> 터미널</Text>
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
                                {this.state.current_value}
                            </Text>
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    go_terminal: {
        padding: 30,
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
        color: "white",
    },
    text_result_scroll: {
        width: 300,
    },
});
