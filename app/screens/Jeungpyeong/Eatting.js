import React, { Component } from "react";
import { ScrollView } from "react-native";
import TextComponent from "../../component/TextComponent";
import FoodList from "../../component/FoodListNoImage";

export default class Eatting extends Component {
    render = () => {
        return (
            <ScrollView>
                <TextComponent text="치킨" />
                <FoodList name="치킨리그" phoneNumber="05044585890" />
                <FoodList name="네네치킨" phoneNumber="05044585896" />
                <FoodList name="레알큰닭 빅원치킨" phoneNumber="05044585862" />
                <FoodList name="페리카나" phoneNumber="05044585893" />
                <FoodList name="장윤정의 치킨아트" phoneNumber="05044585881" />
                <FoodList name="디디치킨" phoneNumber="05044585851" />
                <FoodList name="60계" phoneNumber="05044585835" />
                <FoodList name="자담치킨" phoneNumber="05044585887" />
                <FoodList name="아이벗치킨" phoneNumber="05044585872" />
                <FoodList name="멕시카나치킨" phoneNumber="05044585857" />
                <FoodList name="징기스칸치킨" phoneNumber="05044585885" />
                <FoodList name="두존두마리치킨" phoneNumber="05044585849" />
                <FoodList name="치킨신드롬" phoneNumber="05044585891" />
                <FoodList name="치킨더홈" phoneNumber="05044585889" />
                <FoodList name="굽네치킨" phoneNumber="05044585837" />
                <FoodList name="화산불닭" phoneNumber="05044585898" />

                <TextComponent text="피자" />
                <FoodList name="피자나라치킨공주" phoneNumber="05044585894" />
                <FoodList name="59쌀피자" phoneNumber="05044585834" />
                <FoodList name="피자명인" phoneNumber="05044585895" />
                <FoodList name="청년피자" phoneNumber="05044585888" />
                <FoodList
                    name="하나로 Pizza and Food"
                    phoneNumber="05044585841"
                />
                <FoodList name="시카고피자" phoneNumber="05044585870" />

                <TextComponent text="분식" />
                <FoodList name="돈까스 극장" phoneNumber="05044585860" />
                <FoodList
                    name="빠사시 떡볶이 and 닭강정"
                    phoneNumber="05044585863"
                />
                <FoodList name="엽기떡볶이" phoneNumber="05044585847" />
                <FoodList name="Park's 떡볶이" phoneNumber="05044585878" />
                <FoodList name="신전떡볶이" phoneNumber="05044585871" />
                <FoodList name="꼬소향 꼬마김밥" phoneNumber="05044585838" />

                <TextComponent text="중식" />
                <FoodList name="증평 대 반점" phoneNumber="05044585884" />
                <FoodList name="용문객잔" phoneNumber="05044585875" />
                <FoodList name="대성루" phoneNumber="05044585845" />
                <FoodList name="원산 대 반점" phoneNumber="05044585876" />
                <FoodList name="띵호와" phoneNumber="05044585853" />
                <FoodList name="홍탕" phoneNumber="05044585840" />

                <TextComponent text="족발 보쌈" />
                <FoodList name="동가한방족발" phoneNumber="05044585846" />
                <FoodList name="선비촌 보쌈 족발" phoneNumber="05044586004" />
                <FoodList name="도안 왕 족발 보쌈" phoneNumber="05044585897" />
                <FoodList name="수화 왕 족발 보쌈" phoneNumber="05044585868" />
                <FoodList name="Tosilae" phoneNumber="05044585892" />
                <FoodList name="서울 왕 족발 보쌈" phoneNumber="05044585866" />
                <FoodList name="어머" phoneNumber="05044585873" />
                <FoodList name="보쌈마루" phoneNumber="05044585861" />

                <TextComponent text="그 외 밥집" />
                <FoodList name="훈이네 밥집" phoneNumber="05044585899" />
                <FoodList name="누나가 구운 삼겹살" phoneNumber="05044585852" />
                <FoodList name="산더미감자탕" phoneNumber="05044585874" />
                <FoodList name="뼈도둑 감자탕" phoneNumber="05044585864" />
                <FoodList name="자갈치 브라더스" phoneNumber="05044585848" />
                <FoodList name="김수현 소머리국밥" phoneNumber="0432161333" />
                <FoodList name="두마리찜딹" phoneNumber="05044585850" />
                <FoodList name="개성집" phoneNumber="05044585836" />
                <FoodList name="꿀규네 낙곱새" phoneNumber="05044585839" />
                <FoodList name="미가" phoneNumber="0504458" />
                <FoodList name="맥코미 해물찜닭" phoneNumber="05044585856" />
                <FoodList name="마산 아구찜 찜닭" phoneNumber="05044585855" />
                <FoodList name="정석" phoneNumber="05044585882" />
                <FoodList name="녹두장군" phoneNumber="05044585843" />
                <FoodList name="시래기 명태 조림" phoneNumber="05044585883" />
            </ScrollView>
        );
    };
}
