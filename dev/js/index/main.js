const $ = require('jquery');

const moveEl = $('[data-role="helper"]');
const rightMoveEl = $('[data-role="right-scroll"]');

const height = 150;
const totalHeight = 450;


// 父作用域
// mouseover/mouseout
$('[data-role="nav-item"]').hover(function(e) {

    moveEl.show().css({
        opacity: 1
    });

    var target = $(e.currentTarget);
    var index = target.index() - 1;

    helperMove(index * height);
    rightMove(-index * totalHeight);

}, function(e) {
    // 子作用域
    moveEl.hide();
});

function helperMove(top) {
    // jQuery默认会把所有的执行动画存放到队列中依次执行
    if (moveEl.is(':animated')) {
        moveEl.stop();
    }

    moveEl.animate({
        top: top + 'px'
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
