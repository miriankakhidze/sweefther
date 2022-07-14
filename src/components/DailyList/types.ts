import { ForecastModel } from "../../models/ForecastModel"

export interface DailyListProps {
    loading: boolean
    data?: ForecastModel['daily']
}