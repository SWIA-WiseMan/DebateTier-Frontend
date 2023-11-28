// CommunityScreen.tsx

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Frame from "@components/issue/Frame";

import Icon_Profile from "@assets/images/Icon_Profile.svg";
import Icon_Good from "@assets/images/Icon_Good.svg";
import Icon_Comment from "@assets/images/Icon_Comment.svg";
import Icon_Empathy from "@assets/images/Icon_Empathy.svg";
import Icon_Scrap from "@assets/images/Icon_Scrap.svg";

interface IssueData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

type CommunityScreenProps = {
	route: {
		params: {
			issueData: IssueData;
		};
	};
};

const CommunityScreen: React.FC<CommunityScreenProps> = ({ route }) => {
	const { issueData } = route.params;

	return (
		<>
			<View style={styles.containerColor}>
				{/* <Frame /> */}
				<View style={styles.container}>
					<View style={[styles.rowGroup, styles.profileMargin]}>
						<Icon_Profile style={styles.rightMargin} />
						<Text style={styles.rightMargin}>익명</Text>
						<Text>{issueData.createdTime}</Text>
					</View>

					<Text style={styles.title}>{issueData.title}</Text>

					<View style={[styles.rowGroup, styles.iconsMargin]}>
						<Icon_Good style={styles.rightMargin} />
						<Text style={[styles.iconText, styles.rightMargin]}>
							{issueData.likeCount}
						</Text>
						<Icon_Comment style={styles.rightMargin} />
						<Text style={styles.iconText}>{issueData.commentCount}</Text>
					</View>

					<Text style={styles.contentText}>{issueData.content}</Text>

					<View style={[styles.rowGroup, styles.btnMargin]}>
						<Icon_Empathy style={styles.rightMargin} />
						<Icon_Scrap />
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	containerColor: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	container: {
		marginRight: 18,
		marginLeft: 18,
	},
	title: {
		fontSize: 22,
		fontFamily: "Roboto",
		fontWeight: "700",
	},
	rowGroup: {
		flexDirection: "row",
	},
	iconText: {
		fontSize: 12,
		fontFamily: "Roboto",
		fontWeight: "400",
	},
	contentText: {
		fontSize: 14,
		fontFamily: "Roboto",
		fontWeight: "500",
	},
	profileMargin: {
		marginTop: 19,
		marginBottom: 12,
	},
	iconsMargin: {
		marginTop: 8,
		marginBottom: 17,
	},
	btnMargin: {
		marginTop: 14,
		marginBottom: 22,
	},
	rightMargin: {
		marginRight: 5,
	},
});

export default CommunityScreen;
