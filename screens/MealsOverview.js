import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View,FlatList,StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

import { useLayoutEffect } from "react";

function MealsOverview({route, navigation}){
    const catId = route.params.categoryId
    const displayMealss = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    function renderMealItem(itemData){
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
        }
        return <MealItem {...mealItemProps}/>
    }

    return <View style={styles.container}>
        <FlatList data={displayMealss} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
}
export default MealsOverview
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})