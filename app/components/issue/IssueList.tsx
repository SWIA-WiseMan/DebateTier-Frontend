import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import Icon_Good from "@assets/images/Icon_Good.svg";
import Icon_Comment from "@assets/images/Icon_Comment.svg";
import Icon_Hot from "@assets/images/Icon_Hot.svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

interface IssueData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

const IssueList: React.FC = () => {
	const [issueDataList, setIssueDataList] = useState<IssueData[]>([]);

	useEffect(() => {
		// 백엔드에서 데이터를 받아와서 issueDataList 상태에 설정
		// 예시로 더미 데이터 사용
		const responseData: IssueData[] = [
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
				likeCount: 20,
				commentCount: 30,
				createdTime: "1시간 전",
				content:
					"다들 빠른년생 폐지에 대해 어떻게 생각하시나요..? 전 솔직히 폐지해야 한다고 생각합니다..",
			},
		];

		setIssueDataList(responseData);
	}, []);

	const [heartStates, setHeartStates] = useState<boolean[]>([]);

	const toggleHeart = (index: number) => {
		setIssueDataList((prevIssueDataList) => {
			const updatedIssueDataList = [...prevIssueDataList];
			const updatedIssueData = { ...updatedIssueDataList[index] };

			updatedIssueData.likeCount = heartStates[index]
				? updatedIssueData.likeCount - 1
				: updatedIssueData.likeCount + 1;

			updatedIssueDataList[index] = updatedIssueData;

			const newHeartStates = [...heartStates];
			newHeartStates[index] = !newHeartStates[index];

			setHeartStates(newHeartStates);

			return updatedIssueDataList;
		});
	};

	return (
		<ScrollView style={styles.container}>
			{issueDataList.map((issueData, index) => (
				<React.Fragment key={index}>
					<View style={styles.paddingContent}>
						<Icon_Hot />

						<Text style={styles.title}>{issueData.title}</Text>

						<View style={styles.detailsContainer}>
							<Icon_Good style={styles.textWithMargin} />
							<Text style={styles.textWithMargin}>
								좋아요 {issueData.likeCount}개
							</Text>
							<Text style={styles.textLine}></Text>
							<Icon_Comment style={styles.textWithMargin} />
							<Text style={styles.textWithMargin}>
								댓글 {issueData.commentCount}개
							</Text>
							<Text style={styles.textLine}></Text>
							<Text style={styles.textWithMargin}>{issueData.createdTime}</Text>
							<View style={styles.iconContainer}>
								<TouchableOpacity onPress={() => toggleHeart(index)}>
									<FontAwesomeIcon
										icon={faHeart}
										size={20}
										color={heartStates[index] ? "#FFB800" : "#80808064"}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<Text style={styles.textContent} numberOfLines={2}>
							{issueData.content}
						</Text>
					</View>
					<View style={styles.textBottomLine}></View>
				</React.Fragment>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
	},
	paddingContent: {
		padding: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},
	title: {
		fontSize: 22,
		fontFamily: "Roboto",
		fontWeight: "800",
		marginBottom: 8,
	},
	detailsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 7,
		marginLeft: 3,
	},
	textWithMargin: {
		fontSize: 10,
		fontFamily: "Roboto",
		fontWeight: "400",
		marginRight: 7,
	},
	textLine: {
		marginRight: 7,
		borderRightWidth: 1,
		borderRightColor: "#E6E6E6",
	},
	iconContainer: {
		marginLeft: "auto",
	},
	textContent: {
		fontSize: 14,
		fontFamily: "Roboto",
		fontWeight: "500",
	},
	textBottomLine: {
		marginTop: 7,
		borderBottomWidth: 1,
		borderBottomColor: "#ECECEC99",
	},
});

export default IssueList;
