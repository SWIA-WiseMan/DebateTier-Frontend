import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import Icon_Arrow_back from "@assets/images/Icon_Arrow_back.svg";
import Icon_Bell from "@assets/images/Icon_Bell.svg";
import Icon_Search from "@assets/images/Icon_Search.svg";
import Icon_Mask_group from "@assets/images/Icon_Mask_group.svg";
import Icon_Read_more from "@assets/images/Icon_Read_more.svg";

const Header: React.FC = () => (
	<View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
		<TouchableOpacity>
			<Icon_Arrow_back />
		</TouchableOpacity>
		<View style={{ flexDirection: "row" }}>
			<TouchableOpacity style={{ marginRight: 8 }}>
				<Icon_Bell />
			</TouchableOpacity>
			<TouchableOpacity style={{ marginRight: 8 }}>
				<Icon_Search />
			</TouchableOpacity>
			<Icon_Mask_group />
		</View>
		<TouchableOpacity>
			<Icon_Read_more />
		</TouchableOpacity>
	</View>
);

const HomeScreen: React.FC = () => (
	<SafeAreaView style={{ flex: 1 }}>
		<Header />
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home Screen</Text>
		</View>
	</SafeAreaView>
);

export default HomeScreen;
