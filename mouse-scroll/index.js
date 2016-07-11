require('./index.scss');

const $ = require('jquery');

const moveEl = $('[data-role="helper"]');
const rightMoveEl = $('[data-role="right-scroll"]');

const height = 150;
const totalHeight = 450;

var setTimeoutId;

$('[data-role="nav-item"]').hover(function(e) {
    if (setTimeoutId) {
        clearTimeout(setTimeoutId);
    }

    moveEl.show();

    var target = $(e.currentTarget);
    var index = target.index() - 1;

    helperMove(index * height);
    rightMove(-index * totalHeight);

}, function(e) {
    setTimeoutId = setTimeout(function() {
        moveEl.fadeOut();
    }, 50);
});

function helperMove(top) {
    if (moveEl.is(':animated')) {
        moveEl.stop();
    }

    moveEl.animate({
        top: top
    }, 500);
}

function rightMove(top) {
    if (rightMoveEl.is(':animated')) {
        rightMoveEl.stop();
    }

    rightMoveEl.animate({
        top: top + 'px'
    }, 500);
}
