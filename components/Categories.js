import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Categoriescard from './Categoriescard'


const Categories = () => {
  return (

    // {categories card}
    <ScrollView
        contentContainerStyle={{
            paddingTop:10,
            paddingBottom:15,
            }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* <Text>Categories</Text> */}
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 1" />
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 2" />
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 3" />
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 4" />
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 5" />
      <Categoriescard imgUrl="https://links.papareact.com/gn7" title=" testing 6" />
      
    </ScrollView>
  )
}

export default Categories