import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon_Comment from "@assets/images/Issue/Icon_Comment.svg";

interface DocumentData {
    title: string;
    viewCount: number;
    uploader: string;
    content: string;
}

interface DocumentItemProps {
    documentData: DocumentData;
    IsAdmin: boolean;
    navigateToCommunityScreen: (documentData: DocumentData) => void;
}

const IssueItem: React.FC<DocumentItemProps> = ({
    documentData,
    IsAdmin,
    navigateToCommunityScreen,
}) => {

    return (
        <TouchableOpacity
            onPress={() => navigateToCommunityScreen(documentData)}
            style={{ marginBottom: 16 }}
        >
            <View style={styles.container}>
                <View style={styles.leftContentsContainer}>
                    <Text style={styles.title}>{documentData.title}</Text>
                    <Text style={styles.textContent} numberOfLines={4}>
                        {documentData.content}
                    </Text>
                </View>
                <View>
                    <View style={styles.likeCommentCount}>
                        <Text style={[styles.textWithMargin, { color: "#adadad" }]}>
                            {documentData.uploader}가 제공했어요!
                        </Text>
                        <Text style={[styles.textWithMargin, { color: "#adadad" }]}>
                            {documentData.viewCount}명 읽음
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        paddingTop: 12,
        paddingBottom: 14,
        paddingHorizontal: 16,
        backgroundColor: "#F6F6F6",
    },
    leftContentsContainer: { flex: 1 },
    title: {
        fontSize: 14,
        fontFamily: "NotoSansKR.ttf",
        fontWeight: "900",
        letterSpacing: -1,
        marginBottom: 4,
    },
    textContent: {
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: "500",
    },
    ImgStyle: {
        width: 56,
        height: 56,
        marginBottom: 6,
    },
    likeCommentCount: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconImg: {
        height: 15,
        width: 15,
        paddingHorizontal: 10,
    },
    textWithMargin: {
        fontSize: 10,
        fontFamily: "Roboto",
        fontWeight: "400",
    },
    textLine: {
        borderRightWidth: 1,
        borderRightColor: "#E6E6E6",
    },
    textBottomLine: {
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC99",
    },
});

export default IssueItem;
