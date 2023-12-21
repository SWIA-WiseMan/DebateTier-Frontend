import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type MenuType = "communication" | "discussion" | "resources";

const Frame: React.FC = () => {
	const [selectedMenu, setSelectedMenu] = useState<MenuType>("communication");

	const handleMenuSelect = (menu: MenuType) => {
		setSelectedMenu(menu);
	};

	return (
		<>
			<View>
				<View style={styles.textContainer}>
					<TouchableOpacity onPress={() => handleMenuSelect("communication")}>
						<Text
							style={[
								styles.textItem,
								selectedMenu === "communication" ? styles.colorText : null,
							]}
						>
							소통방
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleMenuSelect("discussion")}>
						<Text
							style={[
								styles.textItem,
								selectedMenu === "discussion" ? styles.colorText : null,
							]}
						>
							실시간 토론방
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleMenuSelect("resources")}>
						<Text
							style={[
								styles.textItem,
								selectedMenu === "resources" ? styles.colorText : null,
							]}
						>
							관련자료
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		paddingTop: 10,
	},
	textItem: {
		fontSize: 16,
		fontFamily: "Roboto",
		fontWeight: "600",
		padding: 35,
		paddingTop: 0,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#D9D9D9",
		flexShrink: 0,
	},
	colorText: {
		fontSize: 16,
		fontFamily: "Roboto",
		fontWeight: "600",
		color: "#FFB800",
		borderBottomColor: "#FFB800",
		flexShrink: 0,
	},
});

export default Frame;
