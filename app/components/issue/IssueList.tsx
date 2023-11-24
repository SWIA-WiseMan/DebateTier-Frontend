// IssueList.tsx

import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import IssueItem from "@components/issue/IssueItem";

interface IssueData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

const IssueList: React.FC = () => {
	const [issueDataList, setIssueDataList] = useState<IssueData[]>([]);
	const [heartState, setHeartState] = useState<boolean>(false);

	useEffect(() => {
		// 백엔드에서 데이터를 받아와서 issueDataList 상태에 설정
		// 예시로 더미 데이터 사용
		const responseData: IssueData[] = [
			{
				title: "후쿠시마 오염수 방류에 대해 어떻게 생각하시나요?",
				likeCount: 100,
				commentCount: 50,
				createdTime: "1시간 전",
				content: "님들 이건 솔직히 아니지 않나요?...",
			},
			{
				title: "빠른년생 폐지에 대해 어떻게 생각하시나요?",
				likeCount: 30,
				commentCount: 20,
				createdTime: "1시간 전",
				content: "다들 빠른년생 폐지에 대해 어떻게 생각하시나요..?",
			},
		];

		setIssueDataList(responseData);
	}, []);

	const handleLikeToggle = (index: number) => {
		const updatedIssueDataList = issueDataList.map((issueData, i) => {
			if (i === index) {
				return {
					...issueData,
					likeCount: heartState
						? issueData.likeCount - 1
						: issueData.likeCount + 1,
				};
			}
			return issueData;
		});

		setHeartState(!heartState); // 하트 상태 업데이트
		setIssueDataList(updatedIssueDataList);
	};

	return (
		<ScrollView style={styles.container}>
			{issueDataList.map((issueData, index) => (
				<IssueItem
					key={index}
					issueData={issueData}
					onLikeToggle={() => handleLikeToggle(index)}
					heartState={heartState}
				/>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
	},
});

export default IssueList;
