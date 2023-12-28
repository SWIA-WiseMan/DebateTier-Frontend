import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DebateItem from "@components/debate/DebateItem";

interface DebateData {
	title: string;
	headCount: number;
	hour: number;
	minute: number;
}

const DebateList: React.FC = () => {
	const [debateDataList, setDebateDataList] = useState<DebateData[]>([]);

	useEffect(() => {
		// 백엔드에서 데이터를 받아와서 issueDataList 상태에 설정
		// 예시로 더미 데이터 사용
		const responseData: DebateData[] = [
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
		];

		setDebateDataList(responseData);
	}, []);

	return (
		<ScrollView style={styles.container}>
			{debateDataList.map((debateData, index) => (
				<DebateItem key={index} debateData={debateData} />
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#FFFFFF",
		padding: 16,
		paddingTop: 12,
	},
});

export default DebateList;
