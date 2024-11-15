// Variables to store the current video player and playback time
let videoPlayer = document.getElementById('videoPlayer');
let textBox = document.getElementById('textBox');

// Variables to remember the playback time of each video
let video01Time = 0;
let video02Time = 0;

// Flag to check which video is currently playing
let isVideo1 = true;

// Flag to track if the sound has been unmuted
let isMuted = true;

// Function to switch between videos
function switchVideo() {
    // If it's the first click (muted to unmuted)
    if (isMuted) {
        videoPlayer.muted = false;  // Unmute the video
        isMuted = false;  // Mark that the sound has been unmuted
    }

    // If the first video is playing, save its time and switch to video 2
    if (isVideo1) {
        video01Time = videoPlayer.currentTime;  // Save current time of video 1
        videoPlayer.src = "videos/video02.mp4"; // Switch to video 2
        videoPlayer.load();
        videoPlayer.currentTime = video02Time; // Start from where we left off in video 2
        videoPlayer.play();  // Start playing video 2 immediately
    } else {
        video02Time = videoPlayer.currentTime;  // Save current time of video 2
        videoPlayer.src = "videos/video01.mp4"; // Switch to video 1
        videoPlayer.load();
        videoPlayer.currentTime = video01Time; // Start from where we left off in video 1
        videoPlayer.play();  // Start playing video 1 immediately
    }

    // Toggle flag to track which video is currently playing
    isVideo1 = !isVideo1;
}

// Event listener to automatically remember playback time when the video ends
videoPlayer.addEventListener('ended', function () {
    if (isVideo1) {
        video01Time = videoPlayer.currentTime; // Save playback time when video 1 ends
    } else {
        video02Time = videoPlayer.currentTime; // Save playback time when video 2 ends
    }
});
