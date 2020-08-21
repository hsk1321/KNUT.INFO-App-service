import React, { Component } from "react";
import { ScrollView } from "react-native";
import TextComponent from "../../component/TextComponent";
import FoodList from "../../component/FoodListNoImage";

export default class Eatting extends Component {
    render = () => {
        return (
            <ScrollView>
                <TextComponent text="치킨" />
                <FoodList name="굽네치킨" phoneNuber="0314629297" />
                <FoodList name="BHC치킨" phoneNuber="0314611020" />
                <FoodList name="부곡통닭" phoneNuber="0314618451" />
                <FoodList name="콩닭콩닭" phoneNuber="0314625678" />
                <FoodList name="옛날통닭" phoneNuber="0314619992" />
                <FoodList name="또봉이 통닭" phoneNuber="0314621177" />
                <FoodList name="치킨존버거" phoneNuber="0314612333" />

                <TextComponent text="피자" />
                <FoodList name="피자스쿨" phoneNuber="0314623825" />
                <FoodList name="볼트피자" phoneNuber="0314614222" />

                <TextComponent text="한식" />
                <FoodList name="최서윤 집밥" phoneNuber="0314618788" />
                <FoodList name="능이장각탕" phoneNuber="0314625882" />
                <FoodList name="미락촌" phoneNuber="0314615207" />
                <FoodList name="더 진국" phoneNuber="0314613350" />
                <FoodList name="신림순대" phoneNuber="0314623566" />
                <FoodList name="고봉순댓국" phoneNuber="0314622115" />
                <FoodList name="큰맘할매순댓국" phoneNuber="0314626649" />

                <TextComponent text="분식" />
                <FoodList name="김밥나라" phoneNuber="0314611233" />
                <FoodList name="신전떡볶이" phoneNuber="0313610050" />
                <FoodList name="엽기떡볶이" phoneNuber="0314628592" />
                <FoodList name="스몰푸드" phoneNuber="0314617009" />

                <TextComponent text="중식" />
                <FoodList name="부일각" phoneNuber="0314612360" />
                <FoodList name="왕짜장" phoneNuber="0314619262" />
                <FoodList name="시앙차이나" phoneNuber="0314627900" />
                <FoodList name="만리향" phoneNuber="0314612420" />
                <FoodList name="도깨비반점" phoneNuber="0314621313" />

                <TextComponent text="햄버거" />
                <FoodList name="맘스터치" phoneNuber="0314623887" />
                <FoodList name="롯데리아" phoneNuber="0314611818" />

                <TextComponent text="횟집" />
                <FoodList name="어사출또" phoneNuber="031-462-8842" />
                <FoodList name="파도수산" phoneNuber="031-462-8808" />

                <TextComponent text="그 외 밥집" />
                <FoodList
                    name="소와주 고기 무한리필 고깃집"
                    phoneNuber="031-461-7773"
                />
                <FoodList name="정가네숯불갈비" phoneNuber="031-461-9192" />
                <FoodList
                    name="고향샤브샤브손칼국수"
                    phoneNuber="031-461-0004"
                />
                <FoodList name="굴다리갈비" phoneNuber="031-461-3565" />
                <FoodList name="할매냉면" phoneNuber="031-461-3350" />
                <FoodList name="족발예찬" phoneNuber="031-462-1555" />
                <FoodList name="가장맛있는족발" phoneNuber="031-462'5849" />
                <FoodList name="포베이" phoneNuber="031-462-5574" />
            </ScrollView>
        );
    };
}
