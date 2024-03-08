import { formatWeather } from "./";

describe("formatWeather", () => {
    const mockData: any = {
        main: {
            temp: 100,
            temp_max: 100,
            temp_min: 100,
            humidity: 100,
        },
        sys: {
            country: "country"
        },
        name: "name",
        weather: [{
            main: "cloudy"
        }]
    }

    const mockResults = {
        temp: -173.1,
        temp_max: -173.1,
        temp_min: -173.1,
        humidity: 100,
        city: "name, country",
        cloud_status: "cloudy",
    }

    it('should return correctly formatted data if all required fields are present', () => {
        expect(formatWeather(mockData)).toEqual(expect.objectContaining(mockResults));
    });

    it('should throw Error when data.main is null', () => {
        expect(() => formatWeather({
            ...mockData,
            main: null,
        })).toThrow("Insufficient Weather Data");
    });

    it('should return correct city if country not present', () => {
        expect(formatWeather({
            ...mockData,
            sys: null,
        })).toEqual(expect.objectContaining({
            ...mockResults,
            city: "name"
        }));
    });
});