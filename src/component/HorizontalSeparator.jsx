import {Text, View} from 'react-native';
import React from "react";

const HorizontalSeparator = ({text, color = "#FFF"}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: color}} />
            <Text numberOfLines={1} adjustsFontSizeToFit style={{fontSize: 20, textAlign: 'center', color: color, marginHorizontal: 10}}>{text}</Text>
            <View style={{flex: 1, height: 1, backgroundColor: color}} />
        </View>
    );
}

export default HorizontalSeparator;