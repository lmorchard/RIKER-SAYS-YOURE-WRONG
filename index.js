var clips = [];
for (let idx = 1; idx < 43; idx++) {
  clips.push((''+idx).padStart(3, '0'));
}

var contentTypes = [
  ['mp3', 'audio/mpeg'],
];

// Load the clips...
var clipsEl = document.getElementById('clips');

clips.forEach(function (name) {

  var audioEl = document.createElement('audio');
  audioEl.setAttribute('id', 'clip-' + name);
  audioEl.setAttribute('preload', 'auto');
  audioEl.src = './clips/' + name + '.mp3';
  audioEl.mozAudioChannelType = 'content';

  clipsEl.appendChild(audioEl);

});

var playButtonEl = document.getElementById('play');
playButtonEl.addEventListener('click', function () {

  var allClips = document.querySelectorAll('#clips audio');
  for (var idx = 0; idx < allClips.length; idx++) {
    allClips[idx].pause();
  }

  var name = clips[Math.floor(Math.random() * clips.length)];
  var clipEl = document.getElementById('clip-' + name);

  if (window.chrome) {
    clipEl.load();
  } else {
    clipEl.currentTime = 0;
  }

  clipEl.play();
  return false;

});

var helpButtonEl = document.getElementById('help');
helpButtonEl.addEventListener('click', function () {
  document.body.classList.toggle('help');
});
