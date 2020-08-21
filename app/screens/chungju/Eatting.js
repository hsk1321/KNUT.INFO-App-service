import React, { Component } from "react";
import { ScrollView } from "react-native";
import FoodList from "../../component/FoodList";
import FoodListTwo from "../../component/FoodListTwo";
import TextComponent from "../../component/TextComponent";

export default class Eatting extends Component {
    render = () => {
        return (
            <ScrollView>
                <TextComponent text="치킨" />
                <FoodList
                    name="교통파닭"
                    phoneNumber="0438520099"
                    path={require("./eattingimage/1.png")}
                />
                <FoodList
                    name="또래오래"
                    phoneNumber="0438579991"
                    path={require("./eattingimage/24.png")}
                />
                <FoodList
                    name="네네치킨"
                    phoneNumber="0438557773"
                    path={require("./eattingimage/21.png")}
                />
                <FoodList
                    name="짱 똘"
                    phoneNumber="0438547292"
                    path={require("./eattingimage/22.png")}
                />
                <FoodList
                    name="깐치호"
                    phoneNumber="0438532850"
                    path={require("./eattingimage/23.png")}
                />
                <FoodList
                    name="굽는치킨"
                    phoneNumber="0439458292"
                    path={require("./eattingimage/2.png")}
                />
                <FoodList
                    name="김군파닭"
                    phoneNumber="0438519233"
                    path={require("./eattingimage/5.png")}
                />
                <FoodListTwo
                    name="부어치킨"
                    phoneNumber="0438551533"
                    pathOne={require("./eattingimage/11.png")}
                    pathTwo={require("./eattingimage/11_1.png")}
                />
                <FoodList
                    name="웰덤치킨"
                    phoneNumber="0438469909"
                    path={require("./eattingimage/13.png")}
                />
                <FoodList
                    name="지코바"
                    phoneNumber="0438457792"
                    path={require("./eattingimage/15.png")}
                />
                <TextComponent text="피자" />
                <FoodList
                    name="바체티 피자"
                    phoneNumber="0438469819"
                    path={require("./eattingimage/8.png")}
                />
                <FoodListTwo
                    name="피자콜"
                    phoneNumber="0438455520"
                    pathOne={require("./eattingimage/17.png")}
                    pathTwo={require("./eattingimage/17_1.png")}
                />
                <FoodList
                    name="피자파는집"
                    phoneNumber="07086234333"
                    path={require("./eattingimage/18.png")}
                />
                <TextComponent text="도시락" />
                <FoodList
                    name="도란도락"
                    phoneNumber="0438557981"
                    path={require("./eattingimage/19.png")}
                />
                <FoodList
                    name="한솥"
                    phoneNumber="0438448869"
                    path={require("./eattingimage/30.png")}
                />
                <TextComponent text="중식" />
                <FoodList
                    name="김군짬뽕"
                    phoneNumber="0438519233"
                    path={require("./eattingimage/3.png")}
                />
                <TextComponent text="그 외 밥집" />
                <FoodList
                    name="봉구스 밥버거"
                    phoneNumber="0438480933"
                    path={require("./eattingimage/10.png")}
                />
                <FoodList
                    name="보스찜닭"
                    phoneNumber="0438553788"
                    path={require("./eattingimage/20.png")}
                />
                <FoodList
                    name="떙초 닭밝, 쌈밥 춘자네 부대찌개"
                    phoneNumber="0438428240"
                    path={require("./eattingimage/7.png")}
                />
                <FoodList
                    name="배달삼겹 돼지되지"
                    phoneNumber="0438578591"
                    path={require("./eattingimage/9.png")}
                />
                <FoodListTwo
                    name="용우동"
                    phoneNumber="0438557762"
                    pathOne={require("./eattingimage/12.png")}
                    pathTwo={require("./eattingimage/12_1.png")}
                />
                <FoodList
                    name="불티 족발"
                    phoneNumber="0438557535"
                    path={require("./eattingimage/25.png")}
                />
                <FoodList
                    name="장충동 왕 족 보쌈"
                    phoneNumber="0438434815"
                    path={require("./eattingimage/14.png")}
                />
                <FoodList
                    name="토프랜드"
                    phoneNumber="01026437586"
                    path={require("./eattingimage/16.png")}
                />
            </ScrollView>
        );
    };
}
