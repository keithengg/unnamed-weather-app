import React from "react";
import { render } from "@testing-library/react";
import { Weather } from '../../constants/types';
import WeatherDisplay from "./WeatherDisplay";

describe("<WeatherDisplay />", () => {
    const mockWeatherData: Weather = {
        temp: 100,
        temp_max: 100,
        temp_min: 100,
        humidity: 100,
        city: "name, country",
        cloud_status: "cloudy",
        time: ""
    }

    it('should render correctly and match snapshot', () => {
        const { container } = render(<WeatherDisplay weatherData={mockWeatherData} />)
        expect(container).toMatchSnapshot()
    });
});