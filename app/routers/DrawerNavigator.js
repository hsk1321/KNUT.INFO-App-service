import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ChungjuUniv from "../screens/ChungjuUniv";
import UiwangUniv from "../screens/UiwangUniv";
import JeungpyeongUniv from "../screens/JeungpyeongUniv";
import Icon from "react-native-vector-icons/Feather";

const Drawer = createDrawerNavigator();

const MainStack = createStackNavigator();
const ChungjuStack = createStackNavigator();
const UiwangStack = createStackNavigator();
const JeungpyeongStack = createStackNavigator();

const MenuBtn = ({ navigation }) => {
    const returnScreen = () => {
        navigation.openDrawer();
    };
    return (
        <TouchableOpacity>
            <Icon
                name="menu"
                style={{
                    fontSize: 30,
                    marginLeft: 10,
                    marginTop: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                }}
                onPress={returnScreen}
            />
        </TouchableOpacity>
    );
};

const MainStackScreen = ({ navigation }) => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="메 인"
                component={MainScreen}
                options={{
                    headerLeft: () => <MenuBtn navigation={navigation} />,
                }}
            />
        </MainStack.Navigator>
    );
};

const ChungjuStackScreen = ({ navigation }) => {
    return (
        <ChungjuStack.Navigator>
            <ChungjuStack.Screen
                name="한국교통대학교 충주 캠퍼스"
                component={ChungjuUniv}
                options={{
                    headerLeft: () => <MenuBtn navigation={navigation} />,
                }}
            />
        </ChungjuStack.Navigator>
    );
};

const UiwangStackScreen = ({ navigation }) => {
    return (
        <UiwangStack.Navigator>
            <UiwangStack.Screen
                name="한국교통대학교 의왕 캠퍼스"
                component={UiwangUniv}
                options={{
                    headerLeft: () => <MenuBtn navigation={navigation} />,
                }}
            />
        </UiwangStack.Navigator>
    );
};

const JeungpyeongStackScreen = ({ navigation }) => {
    return (
        <JeungpyeongStack.Navigator>
            <JeungpyeongStack.Screen
                name="한국교통대학교 증평 캠퍼스"
                component={JeungpyeongUniv}
                options={{
                    headerLeft: () => <MenuBtn navigation={navigation} />,
                }}
            />
        </JeungpyeongStack.Navigator>
    );
};

export default class DrawerNavigator extends Component {
    render = () => {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="메 인" component={MainStackScreen} />
                <Drawer.Screen
                    name="충주 캠퍼스"
                    component={ChungjuStackScreen}
                />
                <Drawer.Screen
                    name="의왕 캠퍼스"
                    component={UiwangStackScreen}
                />
                <Drawer.Screen
                    name="증평 캠퍼스"
                    component={JeungpyeongStackScreen}
                />
            </Drawer.Navigator>
        );
    };
}
