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

const IssueItem: React.FC = () => {
	const [issueData, setIssueData] = useState<IssueData>({
		title: "",
		likeCount: 0,
		commentCount: 0,
		createdTime: "",
		content: "",
	});

	useEffect(() => {
		const responseData: IssueData = {
			title: "후쿠시마 오염수 방류에 대해 어떻게 생각하시나요?",
			likeCount: 100,
			commentCount: 50,
			createdTime: "1시간 전",
			content:
				"님들 이건 솔직히 아니지 않나요? 다들 회 안 먹고싶어요? 난 진짜 못믿겠음 일본... 이제 연어 못 먹을 듯ㅜ 글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트",
		};

		setIssueData(responseData);
	}, []);

	const [isHeartFilled, setIsHeartFilled] = useState(false);
	const [likeCount, setLikeCount] = useState(issueData.likeCount);

	const toggleHeart = () => {
		setIsHeartFilled((prev) => !prev);
		setIssueData((prevIssueData) => ({
			...prevIssueData,
			likeCount: prevIssueData.likeCount + (isHeartFilled ? -1 : 1),
		}));
	};

	return (
		<ScrollView style={styles.container}>
			{issueData && (
				<>
					<View style={styles.paddingContent}>
						<Icon_Hot />

						<Text style={styles.title}>{issueData.title}</Text>

						<View style={styles.detailsContainer}>
							<Icon_Good style={styles.textWithMargin} />
							<Text style={styles.textWithMargin}>
								좋아요 {issueData.likeCount}
							</Text>
							<Text style={styles.textLine}></Text>
							<Icon_Comment style={styles.textWithMargin} />
							<Text style={styles.textWithMargin}>
								댓글 {issueData.commentCount}개
							</Text>
							<Text style={styles.textLine}></Text>
							<Text style={styles.textWithMargin}>{issueData.createdTime}</Text>
							<View style={styles.iconContainer}>
								<TouchableOpacity onPress={toggleHeart}>
									<FontAwesomeIcon
										icon={faHeart}
										size={20}
										color={isHeartFilled ? "#FFB800" : "#80808064"}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<Text style={styles.textContent} numberOfLines={2}>
							{issueData.content}
						</Text>
					</View>
					<View style={styles.textBottomLine}></View>
				</>
			)}
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

export default IssueItem;
