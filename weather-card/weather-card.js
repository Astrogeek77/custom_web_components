const template3 = document.createElement('template');

template3.innerHTML = `
  <div>
    Weather Card
  </div>
`;

class WeatherCard extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template3.content.cloneNode(true));
  }

  connectedCallback() {
    // var xmlHttp = new XMLHttpRequest();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=b86d21440d8c9a110912a2eb0845abb4`;
    // xmlHttp.open('GET', url, false);
    // xmlHttp.send(null);
    // console.log(xmlHttp.responseText);
    fetch(url)
      .then((response) => response.json())
      .then((responseObj) => {
        console.log(responseObj);
        this.$card = this._shadowRoot.querySelector('div');
        // let responseObj = JSON.parse(xmlHttp.responseText);

        let $icon = document.createElement('img');
        $icon.src =
          'https://openweathermap.org/img/wn/' +
          responseObj.weather[0].icon +
          '@2x.png';
        this._shadowRoot.appendChild($icon);

        let $desc = document.createElement('div');
        console.log(responseObj.weather[0].icon);
        $desc.innerHTML = `Description: ${responseObj.weather[0].description}`;
        this._shadowRoot.appendChild($desc);

        let $townName = document.createElement('div');
        $townName.innerHTML = `Town: ${responseObj.name}`;
        this._shadowRoot.appendChild($townName);

        let $humidity = document.createElement('div');
        $humidity.innerHTML = `Humidity: ${responseObj.main.humidity} %`;
        this._shadowRoot.appendChild($humidity);

        let $temperature = document.createElement('div');
        $temperature.innerHTML = `Temp: ${parseInt(
          responseObj.main.temp - 273
        )} &deg;C`;
        this._shadowRoot.appendChild($temperature);
      })
      .catch((err) => console.error(err));
  }

  get longitude() {
    return this.getAttribute('longitude');
  }

  get latitude() {
    return this.getAttribute('latitude');
  }
}

window.customElements.define('weather-card', WeatherCard);
