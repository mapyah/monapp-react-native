import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./Navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AppBar from "./components/AppBar";

import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import TodoListFetchScreen from "./screens/TodoListFetchScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TodoListWrapper() {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={[
      styles.container,
      theme === "dark" ? styles.dark : styles.light,
    ]}>
      <TodoListFetchScreen />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="TodoList" component={TodoListWrapper} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme === 'dark' ? '#1a1a1a' : '#007AFF'}}>
        <AppBar />
      </SafeAreaView>

      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarStyle: { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff' },
          tabBarActiveTintColor: theme === 'dark' ? '#BB86FC' : '#007AFF',
          tabBarInactiveTintColor: theme === 'dark' ? '#888888' : '#8E8E93',
        }}
      >
        <Tab.Screen
          name="Maison"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TodoList"
          component={TodoListWrapper}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Paramètres"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <MainTabs /> : <LoginScreen />;
}

function MainApp() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default function App() {
  return <MainApp />;
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  light: { backgroundColor: "#ffffff" },
  dark: { backgroundColor: "#121212" },
});
