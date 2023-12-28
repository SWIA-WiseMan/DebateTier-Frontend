import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "@components/common/Header";
import DebateList from "@components/debate/DebateList";

const DebateScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1 }}>
				<DebateList />
			</View>
		</SafeAreaView>
	);
};

export default DebateScreen;
