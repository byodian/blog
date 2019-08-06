window.addEventListener('load', () => {
  let long;
  let lat;

  const temperatureDescription = document.querySelector('.temperature-description');
  const temperatureDegree = document.querySelector('.temperature-degree');
  const locationTimezone = document.querySelector('.location-timezone');
  const temperatureSection = document.querySelector('.degree-section');
  const temperatureSpan = document.querySelector('.degree-section span');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/0d2016e8ec86d97d714efe0da76f9328/${lat},${long}?lang=zh`;
      
      fetch(api)
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data);
          const {temperature, summary, icon} = data.currently;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

          // 华氏温度转化为摄氏度
          let Celsius = (temperature - 32) * 5 / 9;
          //Set Icon
          setIcons(icon, document.querySelector('.icon'));

          // 华氏温度与摄氏温度
          temperatureSection.addEventListener('click', () => {
            if (temperatureSpan.textContent === '℉') {
              temperatureSpan.textContent = '℃';
              temperatureDegree.textContent = Math.floor(Celsius);
            } else {
              temperatureSpan.textContent = '℉';  
              temperatureDegree.textContent = temperature;
            }
          });

        })  
      })
    }

    function setIcons(icon, iconId) {
      const skycons = new Skycons({'color': 'white'});
      const currentIcon = icon.replace(/-/g, '_').toUpperCase();
      skycons.play();
      return skycons.set(iconId, currentIcon);
    }
}); 

