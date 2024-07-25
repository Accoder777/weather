const changeLocation = document.querySelector('#change_location')
const gradus = document.querySelector('.gradus')
const info = document.querySelector('.info')
const extra_info = document.querySelector('.extra-info')
const content = document.querySelector('.content')
const recent = document.querySelector('.recent')

const now = new Date()
let date = now.toString()

const infotime = date.substring(0,date.lastIndexOf(':'))


const inform = (weather)=>{
//     detail.innerHTML = `
//         <div id="detail" class="details">
//             <h3>${weather.name}, ${weather.sys.country}</h3>
//             <p>${weather.weather[0].main}</p>
//             <div class="grad">
//                 <span>${Math.floor(weather.main.temp)}</span>
//                 <span>&deg;</span>
//             </div>
//         </div>
//    `
//    if(container.classList.contains('d_none'))
//    {
//         container.classList.remove('d_none')
//    }
//    icon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
gradus.innerHTML = `${Math.floor(weather.main.temp)}&deg;`

info.innerHTML = `
    
                <h1 class="Cityname">${weather.name}</h1>
                <p class="citytime">${infotime}</p>
`;

extra_info.innerHTML = `
    <h1>Weather details</h1>
    <table>
        <tr>
            <td>Country</td>
            <td class="tac">${weather.sys.country}</td>
        </tr>
        <tr>
            <td>Humidity</td>
            <td class="tac">${weather.main.humidity}</td>
        </tr>
        <tr>
            <td>wind</td>
            <td class="tac">${Math.floor(weather.wind.speed)}km/s</td>
        </tr>
        <tr>
            <td>Feels like</td>
            <td class="tac">${Math.floor(weather.main.feels_like)}</td>
        </tr>
    </table>
`;

   if(extra_info.classList.contains('dn'))
   {
        extra_info.classList.remove('dn')
        recent.classList.remove('dn')
        content.classList.remove('dn')
   }

}

//getWeather 

const getWeather = async (city)=>{
    const data = await getData(city)
    return data
}

changeLocation.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = changeLocation.city.value.trim();
    changeLocation.reset()
    getWeather(name).then((data)=>inform(data)) 
})