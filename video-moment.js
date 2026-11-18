const videoMoment=document.getElementById('video-moment');
const loveVideo=document.getElementById('love-video');
const videoFrame=document.querySelector('.video-frame');
loveVideo.addEventListener('play',()=>videoFrame.classList.add('is-playing'));
loveVideo.addEventListener('pause',()=>videoFrame.classList.remove('is-playing'));
document.getElementById('heart-shower').addEventListener('click',()=>{
  burst(75);
  document.getElementById('video-status').textContent='A whole shower of hearts for Yanny ♡';
  videoMoment.classList.remove('is-celebrating');
  void videoMoment.offsetWidth;
  videoMoment.classList.add('is-celebrating');
});
