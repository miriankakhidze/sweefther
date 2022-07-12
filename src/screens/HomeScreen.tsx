import React, { FC, useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { HomeScreenProps } from '../navigation/types'

const locations = [
    {
        id: 1,
        name: 'Location 1',
        description: 'This is the first location',
        latitude: 51.509865,
        longitude: -0.118092,
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

    },
    {
        id: 2,
        name: 'Location 1',
        description: 'This is the first location',
        latitude: 51.509865,
        longitude: -0.118092,
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

    },
    {
        id: 3,
        name: 'Location 1',
        description: 'This is the first location',
        latitude: 51.509865,
        longitude: -0.118092,
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

    }
]
const appKey = 'fbba1ad1ccfca98d4eaff669c07d69bd'
const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {

    // const fetchData = async () => {
    //     const tt = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=41.648128&lon=41.6120832&appid=${appKey}`)
    //     const data = await tt.json()
    //     console.log(data);

    // }
    useEffect(() => {
        // fetchData()
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {locations.map(item => <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Button title="Go to Details" onPress={() => navigation.navigate('Details', { userId: item.id })} />
            </View>)}
            {/* 
            <Button
                title="Go to Details1"
                onPress={() => {
                    navigation.navigate('Details', {
                        userId: 86,
                    })
                }}
            /> */}
        </View>
    )
}

export default HomeScreen