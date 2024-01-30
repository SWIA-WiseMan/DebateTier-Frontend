import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScrapItem from "./ScrapItem";

interface ScrapData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

const ScrapList: React.FC = () => {
	const navigation: any = useNavigation();
	const [scrapDataList, setScrapDataList] = useState<ScrapData[]>([]);

	useEffect(() => {
		// 백엔드에서 데이터를 받아와서 issueDataList 상태에 설정
		// 예시로 더미 데이터 사용
		const responseData: ScrapData[] = [
			{
				title: "후쿠시마 오염수 방류에 대해 어떻게 생각하시나요?",
				likeCount: 100,
				commentCount: 50,
				createdTime: "1시간 전",
				content:
					"님들 이건 솔직히 아니지 않나요? 다들 회 안 먹고싶어요? 난 진짜 못믿겠음 일본... 이제 연어 못 먹을 듯ㅜ 글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트",
			},
			{
				title: "빠른년생 폐지에 대해 어떻게 생각하시나요?",
				likeCount: 30,
				commentCount: 20,
				createdTime: "1시간 전",
				content:
					"다들 빠른년생 폐지에 대해 어떻게 생각하시나요..? 전 솔직히 폐지해야 한다고 생각합니다..",
			},
		];

		setScrapDataList(responseData);
	}, []);

	return (
		<ScrollView style={styles.container}>
			{scrapDataList.map((scrapData, index) => (
				<ScrapItem
					key={index}
					scrapData={scrapData}
					navigateToCommunityScreen={(data) => {
						navigation.navigate("CommunityScreen", { issueData: data });
					}}
				/>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 12,
		paddingHorizontal: 16,
		width: "100%",
		backgroundColor: "#FFFFFF",
	},
});

export default ScrapList;
