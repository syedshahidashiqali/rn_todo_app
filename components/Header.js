import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App by Shahid</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        // padding: 20,
        backgroundColor: "coral",
    },
    title: {
        textAlign: "center",
        fontWeight:"bold",
        fontSize:20,
        color: "#fff"
    }

})

export default Header;
