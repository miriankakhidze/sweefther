import { WeatherModel } from "../../models/WeatherModel"

export interface CityListItemProps {
    city: string
    onPress: ({ main, weather, coord }: ForecastPayload) => void
}

interface ForecastPayload {
    coord?: WeatherModel['coord']
    main?: WeatherModel['main']
    weather?: WeatherModel['weather'][0]
}