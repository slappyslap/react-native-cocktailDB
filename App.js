import CocktailList from "./src/views/CocktailList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NativeScreenNavigationContainer} from "react-native-screens";
import {NavigationContainer} from "@react-navigation/native";
import ItemDetails from "./src/views/ItemDetails";


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={CocktailList} />
                <Stack.Screen name="details" component={ItemDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
