document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const audioPlayer = document.getElementById('audio-player');
    const albumArt = document.getElementById('album-art');
    const songTitle = document.getElementById('song-title');
    const songArtist = document.getElementById('song-artist');
    const songAlbum = document.getElementById('song-album');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.querySelector('.progress-container');
    const currentTimeSpan = document.getElementById('current-time');
    const durationSpan = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume-slider');
    const playlistUl = document.getElementById('playlist');

    // Playlist array
    const playlist = [
        {
            title: 'Chill Lo-Fi Beat',
            artist: 'Prod. by [Your Name]',
            album: 'Relaxation Mix',
            src: 'audio/song1.mpeg',
            image: 'images/album1.webp' // Optional: Custom album art for this song
        },
        {
            title: 'Upbeat Indie Pop',
            artist: 'The Groovy Band',
            album: 'Summer Vibes',
            src: 'audio/song2.mpeg',
            image: 'images/album2.jpg'
        },
        {
            title: 'Acoustic Serenade',
            artist: 'Solo Guitarist',
            album: 'Peaceful Moments',
            src: 'audio/song3.mpeg',
            image: 'images/album3.jpg'
        }
        // Add more songs here
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    // Function to load a song
    function loadSong(songIndex) {
        const song = playlist[songIndex];
        audioPlayer.src = song.src;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        songAlbum.textContent = song.album;
        albumArt.src = song.image || 'images/default-album2.jpg'; // Use song-specific image or default

        // Reset progress bar
        progressBar.style.width = '0%';
        currentTimeSpan.textContent = '0:00';

        // Update active class in playlist
        updatePlaylistHighlight(songIndex);
    }

    // Function to play song
    function playSong() {
        isPlaying = true;
        playPauseBtn.querySelector('i').classList.remove('fa-play');
        playPauseBtn.querySelector('i').classList.add('fa-pause');
        audioPlayer.play();
    }

    // Function to pause song
    function pauseSong() {
        isPlaying = false;
        playPauseBtn.querySelector('i').classList.remove('fa-pause');
        playPauseBtn.querySelector('i').classList.add('fa-play');
        audioPlayer.pause();
    }

    // Function to play or pause based on current state
    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    // Function to play the next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Function to play the previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Update progress bar
    function updateProgress(e) {
        const { duration, currentTime } = e.target;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;

        // Update time display
        currentTimeSpan.textContent = formatTime(currentTime);
    }

    // Set progress bar on click
    function setProgress(e) {
        const width = this.clientWidth; // Total width of the progress container
        const clickX = e.offsetX;     // X position of click relative to the container
        const duration = audioPlayer.duration;

        audioPlayer.currentTime = (clickX / width) * duration;
    }

    // Format time (e.g., 0:00 to 3:45)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update volume
    function setVolume() {
        audioPlayer.volume = volumeSlider.value / 100;
    }

    // Populate playlist
    function populatePlaylist() {
        playlist.forEach((song, index) => {
            const li = document.createElement('li');
            li.classList.add('playlist-item');
            li.dataset.index = index;
            li.innerHTML = `
                <div class="playlist-item-title">${song.title}</div>
                <div class="playlist-item-artist">${song.artist}</div>
            `;
            li.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            });
            playlistUl.appendChild(li);
        });
    }

    // Highlight active song in playlist
    function updatePlaylistHighlight(activeIndex) {
        const playlistItems = document.querySelectorAll('.playlist-item');
        playlistItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);
    audioPlayer.addEventListener('ended', nextSong); // Play next song when current one ends

    // When song metadata is loaded (duration becomes available)
    audioPlayer.addEventListener('loadedmetadata', () => {
        durationSpan.textContent = formatTime(audioPlayer.duration);
    });

    volumeSlider.addEventListener('input', setVolume);

    // Initial load
    populatePlaylist();
    loadSong(currentSongIndex);
    // Set initial volume
    audioPlayer.volume = volumeSlider.value / 100;
});