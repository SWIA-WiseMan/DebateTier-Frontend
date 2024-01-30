import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Logo from "@assets/images/Logo_Toron-Tier.svg";
import Icon_Share from "@assets/images/Icon_Share.svg";
import Icon_Search from "@assets/images/Icon_Search.svg";
import Icon_Alert from "@assets/images/Icon_Alert.svg";

interface HeaderProps {
	showShareButton: boolean;
	onSharePress?: () => void;
	screen: string;
}

const Header: React.FC<HeaderProps> = ({
	showShareButton,
	onSharePress,
	screen = "Lorem",
}) => {
	return (
		<View style={styles.container}>
			{/* <Logo style={styles.logo} /> */}
			<View style={styles.buttonsContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.highLightText}>{screen}</Text>
				</View>
				{/* {showShareButton && (
					<TouchableOpacity onPress={onSharePress} style={styles.button}>
						<Icon_Search style={{ marginRight: 12 }} />
					</TouchableOpacity>
				)} */}
				<TouchableOpacity style={styles.button}>
					<Icon_Search />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon_Alert />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 16,
		height: 70,
		backgroundColor: "#FFFFFF",
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0",
	},
	logo: {
		width: 100,
		height: 32,
		resizeMode: "contain",
	},
	buttonsContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	button: {
		marginTop: 3,
		marginLeft: 12,
	},

	highLightText: {
		textAlign: "left",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 18,
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: -1,
	},
	textContainer: {
		marginTop: 3,
		marginLeft: 8,
		flex: 1,
	},
});

export default Header;
