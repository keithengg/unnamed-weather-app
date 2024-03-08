import React, { useState } from "react";
import Search from '../Search/Search';
import { getWeather } from "../../services/OpenWeatherMap";

import './App.scss';

const App: React.FC = () => {
	const [location, setLocation] = useState("")
	const [_, setWeatherData] = useState() // Opted to use useState and simple prop drilling as application is not deeply nested

	const handleUpdate = (location: string) => {
		setLocation(location)
	}

	const handleClick = () => {
		if (!location) return;

		getWeather(location)
			.then(data => setWeatherData(data))
			.catch(error => {
				console.error(error)
				return error
			})
	}

	return (
		<div>
			<Search location={location} handleUpdate={handleUpdate} handleClick={handleClick} />
		</div>
	);
}

export default App;
