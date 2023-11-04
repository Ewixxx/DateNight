const rope = document.getElementById('rope');
const curtain = document.querySelector('.curtain');
const movieLink = document.getElementById('movie-link');

rope.addEventListener('click', () => {
    curtain.classList.toggle('open');

    // Delay the showing of the movie link
    if (curtain.classList.contains('open')) {
        setTimeout(() => {
            movieLink.style.display = 'block';
            createConfetti(); // Trigger the confetti animation
        }, 1000); // Adjust the delay time (in milliseconds) as needed
    } else {
        movieLink.style.display = 'none';
    }
});

function createConfetti() {
    confetti.start();
}
