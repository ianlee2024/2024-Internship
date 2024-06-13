function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust the scroll position threshold as needed
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.5)'; // Lower opacity when scrolling
    } else {
        header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // Original opacity when not scrolling
    }
});
