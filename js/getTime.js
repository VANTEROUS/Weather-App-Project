
const time = document.querySelector('.weather_time');
const date = document.querySelector('.weather_date');

export async function getTime(data) {

    const totalTime = data.dt
    const dateObject = new Date(totalTime * 1000);

    const currentTime = await dateObject.toISOString().split('T')[1].slice(0,5);
    const currentDate = await dateObject.toISOString().split('T')[0];

    const [year, month, day] = currentDate.split('-');

    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const newTime = `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`

    if(currentTime.slice(0,2) > 12){
        newTime = (currentTime.slice(0,2) - 12)
        time.innerHTML = `Recorded Time: ${newTime}:00${timeOfDay(currentTime)}`;
    } else if(currentTime.slice(0,2) === 12 || currentTime.slice(0,2) === '00'){
        newTime = 12;

        time.innerHTML = `Forecasted Time: ${newTime}:00${timeOfDay(currentTime)}`;
    } else {
        time.innerHTML = `Forecasted Time: ${currentTime}${timeOfDay(currentTime)}`;
    }

    date.innerHTML = newTime;
}

const timeOfDay = (time) => {

    const adjTime = time.slice(0, 2)

    if(adjTime < 12){
        return 'AM';
    } else {
        return 'PM';
    }

}