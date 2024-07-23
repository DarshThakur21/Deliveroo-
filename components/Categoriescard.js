import React from 'react'
import { View,StyleSheet, Text, TouchableOpacity ,Image} from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'

const Categoriescard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity  style={styles.touchablecss}  >
            <Image 
                source={{
                    uri:imgUrl,
                }}
                // className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                style={styles.image}
            />

        <Text  style={styles.touchabletextcss}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    image:{
        height: 80,
        width: 80,
        backgroundColor: 'white',
        // padding: 10,
        borderRadius: 4,
        // marginLeft:8,
    },

    touchablecss:{
        position:'relative',
        marginRight:3,
    },

    touchabletextcss:{
        position:'absolute',
        bottom:4,
        left:4,
        color:'white',
        fontWeight:'bold',


    }
})
export default Categoriescard