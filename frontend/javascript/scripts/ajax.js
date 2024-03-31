(function () {
  let loaderTimeout = null;
  const loader = document.querySelector('[data-loading]');

  function processResponse(res) {
    hideLoader();
    return res.json();
  }

  function getWeatherData(city = 'Brasov', country = 'RO') {
    showLoader();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8feb7eed04a11a56e7ac15279797d21d`
    )
      .then(processResponse, console.warn)
      .then(handleResponse);
  }

  function getWeatherByLocation(lat, lon) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8feb7eed04a11a56e7ac15279797d21d`
    )
      .then(processResponse, console.warn)
      .then(handleResponse);
  }

  function showLoader() {
    loaderTimeout = setTimeout(() => loader.classList.remove('hidden'), 300);
  }

  function hideLoader() {
    clearTimeout(loaderTimeout);
    loader.classList.add('hidden');
  }

  showLoader();
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByLocation(latitude, longitude);
    },
    () => {
      getWeatherData();
    }
  );

  function handleResponse(data) {
    console.log(data);
    document
      .querySelector('[data-weather-container]')
      .classList.remove('hidden');
    const elems = document.querySelectorAll('[data-weather]');
    const icon = document.querySelector('[data-weather-icon]');
    const cityOutput = document.querySelector('[data-weather-city]');
    const descOutput = document.querySelector('[data-weather-desc]');

    cityOutput.textContent = data.name;
    descOutput.textContent = data.weather[0].description;

    const text = document.createElement('span');
    text.innerHTML = '&deg;C';

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;

    for (const elem of elems) {
      const value = elem.dataset.weather;
      elem.textContent = kelvinToCelsius(data.main[value]);
      elem.append(text.cloneNode(true));
    }
  }

  function kelvinToCelsius(degK) {
    return (degK - 273.15).toFixed(1);
  }

  document
    .querySelector('[data-weather-form]')
    .addEventListener('submit', handleWeatherFormSubmit);

  function handleWeatherFormSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    getWeatherData(data.get('city'), data.get('country'));
  }
})();
