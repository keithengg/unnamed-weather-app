import React from "react";
import { Weather } from '../../constants/types'
import './WeatherDisplay.scss';

const NightImage = require('../../assets/cloud.png');
const SunImage = require('../../assets/sun.png');

interface Props {
    weatherData: Weather
};

const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
    const { temp, temp_max, temp_min, city, humidity, cloud_status, time } = weatherData;

    const isDay = new Date().getHours() <= 17; // Check if it's before 5:00 PM

    return (
        <div className="relative">
            <h1>Today's Weather</h1>
            <div className="weather-display__container">
                <div className="weather-display__left-container">
                    <h2 className="weather-display__temp">{temp}&deg;</h2>
                    <div className="flex gap-x-2">
                        {temp_max && <p className="weather-display__temp-max">H: {temp_max}&deg;</p>}
                        {temp_min && <p className="weather-display__temp-min">L: {temp_min}&deg;</p>}
                    </div>
                    <h3 className="weather-display__city">{city}</h3>
                </div>
                <div className="weather-display__right-container">
                    <p className="weather-display__cloud">{cloud_status}</p>
                    <p className="weather-display__humidity">Humidity: {humidity}%</p>
                    <p className="weather-display__time">{time}</p>
                </div>
            </div>
            <img
                src={isDay ? SunImage : NightImage}
                className="weather-display__image"
                alt={isDay ? 'Graphical Image of a sun behind a cloud' : 'Graphical Image of a cloud'}
            />
        </div>
    )
}

export default WeatherDisplay;