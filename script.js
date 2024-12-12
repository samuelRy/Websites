document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.progressive-image');  // Select all images
    const revealOnScroll = () => {
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;  // Get position of the image relative to the viewport
            const windowHeight = window.innerHeight;  // Get height of the window (viewport)
            const revealPoint = 150;  // Point at which the image starts to become visible

            if (imageTop < windowHeight - revealPoint) {
                // Gradually reveal the image by changing its opacity and translate position
                image.style.opacity = '1';
                image.style.transform = 'translateX(0)';
            } else {
                // Reset image to be hidden below its final position when out of view
                image.style.opacity = '0';
                if (image.className=="right-image progressive-image") {
                image.style.transform = 'translateX(60px)';
                    
                } else {
                image.style.transform = 'translateX(-60px)';
                    
                }
            }
        });
    };
    function getRandomColor() {
    const colors = [
        "#FFDD00", // Bright Yellow
        "#FF6F61", // Bright Coral Red
        "#F7A8B8", // Light Pink
        "#00BFFF", // Bright Sky Blue
        "#FFD700", // Golden Yellow
        "#32CD32", // Lime Green
        "#FF1493", // Deep Pink
        "#FF4500", // Orange-Red
        "#00FF7F", // Spring Green
        "#FF6347", // Tomato Red
    ];
    // Randomly choose a color from the array
    return colors[Math.floor(Math.random() * colors.length)];
}
// Function to generate random positions for confetti and stars
function generateConfetti() {
    const numConfetti = 50; // Number of confetti pieces
    const numStars = 20; // Number of stars
    const deco = document.querySelector('.deco');

    // Generate Confetti
    for (let i = 0; i < numConfetti; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%'; // Random horizontal position
        confetti.style.animationDelay = Math.random() * 5 + 's'; // Random delay for animation
        confetti.style.backgroundColor=getRandomColor();
        deco.appendChild(confetti);
    }

    // Generate Stars
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%'; // Random horizontal position
        star.style.top = Math.random() * 100 + '%'; // Random vertical position
        star.style.animationDelay = Math.random() * 2 + 's'; // Random delay for animation
        deco.appendChild(star);
    }
}

// Call the function to generate confetti and stars
generateConfetti();
    // Call the function when the page loads and on scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});
