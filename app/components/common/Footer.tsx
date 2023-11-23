import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import HomeButton from "@assets/images/Icon_Home.svg";
import IssueButton from "@assets/images/Icon_Issue.svg";
import MypageButton from "@assets/images/Icon_Mypage.svg";

interface FooterProps {
	activeTab: "Home" | "Issue" | "Mypage";
}

const Footer: React.FC<FooterProps> = ({ activeTab }) => {
	const handlePress = (screenName: "Home" | "Issue" | "Mypage") => {};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handlePress("Home")}
			>
				<HomeButton color={activeTab === "Home" ? "#FFB800" : "#BDBDBD"} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handlePress("Issue")}
			>
				<IssueButton color={activeTab === "Issue" ? "#FFB800" : "#BDBDBD"} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handlePress("Mypage")}
			>
				<MypageButton color={activeTab === "Mypage" ? "#FFB800" : "#BDBDBD"} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#ffffff",
		paddingVertical: 10,
		borderColor: "#BDBDBD50",
		borderWidth: 1,
	},
	button: { width: 60, alignItems: "center" },
});

export default Footer;
