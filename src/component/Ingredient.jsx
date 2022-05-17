import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function Ingredient({ingredientName}) {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: `https://www.thecocktaildb.com/images/ingredients/${ingredientName}-Medium.png`}}
                style={styles.picture}
            />
            <Text style={styles.name}>{ingredientName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "45%",
        backgroundColor: "#1c1426",
        margin: 5,
        borderRadius: 20,
        height: 190,
    },
    name: {
        margin: 10,
        textAlign: "center",
        color: "#fff"
    },
    picture: {
        height: 150,
        aspectRatio: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});
