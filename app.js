const forecast = require('./utils/forecast.js')

const weather = (city) => {
    forecast(city, (error, data) => {
        if (error) {
            console.log('City: ' + city)
            console.log('Error: ' + error)
            console.log('')
        } else {
            console.log('City: ' + data.city)
            console.log('Country: ' + data.country)
            console.log('Weather: ' + data.weather)
            console.log('Temperature: ' + data.temperature)
            console.log('Feels like temperature: ' + data.feelslike)
            console.log('')
        }
    })
}

weather('Sarajevo')
weather('New York')
weather('London')
weather('Istanbul')

