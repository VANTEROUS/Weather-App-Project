

const wind =  document.querySelector('.weather_wind')
const windGust =  document.querySelector('.weather_wind-gust')
const windSpeed =  document.querySelector('.weather_wind-speed')

export async function windDirection(data){
    const degree = data.wind.deg

    windGust.innerHTML = `Gusts: ${data.wind.gust}mph`;
    windSpeed.innerHTML = `Speed: ${data.wind.speed}mph`;

    if((degree >= 337.5 && degree <= 360) && (degree >= 0 && degree <= 22.5)){

        wind.innerHTML = `Direction: North`;
    } else if ((degree >= 22.6 && degree <= 67.5)){

        wind.innerHTML = `Direction: North-East`;
    } else if ((degree >= 67.6 && degree <= 112.5)) {

        wind.innerHTML = `Direction: East`;
    } else if ((degree >= 112.6 && degree <= 157.5)){

        wind.innerHTML = `Direction: South-East`;
    } else if ((degree >= 157.6 && degree <= 202.5)){

        wind.innerHTML = `Direction: South`;
    } else if ((degree >= 202.6 && degree <= 247.5)){

        wind.innerHTML = `Direction: South-West`;
    } else if ((degree >= 247.6 && degree <= 292.5)){

        wind.innerHTML = `Direction: West`;
    } else if ((degree >= 292.6 && degree <= 337.4)){

        wind.innerHTML = `Direction: North-West`;
    }
}