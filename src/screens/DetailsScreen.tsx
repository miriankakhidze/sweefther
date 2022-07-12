import React, { FC } from 'react'
import { View, Text, Button } from 'react-native'
import { DetailsScreenProps } from '../navigation/types';

const DetailsScreen: FC<DetailsScreenProps> = ({ route, navigation }) => {
    const { userId } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <View>
                <Text>Hours: {userId}</Text>
            </View>
            <View>
                <Text>Days</Text>
            </View>
            {/* <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}

        </View>
    )
}

export default DetailsScreen