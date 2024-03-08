import moment from 'moment';

import { Weather } from '../constants/types'

const ABSOLUTE_ZERO = 273.15;

export function formatWeather(data: any) {
    const { main, sys, weather, name, ..._ } = data;

    try {
        const formattedData: Weather = {
            temp: Math.round((main.temp - ABSOLUTE_ZERO) * 10) / 10,
            temp_max: Math.round((main.temp_max - ABSOLUTE_ZERO) * 10) / 10,
            temp_min: Math.round((main.temp_min - ABSOLUTE_ZERO) * 10) / 10,
            humidity: main.humidity,
            city: `${name}${sys?.country ? `, ${sys.country}` : ``}`,
            time: moment().format('DD-MM-YYYY hh:mm a'), // Assuming we want current time for User, not current time at Location
            cloud_status: weather?.[0]?.main
        }
        return formattedData
    } catch (e) {
        throw new Error("Insufficient Weather Data") // Only catch if data.main is null/undefined. The rest is optional
    }
}