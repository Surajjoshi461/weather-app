const url='https://api.weatherapi.com/v1/current.json'
const apiKey= '4fd187ee1f404a6784393645252201'

const cityName = document.getElementById('city-input');
const submitButton = document.getElementById('city-input-btn');

async function getWeatherData(cityName){
   try{ 
        const weatherDetail= await fetch(`${url}?key=${apiKey}&q=${cityName}`);
        console.log(weatherDetail?.status);
        if(weatherDetail.status==200)
            return weatherDetail.json()
        else return alert('City not found. Please enter valid city')

    }catch(error) {
        alert('Some thing went wrong ...!')
    }
}

function sentWeatherDetailToUi(weatherDetail){
document.getElementById('city-name').innerHTML = `City name: ${weatherDetail.location.name}`;
document.getElementById('date').innerHTML = `Date: ${weatherDetail.location.localtime}`;
document.getElementById('temperature').innerHTML = `Temperature: ${weatherDetail.current.temp_c}`;
document.getElementById('humidity').innerHTML = `Humidity: ${weatherDetail.current.humidity}%`;
document.getElementById('description').innerHTML = `Day: ${weatherDetail.current.condition.text}`;
document.getElementById('wind-speed').innerHTML = `Wind speed: ${weatherDetail.current.wind_mph}`;
}

submitButton.addEventListener("click", async()=>{
    const weatherDetail = await getWeatherData(cityName.value);
    console.log('sd = >',weatherDetail?.location?.name);
    sentWeatherDetailToUi(weatherDetail);

})