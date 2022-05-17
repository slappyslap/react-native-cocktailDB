import React from 'react';
import {Text} from 'react-native';

const CocktailListItem = ({item}) => {
    return (
        <Text>{item.strDrink}</Text>
    );
}

export default CocktailListItem;
