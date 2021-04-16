const form = document.querySelector('#getForm');
const city = document.querySelector('#city');

form.addEventListener('submit', e => {
    e.preventDefault();

    weatherBalloon(city.value);
});

function weatherBalloon(city) {
    let key = '56c18047f3f006dcdda16424c059861f';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city+ ',CA&appid=' + key)  
    .then(resp => resp.json()) // Convert data to json
    .then(data => {
      console.log(data);
      drawWeather(data);
    })
    .catch(() => {
      // catch any errors
    });
  }

function drawWeather(d) {
	let celcius = Math.round(parseFloat(d.main.temp)-273.15);
	// let fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  let description = d.weather[0].description; 
	
	document.querySelector('#description').innerHTML = description;
	document.querySelector('#temp').innerHTML = celcius + '&deg;';
	document.querySelector('#location').innerHTML = d.name;

  if(description.indexOf('rain') > 0) {
  	document.body.className = 'rainy';
  } else if(description.indexOf('cloud') > 0) {
  	document.body.className = 'cloudy';
  } else if(description.indexOf('sunny') > 0) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
