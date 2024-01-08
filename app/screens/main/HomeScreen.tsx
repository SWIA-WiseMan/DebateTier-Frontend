import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "@components/common/Header";
import HomeList from "@components/home/HomeList";

const HomeScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				{/* <Text>Home Screen</Text> */}
				<HomeList />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
