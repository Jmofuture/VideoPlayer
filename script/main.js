const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pausa = document.querySelector('#pausa');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$play.addEventListener('click', handlePlay);
$pausa.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInpunt)


function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pausa.hidden = false;
}

function handlePause() {
    $video.pause()
    $play.hidden = false;
    $pausa.hidden = true;
}

function handleBackward() {
    $video.currentTime -= 10

}

function handleForward() {
    $video.currentTime += 10
}


function handleloaded() {
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

function handleInpunt() {
    $video.currentTime = $progress.value
}