const OPENWEATHERMAP_API_URL = 'https://api.openweathermap.org'

export function getWeather(location: string) {
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY || '';

    return fetch(`${OPENWEATHERMAP_API_URL}/data/2.5/weather?q=${location}&appid=${API_KEY}`)
        .then(response => response.json())
        .catch((Error) => {
            console.error(Error);
            return Error;
        })
}