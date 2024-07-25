// console.log('hello world')
const key = 'e433420ce52781a2a8fd1796a020c18c'


const getData = async(city)=>{
    const api1 = 'https://api.openweathermap.org/data/2.5/weather'
    const api2 = `?q=${city}&units=metric&appid=${key}`
    const req = await fetch(api1+api2)
    const data = await req.json()
    return data
}

// getData('nurota').then((data)=>console.log(data))