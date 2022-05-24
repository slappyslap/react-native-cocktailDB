import CocktailList from "./src/views/CocktailList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import ItemDetails from "./src/views/ItemDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeNavigator from "./src/views/HomeNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import FavoriteList from "./src/views/FavoriteList";


export default function App() {

    const Stack = createNativeStackNavigator();
    const Tabs = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#2b2432'}}}>
                <Tabs.Screen name="Root" component={HomeNavigator} options={{
                    tabBarLabel: "Liste",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-list" color={color} size={size} />
                    ),}}  />
                <Tabs.Screen name="Favorite" component={FavoriteList} options={{
                    tabBarLabel: "Favoris",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),}}  />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}