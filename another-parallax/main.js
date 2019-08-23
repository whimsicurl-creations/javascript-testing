const parallax = document.getElementById('parallax');
const parallaxTwo = document.getElementById('parallaxTwo');
const parallaxThree = document.getElementById('parallaxThree');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    // Have to keep rate of scrolling low to prevent overlap
    parallaxTwo.style.backgroundPositionY = offset * 0.3 + 'px';
});

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    // See note above
    parallaxThree.style.backgroundPositionY = offset * 0.2 + 'px';
});