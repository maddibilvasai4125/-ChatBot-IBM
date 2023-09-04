

















// ... existing JavaScript code ...

// Function to display YouTube video recommendations
function displayYouTubeRecommendations(videoRecommendations) {
    const videoRecommendationsContainer = document.getElementById('video-recommendations');

    // Clear previous recommendations
    videoRecommendationsContainer.innerHTML = '';

    // Embed YouTube videos
    videoRecommendations.forEach(videoUrl => {
        const videoEmbed = document.createElement('iframe');
        videoEmbed.src = videoUrl;
        videoEmbed.width = '560';
        videoEmbed.height = '315';
        videoEmbed.allowfullscreen = true;
        
        videoRecommendationsContainer.appendChild(videoEmbed);
    });
}

// ... existing JavaScript code ...
// Function to display Spotify recommendations
function displaySpotifyRecommendations(recommendations) {
    const spotifyContainer = document.getElementById('spotify-recommendations');
    spotifyContainer.innerHTML = ''; // Clear previous recommendations

    recommendations.forEach(track => {
        const trackElement = document.createElement('div');
        trackElement.innerHTML = `
            <p><strong>${track.name}</strong> by ${track.artists}</p>
            ${track.preview_url ? `<audio controls><source src="${track.preview_url}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ''}
        `;
        spotifyContainer.appendChild(trackElement);
    });
}







// Function to fetch recommendations and update the UI
function fetchRecommendations(userMessage) {
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `user_input=${encodeURIComponent(userMessage)}`
    })
    .then(response => response.json())
    .then(data => {
        // Display recommendations based on data received
        if (data.youtube_recommendations) {
            displayYouTubeRecommendations(data.youtube_recommendations);
        }

        if (data.spotify_recommendations) {
            displaySpotifyRecommendations(data.spotify_recommendations);
        }

        // ... handle other recommendations or data
    })
    .catch(error => console.error('Error:', error));
}












 