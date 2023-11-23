import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "app/App";

import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

type MypageScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, "Mypage">;
};

const MypageScreen: React.FC<MypageScreenProps> = ({ navigation }) => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Mypage Screen</Text>
			</View>
			<Footer activeTab="Mypage" navigation={navigation} />
		</SafeAreaView>
	);
};

export default MypageScreen;
