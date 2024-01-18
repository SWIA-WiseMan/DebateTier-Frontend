import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "@components/common/Header";
import DebateList from "@components/debate/DebateList";
import ChatRoom from "@components/debate/ChatRoom";

const DebateScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1 }}>
				{/* <DebateList layout="vertical" /> */}
				<ChatRoom/>
			</View>
		</SafeAreaView>
	);
};

export default DebateScreen;
