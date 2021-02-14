$(function () {
    $('.jcarousel')
        .jcarousel({
            wrap: null
        })
        .on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();

            if (width == 100) { //initially hidden
                windowWidth = $(window).width();
                console.log(windowWidth);
                width = Math.ceil(windowWidth * 0.843);
            }

            if (width >= 800) {
                width = width / 4;
            } else if (width >= 600) {
                width = width / 3;
            } else if (width >= 250) {
                width = width / 2;
            }

            carousel.jcarousel('items').css('width', (Math.ceil(width) - 1) + 'px');
        });
    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            // Options go here
            target: '-=1'
        });
    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            // Options go here
            target: '+=1'
        });
});