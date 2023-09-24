'use strict'


$(window).on('load', function () {
    //Animation filter buttons 
    function hoverBlock() {
        if ($('.info').length > 0) {
            const filterButons = document.querySelectorAll('.info__header-button');
            const positionParent = document.querySelector('.info__header-buttons').getBoundingClientRect().left;
            $(filterButons).first().append('<span class="hover-block"></span>');
            $(filterButons).first().addClass('active');

            filterButons.forEach((button, i) => {
                button.addEventListener('mouseenter', function () {
                    let positionButton = button.getBoundingClientRect().left;
                    let widthButton = $(button).width();
                    let rightPosition = positionButton - positionParent;
                    $('.hover-block').css({
                        'transform': `translateX(${rightPosition}px)`,
                        'width': `${widthButton}px`,
                    });
                    $(button).addClass('active').siblings().removeClass('active');
                });
            });
        }
    }
    hoverBlock();

    // Animatio price cards
    function showCards(i = 0) {
        $('.info__list .list').eq(i).find('.item').each(function (index, item) {
            setTimeout(function () {
                $(item).closest('.info__list').css('height', $(item).parent().outerHeight(true));
                $(item).addClass('show');
            }, 500 + (index * 500))
        });
    }
    $('.info__header-button').each(function (indexButton, button) {
        $(button).on('click', function () {
            if (!$(button).hasClass('current')) {
                $(button).addClass('current').siblings().removeClass('current').addClass('lock-button');
                $('.info__list .list').eq(indexButton - 1).find('.item').each(function (index, item) {
                    setTimeout(function () {
                        $(item).closest('.info__list').css('height', $(item).parent().outerHeight(true));
                        $(item).removeClass('show');
                        showCards(indexButton);
                    }, 500 + (index * 500))
                });
                setTimeout(function(){
                    $(button).siblings().removeClass('lock-button');
                }, 1500)
            }
        });
    });
    $('.info__header-button').first().addClass('current');
    showCards()
});






