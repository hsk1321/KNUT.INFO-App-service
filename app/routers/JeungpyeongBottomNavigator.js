import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import BusTime from "../screens/Jeungpyeong/BusTime";
import Eatting from "../screens/Jeungpyeong/Eatting";
import Icon from "react-native-vector-icons/FontAwesome5";

const BottomTab = createBottomTabNavigator();

const BusTimeStack = createStackNavigator();
const EattingStack = createStackNavigator();

const BusTimeStackScreen = () => {
    return (
        <BusTimeStack.Navigator>
            <BusTimeStack.Screen name="버스 시간" component={BusTime} />
        </BusTimeStack.Navigator>
    );
};

const EattingStackScreen = () => {
    return (
        <EattingStack.Navigator>
            <BusTimeStack.Screen name="먹거리" component={Eatting} />
        </EattingStack.Navigator>
    );
};

export default class BottomNavigator extends Component {
    render = () => {
        return (
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Bus"
                    component={BusTimeStackScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Icon name="bus" size={23} />;
                        },
                    }}
                />
                <BottomTab.Screen
                    name="Food"
                    component={EattingStackScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Icon name="store" size={23} />;
                        },
                    }}
                />
            </BottomTab.Navigator>
        );
    };
}
