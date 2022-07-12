import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: { userId: number };
    // Feed: { sort: 'latest' | 'top' } | undefined;
};


export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>; 