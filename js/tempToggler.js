import { weatherSubmit } from "./submitButton";

const sliderInput = document.querySelector('.weather_input');
const slider = document.querySelector('.weather_slider');

const temperature = document.querySelector('.weather_temp');
const temperatureFeels = document.querySelector('.weather_temp-feelsLike');

//MATH CALCULATIONS

let tempFahArray = [];
let tempCelArray = [];


slider.addEventListener("click", () => {

    
    if (tempFahArray === undefined || tempFahArray.length === 0){
        return null;
    } else if(!sliderInput.checked && tempFahArray.length > 0) {
        temperature.innerHTML = `${tempCelArray[0]}°C`;
        temperatureFeels.innerHTML = `Feels Like ${tempCelArray[1]}°C`;
    } else if (sliderInput.checked && tempFahArray.length > 0){
        temperature.innerHTML = `${tempFahArray[0]}°F`;
        temperatureFeels.innerHTML = `Feels Like ${tempFahArray[1]}°F`;
    } 
})


export function tempToggler (firstArray) {
    const tempCel = Math.round((firstArray.main.temp - 273.15) * 10) / 10;
    const tempCelFeels = Math.round((firstArray.main.feels_like - 273.15) * 10) / 10;
    const tempFah = Math.round(((firstArray.main.temp - 273.15 )* 1.8 + 32) * 10) / 10;
    const tempFahFeels = Math.round(((firstArray.main.feels_like - 273.15) * 1.8 + 32) * 10) / 10;
    
    if(sliderInput.checked){
        temperature.innerHTML = `${tempCel}°C`;
        temperatureFeels.innerHTML = `Feels like ${tempCelFeels}°C`;
        pushFah(tempFah, tempFahFeels);
        pushCel(tempCel, tempCelFeels);
    } else {
        temperature.innerHTML = `${tempFah}°F`;
        temperatureFeels.innerHTML = `Feels like ${tempFahFeels}°F`;
        pushFah(tempFah, tempFahFeels);
        pushCel(tempCel, tempCelFeels);
    }
}


const pushFah = (tempPrimary, tempSecondary) => {
    if(tempFahArray.length === 0){
        tempFahArray.push(tempPrimary, tempSecondary);
    } else {
        tempFahArray = [];
        tempFahArray.push(tempPrimary, tempSecondary)
    }
}

const pushCel = (tempPrimary, tempSecondary) => {
    if(tempCelArray.length === 0){
        tempCelArray.push(tempPrimary, tempSecondary);
    } else {
        tempCelArray = [];
        tempCelArray.push(tempPrimary, tempSecondary)
    }
}