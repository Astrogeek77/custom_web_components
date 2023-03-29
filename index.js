// import LiveTimer from '../custom_web_components/date-time components/liveTimer';
// // const LiveTimer = require('./date-time components/liveTimer');
// window.customElements.define('live-timer', LiveTimer);

// import ExpandableList from './expandable list/expandableList';
// // const ExpandableList = require('./expandable list/expandableList');
// window.customElements.define('expandable-list', ExpandableList, {
//   extends: 'ul',
// });

// import UserCard from './infocard/infoCard';
// // const UserCard = require('./infocard/infoCard');
// window.customElements.define('user-card', UserCard);

// import ProgressBar from './progress bar/progressBar';
// // const ProgressBar = require('./progress bar/progressBar');
// window.customElements.define('progress-bar', ProgressBar);

const componentSelect = document.querySelector('#component-select')
const liveTimerComponent = document.querySelector('live-timer')
const expandableListComponent = document.querySelector('ul')
const progressBarComponent = document.querySelector('.progress-div')
const userCardComponent1 = document.querySelector('.card-container')
const userCardComponent2 = document.querySelector('.app')
const weatherCardComponent = document.querySelector('.weather-div')
const parallaxDepthCardComponent = document.querySelector('.parallax_container')

liveTimerComponent.style.display = 'none'
expandableListComponent.style.display = 'none'
userCardComponent1.style.display = 'none'
userCardComponent2.style.display = 'none'
weatherCardComponent.style.display = 'none'
progressBarComponent.style.display = 'none'
parallaxDepthCardComponent.style.display = 'none'

componentSelect.addEventListener('change', () => {
  let selectedValue = componentSelect.value
  console.log(selectedValue)

  if (selectedValue === 'progress-bar') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'none'
    userCardComponent1.style.display = 'none'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'flex'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'live-timer') {
    liveTimerComponent.style.display = 'flex'
    expandableListComponent.style.display = 'none'
    userCardComponent1.style.display = 'none'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'user-card-1') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'none'
    userCardComponent1.style.display = 'flex'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'user-card-2') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'none'
    userCardComponent2.style.display = 'flex'
    userCardComponent1.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'weather-card') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'none'
    userCardComponent1.style.display = 'none'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'flex'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'expandable-list') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'block'
    userCardComponent1.style.display = 'none'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'none'
  } else if (selectedValue === 'parallax-depth-cards') {
    liveTimerComponent.style.display = 'none'
    expandableListComponent.style.display = 'none'
    userCardComponent1.style.display = 'none'
    userCardComponent2.style.display = 'none'
    weatherCardComponent.style.display = 'none'
    progressBarComponent.style.display = 'none'
    parallaxDepthCardComponent.style.display = 'block'
  }
})
