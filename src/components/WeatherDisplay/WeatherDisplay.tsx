import React from "react";
import { Weather } from '../../constants/types'

interface Props {
    weatherData: Weather
};

const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
    const { temp, temp_max, temp_min, city, humidity, cloud_status, time } = weatherData;

    return (
        <>
            <h1>Today's Weather</h1>
            <div className="flex">
                <div>
                    <h2>{temp}</h2>
                    <div className="flex">
                        {temp_max && <p>H: {temp_max}</p>}
                        {temp_min && <p>L: {temp_min}</p>}
                    </div>
                    <h3>{city}</h3>
                </div>
                <div>
                    <p>{cloud_status}</p>
                    <p>Humidity: {humidity}%</p>
                    <p>{time}</p>
                </div>
            </div>
        </>
    )
}

export default WeatherDisplay;