import { weatherSubmit } from "./submitButton";
import { tempToggler } from "./tempToggler";
import { windDirection } from "./windDirection";
import { getTime } from "./getTime";

export function uiUpdater (result) {
    
    const city =  document.querySelector('.weather_city')
    const sky =  document.querySelector('.weather_sky')

    const humidity =  document.querySelector('.weather_humidity')

    const firstArray = result.list[0];

    city.innerHTML = `${result.city.name}, ${result.city.country}`;

    getTime(firstArray);

    tempToggler(firstArray);

    sky.innerHTML = `${firstArray.weather[0].description}`

    windDirection(firstArray);

    humidity.innerHTML = `Humidity: ${firstArray.main.humidity}%`;


    console.log(result)
    
}