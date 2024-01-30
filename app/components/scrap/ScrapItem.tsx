import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon_Good from "@assets/images/Issue/Icon_Good.svg";
import Icon_Comment from "@assets/images/Issue/Icon_Comment.svg";

interface ScrapData {
	title: string;
	likeCount: number;
	commentCount: number;
	createdTime: string;
	content: string;
}

interface ScrapItemProps {
	scrapData: ScrapData;
	navigateToCommunityScreen: (ScrapData: ScrapData) => void;
}

const ScrapItem: React.FC<ScrapItemProps> = ({
	scrapData,
	navigateToCommunityScreen,
}) => {
	return (
		<TouchableOpacity
			onPress={() => navigateToCommunityScreen(scrapData)}
			style={{ marginBottom: 16 }}
		>
			<View style={styles.container}>
				<View style={styles.leftContentsContainer}>
					<Text style={styles.title} numberOfLines={1}>
						{scrapData.title}
					</Text>
				</View>
				<View style={styles.rightContentsContainer}>
					<View style={styles.recommendCommentCount}>
						<Icon_Good style={styles.iconImg} />
						<Text
							style={[
								styles.textWithMargin,
								{ color: "#ff5c00", marginRight: 5 },
							]}
						>
							{scrapData.likeCount}
						</Text>
						<Text style={styles.textLine}></Text>
						<Icon_Comment style={styles.iconImg} />
						<Text style={[styles.textWithMargin, { color: "#0085ff" }]}>
							{scrapData.commentCount}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		paddingTop: 12,
		paddingBottom: 14,
		marginHorizontal: 10,
		//paddingHorizontal: 16,
		borderBottomColor: "#EAEAEA",
		borderBottomWidth: 1,
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
		width: 120,
		paddingLeft: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	ImgStyle: {
		width: 56,
		height: 56,
		marginBottom: 6,
	},
	recommendCommentCount: {
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

export default ScrapItem;
