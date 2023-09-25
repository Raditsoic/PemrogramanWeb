
document.addEventListener('DOMContentLoaded', function() {
    // Store references to the video container and YouTube video IDs
    const videoContainer = document.getElementById('video-container');
    const videoIds = {
        p5: 'SKpSpvFCZRw?si=asrO8wvEjcwSHGI2',
        asftu: '5QYVQhVd_-M?si=6YGF5eTSoawhz92G',
        teraria: '6nUvWkD8rAE?si=nZbqxIZg06rlmw3x',
        omori: 'erzgjfU271g?si=gHOM6FmDzFAcuaE1',
        wotw: '2kPSl2vyu2Y?si=rrIv4hm_-dBI2syk',
    };

    // Function to create and display the YouTube video
    function displayVideo(gameId) {
        const videoId = videoIds[gameId];
        if (videoId) {
            videoContainer.innerHTML = `
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            `;
        } else {
            videoContainer.innerHTML = 'Video not found.';
        }
    }

    // Function to toggle the video container's visibility
    function toggleVideo(gameId) {
        // Check if the video container is currently displayed
        if (videoContainer.style.display === 'block') {
            // Hide the video container
            videoContainer.style.display = 'none';
        } else {
            // Display the video for the selected game
            displayVideo(gameId);
            // Show the video container
            videoContainer.style.display = 'block';
        }
    }

    // Store references to list items
    const listItemElements = document.querySelectorAll('li');

    // Add click event listeners to the list items
    listItemElements.forEach((listItem) => {
        listItem.addEventListener('click', (event) => {
            const gameId = event.currentTarget.querySelector('a').id;
            // Call the toggleVideo function
            toggleVideo(gameId);
        });
    });
});