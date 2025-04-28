import { getWeatherData } from "./api";
import { uiUpdater } from "./homepage";


const submitButton = document.querySelector('.weather_button');
const displayBody = document.querySelector('.weather_body');

export function weatherSubmit () {
    return submitButton.addEventListener("click", async function weatherSubmit(){
        
        try {
            const searchBarResult = document.querySelector('.weather_searchBar').value;
    
            const data = await getWeatherData(searchBarResult);
            
            const uiData = await uiUpdater(data);

            // return await data.json();
            displayBody.classList.remove('weather_hidden');
            displayBody.classList.add('weather_show');

        } catch(error) {
            console.log(error);
        }
    });
}