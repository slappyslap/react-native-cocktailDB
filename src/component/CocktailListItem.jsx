import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import TheCocktailDBApiService from "../service/TheCocktailDBApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const CocktailListItem = ({item, navigation, updateFunction}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const jsonValue = AsyncStorage.getItem('@favList').then((data) => {
            data = data ? JSON.parse(data) : [];
            setIsFavorite(data.includes(item.idDrink))
        })
    }, [])

    const toggleFavorite = async (id) => {
        const jsonValue = await AsyncStorage.getItem('@favList')
        let array = jsonValue != null ? JSON.parse(jsonValue) : [];

        if(array.includes(id)) {
            array = array.filter(x => {
                return x != id;
            })
        } else {
            array.push(id);
        }

        await AsyncStorage.setItem('@favList', JSON.stringify(array))
        setIsFavorite(!isFavorite)

        if(updateFunction){
            updateFunction();
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate({name: "details", params: {id: item.idDrink}})}}>
                <Image source={{uri: item.strDrinkThumb}} style={styles.picture}/>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.name}>{item.strDrink}</Text>

                <TouchableOpacity style={{flex: 4/12}} onPress={() => {toggleFavorite(item.idDrink)}}>
                    <MaterialCommunityIcons size={40} color={isFavorite ? "#F00" : "#FFF" } name="heart"/>
                </TouchableOpacity>
            </View>
        </View>
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
        textAlign: "left",
        flex: 8/12,
        marginLeft: 10,
        marginVertical: 10,
        color: "#fff"
    },
    picture: {
        height: 150,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
    }
});
