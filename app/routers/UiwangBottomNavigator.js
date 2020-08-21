import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import BusTime from "../screens/uiwang/BusTime";
import Eatting from "../screens/uiwang/Eatting";
import Icon from "react-native-vector-icons/FontAwesome5";
import Subway from "../screens/uiwang/Subway";

const BottomTab = createBottomTabNavigator();

const BusTimeStack = createStackNavigator();
const EattingStack = createStackNavigator();
const SubwayStack = createStackNavigator();

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

const SubwayStackScreen = () => {
    return (
        <SubwayStack.Navigator>
            <SubwayStack.Screen name="지하철" component={Subway} />
        </SubwayStack.Navigator>
    );
};

export default class BottomNavigator extends Component {
    render = () => {
        return (
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Subway"
                    component={SubwayStackScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Icon name="subway" size={23} />;
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
