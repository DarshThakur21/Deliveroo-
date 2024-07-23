import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const Restaurantcard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    s_desc,
    dishes,
    long,
    lat,
}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: 'white', paddingBottom: 5, marginRight: 4, shadowColor: '#000',                
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
        }}>
            <Image
                source={{ uri: imgUrl }}
                style={{ height: 144, width: 256, borderRadius: 3 }}
            />
            <View style={{ paddingHorizontal: 2, paddingTop: 4 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 2, }}>{title}</Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                    <StarIcon color='green' opacity={0.4} size={20} />
                    <Text style={{ color: 'green' }}>{rating}</Text>
                    <Text> . </Text>
                    <Text>{genre}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <MapPinIcon color='green' opacity={0.4} size={20} />
                    <Text style={{ fontSize: 12, color: 'gray' }}>Nearby . {address}</Text>
                </View>


            </View>


        </TouchableOpacity>
    )
}

export default Restaurantcard