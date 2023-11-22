import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "@assets/images/Logo_Toron-Tier.svg";
import Icon_Share from "@assets/images/Icon_Share.svg";
import Icon_Search from "@assets/images/Icon_Search.svg";

interface HeaderProps {
	showShareButton: boolean;
	onSharePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showShareButton, onSharePress }) => {
	return (
		<View style={styles.container}>
			<Logo style={styles.logo} />
			<View style={styles.buttonsContainer}>
				{showShareButton && (
					<TouchableOpacity onPress={onSharePress} style={styles.button}>
						<Icon_Share />
					</TouchableOpacity>
				)}
				<TouchableOpacity style={styles.button}>
					<Icon_Search />
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
		height: 56,
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
		marginRight: 8,
		marginLeft: 15,
	},
});

export default Header;
