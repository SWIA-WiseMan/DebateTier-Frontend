// components/issue/IssueList.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Icon_Good from "@assets/images/Icon_Good.svg";
import Icon_Comment from "@assets/images/Icon_Comment.svg";
import Icon_Hot from "@assets/images/Icon_Hot.svg";
import { useNavigation } from "@react-navigation/native";

interface IssueData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

interface IssueItemProps {
	issueData: IssueData;
	onLikeToggle: () => void;
	heartState: boolean;
	navigateToCommunityScreen: (issueData: IssueData) => void;
}

const IssueItem: React.FC<IssueItemProps> = ({
	issueData,
	onLikeToggle,
	heartState,
	navigateToCommunityScreen,
}) => {
	const [isHeartFilled, setIsHeartFilled] = useState(heartState);

	const toggleHeart = () => {
		setIsHeartFilled((prev) => !prev);
		onLikeToggle();
	};

	return (
		<TouchableOpacity onPress={() => navigateToCommunityScreen(issueData)}>
			<View>
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
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
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
		fontFamily: "Roboto",
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
