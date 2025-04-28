
export async function getWeatherData(city) {
    const response = await fetch(`https://weather-app-project-zkex.onrender.com/weather?city=${city}`);

    return await response.json();
}

