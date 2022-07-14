import { useTheme } from "@react-navigation/native"
import React, { FC, useCallback, useEffect, useState } from "react"
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { WeatherModel } from "../../models/WeatherModel"
import apiService from "../../services/apiService"
import { CityListItemProps } from "./types"

const CityListItem: FC<CityListItemProps> = ({ city, onPress }) => {
    const [data, setData] = useState<WeatherModel>()
    const { colors } = useTheme();
    const getForecast = useCallback(async () => {
        try {
            const res = await apiService.get('/weather', {
                params: {
                    q: city,
                    units: 'metric'
                }
            })
            if (res.data) setData(res.data)
        } catch (error) {

        }

    }, [])

    useEffect(() => {
        getForecast()
    }, [])

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.card }]}
            onPress={() => onPress({ coord: data?.coord, main: data?.main, weather: data?.weather[0] })} >
            <View style={styles.itemContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png` }}
                        style={styles.icon} />
                    <Text style={{ color: colors.text }}>{data?.name}</Text>
                </View>
                <Text style={{ color: colors.text }}>{Math.round(data?.main.temp ?? 0)}°</Text>
            </View>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: Dimensions.get('screen').width / 34,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginHorizontal: 5,
        marginVertical: 8
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    icon: { width: 50, height: 50 }
})

export default CityListItem