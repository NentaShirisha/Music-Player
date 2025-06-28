Music Player
A sleek, responsive, and easy-to-use music player built with HTML, CSS, and JavaScript. This project demonstrates fundamental web development concepts, including DOM manipulation, event handling, and audio playback control, to create an interactive user experience.
Features:
1. Play/Pause Functionality: Easily control audio playback with a prominent play/pause button.

2. Previous/Next Song Navigation: Skip through tracks in the playlist.

3. Progress Bar: Visual representation of the current song's progress with draggable functionality to seek to a specific time.

4. Time Display: Shows current playback time and total song duration.

5. Volume Control: Adjust the audio volume using a slider.

6. Dynamic Playlist: Songs are loaded from a JavaScript array, allowing for easy expansion and management.

7. Interactive Playlist: Click on any song in the playlist to start playback immediately.

8. Active Song Highlight: The currently playing song is visually highlighted in the playlist.

9. Responsive Design: The player adapts to different screen sizes, providing a consistent experience on desktops, tablets, and mobile devices.

10. Custom Album Art: Each song can have its own album art, with a default fallback if none is provided.

Technologies Used
HTML5: For the semantic structure of the music player.

CSS3: For styling, layout, and responsive design, including gradients, blur effects, and custom scrollbars.

JavaScript (ES6+): For all interactive functionalities, audio control, and DOM manipulation.

Font Awesome: Used for icons (play, pause, next, previous, volume).

How to Run
Clone the repository:

Bash

git clone https://github.com/NentaShirisha/Music-Player.git
Navigate to the project directory:

Bash

cd Simple-Music-Player
Open index.html:
Simply open the index.html file in your web browser.

Note: For the audio and image files to load correctly, ensure you have an audio/ folder containing .mpeg (or other supported audio formats) files and an images/ folder containing .webp or .jpg files as specified in script.js. Example paths are provided in the playlist array within script.js.

Project Structure
├── index.html          # Main HTML file defining the player's structure
├── style.css           # CSS file for styling and responsive design
├── script.js           # JavaScript file for all interactive logic
├── audio/              # Directory for audio files (e.g., song1.mpeg, song2.mpeg)
│   ├── song1.mpeg
│   ├── song2.mpeg
│   └── song3.mpeg
└── images/             # Directory for album art images
    ├── album1.webp
    ├── album2.jpg
    ├── album3.jpg
    └── default-album2.jpg
