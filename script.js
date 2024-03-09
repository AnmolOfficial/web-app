const container =document.querySelector('.container' ) ;
const search = document.querySelector('.search_box button')
const weatherbox = document.querySelector('.weather-box') ;
const weatherdetails = document.querySelector('.weather-details');

search.addEventListener('click',() => {
    const APIkey ='caa42f1149bd5ada5a3c5fed75c1e274';
    const city = document.querySelector('.search_box input').value;
    if (city==' ')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {
    
    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description ');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span ');

    switch(json.weather[0].main) {
        case 'Clouds':
            image.src = 'cloud.png';
            break;
        case 'Rain':
                image.src = 'rain.png';
                break;
        case 'Snow':
                image.src = 'snow.png';
                break;   
        case 'Mist':
                image.src = 'mist.png';
                break;
        case 'Haze':
                image.src = 'mist.png';
                break;
        default:
            image.src='clear.png';
    }

    temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


});
});