document.addEventListener('DOMContentLoaded', function() {
    const hammerIcon = document.querySelector('.hammer-icon');
    const smashIcon = document.querySelector('.smash-icon');

    hammerIcon.addEventListener('animationend', function(event) {
        // Check if the animation that ended is the 'hammer' animation
        if (event.animationName === 'hammer') {
            smashIcon.style.display = 'block';
            setTimeout(function() {
                smashIcon.style.display = 'none';
            }, 500); // Adjust timing as needed
        }
    });
});
