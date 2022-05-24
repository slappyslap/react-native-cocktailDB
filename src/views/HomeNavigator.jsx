import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import CocktailList from "./CocktailList";
import ItemDetails from "./ItemDetails";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function HomeNavigator() {

    let Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={CocktailList} />
            <Stack.Screen name="details" component={ItemDetails} />
        </Stack.Navigator>
    )
}