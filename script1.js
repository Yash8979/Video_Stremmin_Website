
    document.addEventListener('DOMContentLoaded', function () {
        const videos = document.querySelectorAll('.scroll-video-item');

        function playVideoInView() {
            videos.forEach(video => {
                const rect = video.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                // Check if the video is in the view
                if (rect.top >= 5 && rect.bottom <= windowHeight) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

        // Attach the playVideoInView function to the scroll event
        window.addEventListener('scroll', playVideoInView);

        // Call the function on page load to check if videos are in view
        playVideoInView();
    });

