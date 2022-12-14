import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((e) => {
    console.log(e);
    localStorage.setItem('videoplayer-current-time', e.seconds)
}, 1000));

const secondsPlayed = localStorage.getItem('videoplayer-current-time');

if (secondsPlayed) {
    player.setCurrentTime(secondsPlayed)
}

