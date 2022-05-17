import {ActivityIndicator, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, ScrollView} from "react-native";
import TheCocktailDBApiService from "../service/TheCocktailDBApiService";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalSeparator from "../component/HorizontalSeparator";
import Ingredient from "../component/Ingredient";

export default function ItemDetails({navigation, route}) {

    const [item, setItem] = useState();

    useEffect(() => {
        TheCocktailDBApiService.getItemById(route.params.id).then((data) => {
            setItem(data);
        })
    }, [route.params?.id])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {navigation.navigate({name: "Home"})}}>
                    <MaterialCommunityIcons
                        size={32}
                        name={"arrow-left"}
                        color={'#fff'}
                    />
                </TouchableOpacity>
            </View>

            {item ? (
                <View>
                    <View style={styles.card}>
                        <Image source={{uri: item.strDrinkThumb}} style={styles.picture}/>
                        <Text style={styles.name}>{item.strDrink}</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                        <HorizontalSeparator text={"Instructions"}/>
                        <Text style={styles.instruction}>
                            {item.strInstructionsFR || item.strInstructions}
                        </Text>

                        <HorizontalSeparator text={"Ingrédients"}/>
                        <View style={styles.ingredientContainer}>
                            {
                                [
                                    item.strIngredient1,
                                    item.strIngredient2,
                                    item.strIngredient3,
                                    item.strIngredient4,
                                    item.strIngredient5,
                                    item.strIngredient6,
                                    item.strIngredient7,
                                    item.strIngredient8,
                                    item.strIngredient9,
                                    item.strIngredient10,
                                    item.strIngredient11,
                                    item.strIngredient12,
                                    item.strIngredient13,
                                    item.strIngredient14,
                                    item.strIngredient15,
                                ].filter(n => n).map((item, index) => {
                                    return (<Ingredient ingredientName={item} key={index}/>)
                                } )
                            }
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2432',
        color: "#fff",
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    name: {
        margin: 10,
        textAlign: "center",
        color: "#fff",
        fontSize: 24,
    },
    picture: {
        height: 400,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card: {
        backgroundColor: "#1c1426",
        marginTop: 10,
        borderRadius: 20,
    },
    title: {
        color: "#FFF",
        margin: 5,
        fontSize: 18,
    },
    instruction: {
        color: "#FFF",
        margin: 5,
        fontSize: 16
    },
    ingredientContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginTop: 20,
        marginBottom: 40,
    },
});
