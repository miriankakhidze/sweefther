import { FlashList } from '@shopify/flash-list'
import React, { FC, useId } from 'react'
import { View } from 'react-native'
import CityListItem from '../components/CityListItem/CityListItem'
import { HomeScreenProps } from '../navigation/types'

const locations = [
    {
        id: 1,
        city: 'Batumi',
    },
    {
        id: 2,
        city: 'Tbilisi',
    },
    {
        id: 3,
        city: 'Kutaisi',
    }
]

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
    const id = useId()

    return (
        <View style={{ flex: 1, paddingVertical: 15 }}>

            <FlashList
                data={locations}
                renderItem={({ item }) => <CityListItem
                    key={`${id}-${item.id}`}
                    {...{
                        ...item,
                        onPress: (paylopad) => navigation.navigate('Details', {
                            name: item.city,
                            ...paylopad
                        })
                    }} />
                }
                estimatedItemSize={50}
            />
        </View>
    )
}

export default HomeScreen