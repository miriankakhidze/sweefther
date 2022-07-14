import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { WeatherModel } from "../models/WeatherModel";

export type RootStackParamList = {
    Home: undefined;
    Details: {
        name: string
        coord?: WeatherModel['coord']
        main?: WeatherModel['main']
        weather?: WeatherModel['weather'][0]
    };
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>; 