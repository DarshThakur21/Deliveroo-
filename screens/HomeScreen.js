import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { useLayoutEffect } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            // headerTitle:"hell0",
        });
    }, []);

    return (

        <SafeAreaView className='bg-white pt-5 mx-2'>

            <View className='mt-6  flex-row items-center mx-2 space-x-2 pb-2 px-3'>
                <Image
                    source={
                        { uri: 'https://links.papareact.com/wru' }
                    }
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />


                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver Now! </Text>
                    <Text className='font-bold text-xl'>current location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>
                </View>

                <UserIcon size={35} color='gray' />
            </View>

            {/* {search} */}

            <View className='flex-row items-center pb-3 ' >
                <View className='flex-row flex-1 space-x-3 mx-4 items-center bg-gray-200 rounded-lg p-3'   >
                    <MagnifyingGlassIcon size={20} color='gray' />
                    <TextInput
                        placeholder='Search your restaurants...'
                        keyboardType='default'
                    />

                </View>
                <AdjustmentsHorizontalIcon size={30} color='#00CCBB' />
            </View>


            {/* {body} */}

            <ScrollView className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom: 100,
                }}

            >
                {/* {categories} */}
                <Categories />

                {/* {feature restaurants} */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description='paid placement from the patreons '
                />

                {/* {tasty discounts} */}

                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description='Get Exclusive discounts  '
                />


                {/* {offers near you} */}
                <FeaturedRow
                    id="3"
                    title="Offers Near you"
                    description='Find the closest good deal right next you'
                />

            </ScrollView>



        </SafeAreaView>

    )
}

export default HomeScreen