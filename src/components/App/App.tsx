import React, { useState, useEffect } from "react";

import Search from '../Search/Search';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

import { getWeather } from "../../services/OpenWeatherMap";
import { Weather } from '../../constants/types';
import { formatWeather } from "../../util";

import './App.scss';

const App: React.FC = () => {
	const [location, setLocation] = useState("")
	const [weatherData, setWeatherData] = useState<Weather>() // Opted to use useState and simple prop drilling as application is not deeply nested

	useEffect(() => {
		getWeather("Singapore")
			.then(data => formatWeather(data))
			.then(formattedData => setWeatherData(formattedData))
			.catch(error => {
				console.error(error)
				return error
			})
	}, []);

	const handleUpdate = (location: string) => {
		setLocation(location)
	}

	const handleClick = () => {
		if (!location) return;

		getWeather(location)
			.then(data => formatWeather(data))
			.then(formattedData => setWeatherData(formattedData))
			.catch(error => {
				console.error(error)
				return error
			})
	}

	return (
		<div>
			<Search location={location} handleUpdate={handleUpdate} handleClick={handleClick} />
			{weatherData && <WeatherDisplay weatherData={weatherData} />}
		</div>
	);
}

export default App;
