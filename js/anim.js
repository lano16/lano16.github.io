$(document).ready(function () {
    $(window).scroll(function (event) {
        var s = $(this).scrollTop();
        var w = $(this).outerWidth();
        var h = $('.content').outerHeight();
        var h_b = $('.parallax').outerHeight();
        var p = s / h * 100;
        var p_b = s / h_b * 100;
        var o = 1 - 1 / 50 * p_b;

        //туман
        var z_1 = 1 + (w / 10000 * p_b);
        $('.parallax__fog').css('transform', `translate3d(0, 50px, 0) scale(${z_1})`);
        $('.parallax__fog').css('opacity', o);

        //фон
        var z_2 = 1 + (w / 4000000 * p);
        $('.parallax__montain1').css('transform', `scale(${z_2})`);

        //правая гора 2000, 0.00005
        var hr = (w - 20) / 2000 * p_b;
        var z_3 = 1 + (w * 0.00001 * p_b);
        $('.parallax__montain2').css('transform', `translate3d(${hr}px, 50px, 0) scale(${z_3})`);

        //левая гора 1500, 0.00001
        var hr2 = w / 1500 * p_b;
        var z_4 = 1 + (w * 0.00002 * p_b);
        $('.parallax__montain3').css('transform', `translate3d(${hr2}px, 50px, 0) scale(${z_4})`);
    });
});