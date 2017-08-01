'use strict';

function makePlayer(element, link) {
    element.innerHTML = '<video src="' + link + '" controls></video><br><button id="stop">Stop</button>';
    var video = document.getElementsByTagName('VIDEO')[0];
    var stop = document.getElementById('stop');
    video.addEventListener('play', play);
    video.addEventListener('pause', pause);
    stop.addEventListener('click', stopVideo);
    
    function play() {
        console.log('Video started');
    }
 
    function pause() {
        var minutes = Math.floor(video.currentTime / 60);
        var seconds = Math.floor(video.currentTime - minutes * 60);
        console.log('Paused. Already played ' + minutes + ' min ' + seconds + ' sec');
    }
 
    function stopVideo() {
        var minutes = Math.floor(video.currentTime / 60);
        var seconds = Math.floor(video.currentTime - minutes * 60);
        console.log('Stopped. Played ' + minutes + ' min ' + seconds + ' sec');
        video.currentTime = 0;
        video.pause();
    }   
}

var videoElement = document.getElementById('video');
var videoLink = 'http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v';

makePlayer(videoElement, videoLink);