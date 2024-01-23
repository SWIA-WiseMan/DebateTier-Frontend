import React from "react";
import { SafeAreaView, View, Text } from "react-native";

const SearchScreen: React.FC = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>글 제목 혹은 내용을 입력해주세요.</Text>
            </View>
        </SafeAreaView>
    );
};

export default SearchScreen;