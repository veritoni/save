// function AddReadMore(breakpoint, charLimit1, charLimit2) {
//     // Text to show when text is collapsed
//     var readMoreTxt = " ... Подробнее";
//     // Text to show when text is expanded
//     var readLessTxt = " Свернуть";
//
//     //Traverse all selectors with this class and manupulate HTML part to show Read More
//     $(".addReadMore").each(function() {
//         let that = $(this);
//         var allstr = $(this).html();
//
//         if ($(this).find(".firstSec").length)
//             return;
//
//         $(window).on('load resize', function () {
//             that.removeClass('loading');
//
//             if ($(window).width() < breakpoint) {
//                 if (that.attr('data-window-width') !== 'narrow') {
//                     $(that.attr('data-window-width', 'narrow'));
//
//                     if (allstr.length > charLimit1) {
//                         var firstSet = allstr.substring(0, charLimit1);
//                         var secdHalf = allstr.substring(charLimit1, allstr.length);
//                         var strtoadd = firstSet + "</p><span class='SecSec'><p style='text-align: justify;'>" + secdHalf + "</p></span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
//                         $(that.html(strtoadd));
//                     };
//                 };
//             } else {
//                 if (that.attr('data-window-width') !== 'wide') {
//                     $(that.attr('data-window-width', 'wide'));
//
//                     if (allstr.length > charLimit2) {
//                         var firstSet = allstr.substring(0, charLimit2);
//                         var secdHalf = allstr.substring(charLimit2, allstr.length);
//                         var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less'>" + readLessTxt + "</span>";
//                         $(that.html(strtoadd));
//                     };
//                 };
//             }
//         });
//
//     });
//     //Read More and Read Less Click Event binding
//     $(document).on("click", ".readMore,.readLess", function() {
//         $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
//     });
// }

$(document).ready(function () {
    // скрипт для скролла якорей.
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {

        // вешаем слушателей для всех якорей
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)
            const headerFixedHeight = 69;

            //при клике скролл до верха элемента с учетом фиксированного хедера
            const topOfElement = document.getElementById(blockID).offsetTop - headerFixedHeight;
            window.scroll({top: topOfElement, behavior: "smooth"});

        })
    }

     // initialization of header
     $.HSCore.components.HSHeader.init($('#js-header'));
     $.HSCore.helpers.HSHamburgers.init('.hamburger');
    // initialization of popups
    //  $.HSCore.components.HSPopup.init('.js-fancybox');

     // initialization of carousel
     $.HSCore.components.HSCarousel.init('.js-carousel');

    $('.mobile__form_button').on('click', function () {
      $('.form_main').css('left', 0);
      $('body').addClass('modal-active');
    })
    $('.modal__close-btn').on('click', function () {
      $('.form_main').css('left', '100%');
      $('body').removeClass('modal-active');

    });

    //запускаем функцию readMore
    // AddReadMore(1200, 500, 800);

    // подключаем showmore:
    $('.show-more-block').showmore({
        closedHeight: 440,
        buttonTextMore: 'Читать далее',
        buttonTextLess: 'Свернуть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5
    });
 });
//
// function setEqualHeight(columns) {
//     var tallestcolumn = 0;
//     columns.each(
//         function () {
//             currentHeight = $(this).height();
//             if (currentHeight > tallestcolumn) {
//                 tallestcolumn = currentHeight;
//             }
//         }
//     );
//     columns.height(tallestcolumn);
//     console.log(tallestcolumn)
//}


$(window).on('scroll', function() {
    // if ($(window).scrollTop() < 70) {
    //     $('body').removeClass('body-top')
    // }
    // if ($(window).scrollTop() > 10) {
    //     $('body').addClass('body-top')
    // }
});

// $(window).on('load resize', function () {
//     let showMoreBlock = $('.show-more-block');
//
//     if ($(window).width() < 1200) {
//         if (showMoreBlock.attr('data-window-width') !== 'narrow') {
//             $(showMoreBlock.attr('data-window-width', 'narrow'));
//
//             $(showMoreBlock).showmore({
//                 closedHeight: 381,
//                 buttonTextMore: 'Подробнее',
//                 buttonTextLess: 'Свернуть',
//                 buttonCssClass: 'showmore-button',
//                 animationSpeed: 0.5
//             })
//         }
//     } else {
//         if (showMoreBlock.attr('data-window-width') !== 'wide') {
//             $(showMoreBlock.attr('data-window-width', 'wide'));
//
//             $(showMoreBlock).showmore({
//                 closedHeight: 460,
//                 buttonTextMore: 'Подробнее',
//                 buttonTextLess: 'Свернуть',
//                 buttonCssClass: 'showmore-button',
//                 animationSpeed: 0.5
//             })
//         }
//     }
// });

