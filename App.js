import {FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import TheCocktailDBApiService from "./src/service/TheCocktailDBApiService";
import CocktailListItem from "./src/component/CocktailListItem";
import {Text} from "react-native";

export default function App() {

    const [cocktailList, setCocktailList] = useState([])

    useEffect(() => {
        TheCocktailDBApiService.getMultipleItems(20).then((array) => {
            setCocktailList(array);
        })
    }, [])

    const loadMoreCocktail = async () => {
        const cocktails = await TheCocktailDBApiService.getMultipleItems(6)
        setCocktailList((m) => {
            return m.concat(cocktails);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Cocktails</Text>
            <FlatList numColumns={2} data={cocktailList}
                      keyExtractor={(item, index) => item.idDrink }
                      onEndReached={loadMoreCocktail}
                      renderItem={({item, index}) => {
                return (<CocktailListItem item={item} key={index}/>)
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
        paddingHorizontal: 20
    },
    textHeader: {
        textAlign: "left",
        fontSize: 24,
        color: "#FFF"
    }
});
