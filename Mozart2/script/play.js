var audio = new Audio('');
function playMusic() {
    audio.play();
    document.body.style.backgroundColor = '#ffcc00';
}
function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    document.body.style.backgroundColor = '#f2f2f2'
}