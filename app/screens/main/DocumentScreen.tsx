import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from "@components/common/Header";

type DocumentScreenNavigationProp = StackNavigationProp<any, any>;

const DocumentScreen: React.FC = () => {
	const navigation = useNavigation<DocumentScreenNavigationProp>();
	const handleSharePress = () => { };
	const handleSearchPress = () => {
		navigation.navigate('SearchScreen');
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} onSearchPress={handleSearchPress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Document Screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default DocumentScreen;
