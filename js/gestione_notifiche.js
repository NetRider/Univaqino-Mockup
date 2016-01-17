$( document ).ready(function() {
	var list = document.getElementById('slippylist');


list.addEventListener('slip:beforeswipe', function(e) {
    if (shouldNotSwipe(e.target)) {
        e.preventDefault(); // won't move sideways if prevented
    }
});

list.addEventListener('slip:swipe', function(e) {
    // e.target list item swiped
    if (thatWasSwipeToRemove) {
        // list will collapse over that element
        e.target.parentNode.removeChild(e.target);
    } else {
        e.preventDefault(); // will animate back to original position
    }
});

new Slip(list);
})