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
		flex: 1,
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	textItem: {
		fontSize: 22,
		padding: 25,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#D9D9D9",
	},
	colorText: {
		fontSize: 22,
		color: "#FFB800",
		borderBottomColor: "#FFB800",
	},
});

export default Frame;
