import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CocktailListItem = ({item, navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate({name: "details", params: {id: item.idDrink}})}}>
            <Image source={{uri: item.strDrinkThumb}} style={styles.picture}/>
            <Text style={styles.name}>{item.strDrink}</Text>
        </TouchableOpacity>
    );
}

export default CocktailListItem;
const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        backgroundColor: "#1c1426",
        margin: 5,
        borderRadius: 20,

    },
    name: {
        margin: 10,
        textAlign: "center",
        color: "#fff"
    },
    picture: {
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});
