import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import CocktailListItem from "../component/CocktailListItem";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TheCocktailDBApiService from "../service/TheCocktailDBApiService";

export default function FavoriteList({navigation}) {

    const [cocktailList, setCocktailList] = useState([])

    useEffect(() => {
        return navigation.addListener('focus', () => {
            updateFav();
        });
    }, [navigation])

    const updateFav = () => {
        AsyncStorage.getItem('@favList').then((data) => {
            data = data ? JSON.parse(data) : [];

            let promises = [];
            for (const item of data) {
                promises.push(TheCocktailDBApiService.getItemById(item))
            }

            return Promise.all(promises).then(data => {
                return data;
            })
        }).then(data => {
            setCocktailList(data);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Cocktails</Text>
            <FlatList numColumns={2} data={cocktailList}
                      keyExtractor={(item, index) => item.idDrink }
                      renderItem={({item, index}) => {
                          return (<CocktailListItem item={item} navigation={navigation} key={index} updateFunction={updateFav}/>)
                      }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2432',
        color: "#fff",
        paddingVertical: 40,
        paddingBottom: 0,
        paddingHorizontal: 20
    },
    textHeader: {
        textAlign: "left",
        fontSize: 24,
        color: "#FFF"
    }
});
