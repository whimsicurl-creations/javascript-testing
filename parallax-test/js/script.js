window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    for (var i = 0; i < target.length; i++) {
        var pos = window.pageYOffset * target[i].dataset.rate;

        target[i].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
    }
});