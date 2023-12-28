// components/issue/IssueList.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Icon_Good from "@assets/images/Issue/Icon_Good.svg";
import Icon_Comment from "@assets/images/Issue/Icon_Comment.svg";
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
	//<Icon_Hot />

	// <TouchableOpacity onPress={toggleHeart}>
	// 								<FontAwesomeIcon
	// 									icon={faHeart}
	// 									size={20}
	// 									color={isHeartFilled ? "#FFB800" : "#80808064"}
	// 								/>
	// 							</TouchableOpacity>

	// <View style={styles.detailsContainer}>
	// 					<Text style={styles.textLine}></Text>
	// 					<Text style={styles.textWithMargin}>{issueData.createdTime}</Text>
	// 					<View style={styles.iconContainer}></View>
	// 				</View>

	return (
		<TouchableOpacity
			onPress={() => navigateToCommunityScreen(issueData)}
			style={{ marginBottom: 16 }}
		>
			<View>
				<View style={styles.container}>
					<View style={styles.leftContentsContainer}>
						<Text style={styles.title}>{issueData.title}</Text>
						<Text style={styles.textContent} numberOfLines={3}>
							{issueData.content}
						</Text>
					</View>
					<View style={styles.rightContentsContainer}>
						<Image
							source={require("@assets/images/Issue/Img_Tmp.png")}
							style={styles.ImgStyle}
						/>
						<View style={styles.likeCommentCount}>
							<Icon_Good style={styles.iconImg} />
							<Text style={[styles.textWithMargin, { color: "#ff5c00" }]}>
								{issueData.likeCount}
							</Text>
							<Text style={styles.textLine}></Text>
							<Icon_Comment style={styles.iconImg} />
							<Text style={[styles.textWithMargin, { color: "#0085ff" }]}>
								{issueData.commentCount}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		paddingTop: 12,
		paddingBottom: 14,
		paddingHorizontal: 16,
		backgroundColor: "#F6F6F6",
	},
	leftContentsContainer: { flex: 1 },
	title: {
		fontSize: 14,
		fontFamily: "NotoSansKR.ttf",
		fontWeight: "800",
		letterSpacing: -1,
		marginBottom: 4,
	},
	textContent: {
		fontSize: 12,
		fontFamily: "Roboto",
		fontWeight: "500",
	},
	rightContentsContainer: {
		paddingLeft: 14,
		alignItems: "center",

		justifyContent: "center",
	},
	ImgStyle: {
		width: 56,
		height: 56,
		marginBottom: 6,
	},
	likeCommentCount: {
		flexDirection: "row",
	},
	iconImg: {
		height: 15,
		width: 15,
		paddingHorizontal: 10,
	},

	textWithMargin: {
		fontSize: 10,
		fontFamily: "Roboto",
		fontWeight: "400",
	},
	textLine: {
		borderRightWidth: 1,
		borderRightColor: "#E6E6E6",
	},
	textBottomLine: {
		marginTop: 7,
		borderBottomWidth: 1,
		borderBottomColor: "#ECECEC99",
	},
});

export default IssueItem;
