const navbar = document.getElementById("navbar");

function changeNavbarBackground (position) {
    if (position <= 0) {
        return 'transparent';
    }
    return 'rgb(12, 12, 12)';
}

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    navbar.style.backgroundColor = changeNavbarBackground(scrollPosition);
});