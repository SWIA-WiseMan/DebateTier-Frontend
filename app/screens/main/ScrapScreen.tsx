import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "@components/common/Header";
import ScrapList from "@components/scrap/ScrapList";

const ScrapScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header
				showShareButton={false}
				onSharePress={handleSharePress}
				screen="찜목록"
			/>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ScrapList />
			</View>
		</SafeAreaView>
	);
};

export default ScrapScreen;
