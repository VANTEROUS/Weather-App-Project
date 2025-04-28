
export async function getWeatherData(city) {
    const response = await fetch(`http://localhost:3000/weather?city=${city}`);

    return await response.json();
}

