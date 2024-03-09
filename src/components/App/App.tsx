import React, { useState, useEffect } from "react";

import Search from '../Search/Search';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import SearchHistoryList from '../SearchHistoryList/SearchHistoryList';

import { getWeather } from "../../services/OpenWeatherMap";
import { Weather, History } from '../../constants/types';
import { formatWeather } from "../../util";

import './App.scss';

const App: React.FC = () => {
	const [location, setLocation] = useState("")
	const [searchHistory, setSearchHistory] = useState<History[]>([]);
	const [weatherData, setWeatherData] = useState<Weather>() // Opted to use useState and simple prop drilling as application is not deeply nested

	const handleSearch = (searchLocation: string) => {
		if (!searchLocation) return;

		getWeather(searchLocation)
			.then(data => formatWeather(data))
			.then(formattedData => setWeatherData(formattedData)) // For Searching we do not push into history
			.catch(error => {
				console.error(error)
				return error
			})
	}

	useEffect(() => {
		handleSearch("singapore") // Placeholder location on mount
	}, []);

	const handleUpdate = (location: string) => {
		setLocation(location)
	}

	const handleClick = () => {
		if (!location) return;

		getWeather(location)
			.then(data => formatWeather(data))
			.then(formattedData => {
				const history: History = {
					city: formattedData.city,
					time: formattedData.time
				}

				setSearchHistory((prevState) => [history, ...prevState])
				setWeatherData(formattedData)
			})
			.catch(error => {
				console.error(error)
				return error
			})
	}

	const handleDelete = (index: number) => {
		setSearchHistory((prevState) => prevState.filter((_, i) => i !== index))
	}

	const time = new Date().getHours();

	return (
		<div className={`main ${time > 18 ? 'main--dark' : ''}`}>
			<div className="main__container">
				<Search location={location} handleUpdate={handleUpdate} handleClick={handleClick} />
				{weatherData && <WeatherDisplay weatherData={weatherData} />}
				<SearchHistoryList
					searchHistory={searchHistory}
					handleDelete={handleDelete}
					handleSearch={handleSearch}
				/>
			</div>
		</div>
	);
}

export default App;
