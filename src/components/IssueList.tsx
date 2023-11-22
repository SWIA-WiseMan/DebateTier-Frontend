/* eslint-disable */
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IssueList = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={[styles.hotBox, styles.hotText]}>HOT!</Text>

			<Text style={styles.title}>
				후쿠시마 오염수 방류에 대해 어떻게 생각하시나요?
			</Text>

			<View style={styles.detailsContainer}>
				<Icon name="thumbs-up" size={15} color="black" />
				<Text style={styles.textWithMargin}>좋아요</Text>
				<Icon name="comment" size={15} color="black" />
				<Text style={styles.textWithMargin}>댓글</Text>
				<Text style={styles.textWithMargin}>1시간 전</Text>
				<View style={styles.iconContainer}>
					<Icon name="heart" size={20} color="#FFB800"></Icon>
				</View>
			</View>

			<Text numberOfLines={2}>
				님들 이건 솔직히 아니지 않나요? 다들 회 안 먹고싶어요? 난 진짜 못믿겠음
				일본... 이제 연어 못 먹을 듯ㅜ
				글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트글자수테스트
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#CCCCCC",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
	detailsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 5,
		marginRight: 10,
	},
	buttonText: {
		color: "black",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	textWithMargin: {
		marginHorizontal: 7, // 좌우로 2의 마진 부여
	},
	hotBox: {
		width: 50,
		height: 20,
		borderRadius: 8,
		backgroundColor: "#FFB800",
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 2,
		marginBottom: 2,
	},
	hotText: {
		color: "white",
		textAlign: "center",
	},
	iconContainer: {
		marginLeft: "auto",
	},
});

export default IssueList;
