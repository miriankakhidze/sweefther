import { useTheme } from "@react-navigation/native";
import dayjs from "dayjs";
import React, { FC } from "react"
import { FlatList, Image, Text, View } from "react-native"
import { HourlyListProps } from "./types";

const HourlyList: FC<HourlyListProps> = ({ data }) => {
    const { colors } = useTheme();

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) =>
                <View style={{
                    flex: 1,
                    marginHorizontal: 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: colors.text, }}>{dayjs(item.dt * 1000).format('HH:mm')}</Text>
                    <Image source={{ uri: `http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png` }} style={{ width: 50, height: 50 }} />
                    <Text style={{ color: colors.text, fontSize: 15, fontWeight: '800' }}>{Math.round(item.temp)}°</Text>
                    <Text style={{ color: colors.primary, fontSize: 11 }}>{Math.round(item.humidity)}%</Text>
                </View>}
        />
    )
}

export default HourlyList