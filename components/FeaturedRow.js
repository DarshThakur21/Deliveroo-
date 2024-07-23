import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Restaurantcard from './Restaurantcard';

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>

            <View style={styles.featureviewcss}>
                <Text style={styles.viewcsstext}>{title}</Text>
                <ArrowRightIcon color='#00CCBB' size={27} />
            </View>
                <Text style={styles.descriptioncss}>{description}</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={{
                        paddingHorizontal:10,

                    }}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingTop:16}}
                >

                    {/* {restaurant cards} */}
                            <Restaurantcard 
                            id={123}
                            imgUrl="https://links.papareact.com/gn7"
                            title="Sushi ghar"
                            rating={4.2}
                            genre="Japanese sea food"
                            address="KP"
                            s_desc="this is sushi"
                            dishes={[]}
                            long={400}
                            lat={750}
                            />
                            <Restaurantcard 
                            id={123}
                            imgUrl="https://links.papareact.com/gn7"
                            title="Sushi ghar"
                            rating={4.2}
                            genre="Japanese sea food"
                            address="KP"
                            s_desc="this is sushi"
                            dishes={[]}
                            long={400}
                            lat={750}
                            />

                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    featureviewcss: {
        marginTop: 12,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',

    },
    viewcsstext:{
        fontSize:20,
        fontWeight:'800',
    },
    descriptioncss:{
        fontSize:12,
        color:"gray",
        paddingHorizontal:2,
    }



});

export default FeaturedRow