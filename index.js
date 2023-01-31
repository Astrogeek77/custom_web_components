import LiveTimer from '../custom_web_components/date-time components/liveTimer';
// const LiveTimer = require('./date-time components/liveTimer');
window.customElements.define('live-timer', LiveTimer);

import ExpandableList from './expandable list/expandableList';
// const ExpandableList = require('./expandable list/expandableList');
window.customElements.define('expandable-list', ExpandableList, {
  extends: 'ul',
});

import UserCard from './infocard/infoCard';
// const UserCard = require('./infocard/infoCard');
window.customElements.define('user-card', UserCard);

import ProgressBar from './progress bar/progressBar';
// const ProgressBar = require('./progress bar/progressBar');
window.customElements.define('progress-bar', ProgressBar);
