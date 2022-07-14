import { useTheme } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list"
import dayjs from "dayjs";
import React, { FC } from "react"
import { ActivityIndicator, Image, Text, View } from "react-native"
import Card from "../Card";
import { DailyListProps } from "./types";

const DailyList: FC<DailyListProps> = ({ loading, data }) => {
    const { colors } = useTheme();

    return (

        <Card>

            {loading ?
                <ActivityIndicator />
                : <FlashList
                    data={data}
                    contentContainerStyle={{
                        padding: 20,
                    }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                            <View style={{ flex: 2, }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold' }}>{dayjs(item.dt * 1000).format('dddd')}</Text>

                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: colors.primary, fontSize: 12 }}>{item.humidity}%</Text>
                                <Image source={{ uri: `http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png` }} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold' }}>{Math.round(item.temp.day)}°/{Math.round(item.temp.night)}°</Text>

                            </View>
                        </View>}
                    estimatedItemSize={50}
                />
            }
        </Card>

    )
}

export default DailyList