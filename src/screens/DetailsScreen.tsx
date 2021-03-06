import { useTheme } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Image, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import DailyList from '../components/DailyList';
import HourlyList from '../components/HourlyList';
import { ForecastModel } from '../models/ForecastModel';
import { DetailsScreenProps } from '../navigation/types';
import apiService from '../services/apiService';

const DetailsScreen: FC<DetailsScreenProps> = ({ route }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = useState<boolean>(false)
    const { colors } = useTheme();

    const [data, setData] = useState<ForecastModel>()

    const { coord, main, weather, name } = route.params;

    const fetchData = async () => {
        setLoading(true)
        const res = await apiService.get('/onecall', {
            params: {
                ...coord,
                units: 'metric'
            }
        })

        if (res.data) setData(res.data)
        setLoading(false)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchData()
        setRefreshing(false)
    }, []);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >
            <Card>
                <View>
                    <Text>{name}</Text>
                </View>

                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={{ uri: `http://openweathermap.org/img/wn/${weather?.icon}@2x.png` }} style={styles.icon} />
                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{Math.round(main?.temp ?? 0)}??</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: colors.primary, fontSize: 11 }}>{weather?.description}</Text>
                        <Text style={{ color: colors.primary, fontSize: 11 }}>{Math.round(main?.temp_min ?? 0)}??/{Math.round(main?.temp_max ?? 0)}??</Text>
                        <Text style={{ color: colors.primary, fontSize: 11 }}>feels like {Math.round(main?.feels_like ?? 0)}??</Text>

                    </View>
                </View>

                <HourlyList data={data?.hourly} />
            </Card>

            <DailyList loading={loading} data={data?.daily} />
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    icon: { width: 50, height: 50 }
})

export default DetailsScreen