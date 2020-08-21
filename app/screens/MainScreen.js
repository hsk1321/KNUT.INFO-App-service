import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Linking,
    ScrollView,
} from "react-native";
import Todo from "../contents/todolist/Todo";

const { width, height } = Dimensions.get("window");

export default class MainScreen extends Component {
    render = () => {
        return (
            <ScrollView style={styles.main_content}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.content_btn}
                        onPress={() =>
                            Linking.openURL(
                                "https://www.ut.ac.kr/cop/smt/1/SCH2/kor/sub01_01_03/monthList.do"
                            )
                        }
                    >
                        <Text style={styles.text}>학사 일정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.content_btn}
                        onPress={() =>
                            Linking.openURL(
                                "https://www.ut.ac.kr/prog/mealManage/MT01/kor/sub06_02_02_01/list.do"
                            )
                        }
                    >
                        <Text style={styles.text}>학식 정보</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.updatacontents}>
                    <Todo />
                </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: "center",
    },
    content: {
        backgroundColor: "#833537",
        width: width,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    content_btn: {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 40,
        margin: 10,
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
    updatacontents: {
        marginTop: 10,
        width: width,
        height: height - 200,
        backgroundColor: "#833537",
        alignContent: "center",
        justifyContent: "center",
    },
});
