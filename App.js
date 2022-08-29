import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from './screens/CatagoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';
const Stack = createNativeStackNavigator();

export default function App() {
  return (<>
  <StatusBar style='light'/>
  <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{ backgroundColor: '#351401' },
         headerTintColor: 'white',
         contentStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
                      options={{
                        title:'All Categories',}}/>
        <Stack.Screen name="MealsOverview" component={MealsOverview}/>
        <Stack.Screen name="MealDetail" component={MealDetail}
                      />
      </Stack.Navigator>
  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
