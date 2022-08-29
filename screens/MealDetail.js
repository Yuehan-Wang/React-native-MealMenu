import { Text, View, Image,StyleSheet, ScrollView } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/Subtitle"
import List from "../components/List"
import { useLayoutEffect } from "react"
import IconButton from "../components/IconButton"

function MealDetail({route, navigation}){
    const mealId = route.params.mealId
    const selecedMeal = MEALS.find((meal) => meal.id == mealId)

    function headerButtonPressHandler(){
        console.log("hi")
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => {
                return <IconButton 
                        icon="star"
                        color='white'
                        onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])

    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri : selecedMeal.imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{selecedMeal.title}</Text>
        <MealDetails 
            duration={selecedMeal.duration} 
            complexity={selecedMeal.complexity} 
            affordability={selecedMeal.affordability}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuter}>
                <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selecedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selecedMeal.steps}/>
                </View>
            </View>
    </ScrollView>
}
export default MealDetail

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image:{
        width: '100%',
        height: 250
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color: 'white'
    },
    listOuter:{
        alignItems: 'center'
    },
    listContainer: {
        maxWidth: '80%',
    }
})