import throttle from 'lodash.throttle';
const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const timeUpdater = data => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds));
};

const lastTime = localStorage.getItem('videoplayer-current-time');
const parsedLastTime = JSON.parse(lastTime);

player.on('timeupdate', _.throttle(timeUpdater, [wait = 1000]));

player
  .setCurrentTime(parsedLastTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
