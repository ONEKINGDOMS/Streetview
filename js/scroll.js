$(function() {
//    var d = "<div class='snow'><div>"
//    setInterval(function() {
//        var f = $(document).width();
//        var e = Math.random() * f - 100;
//        var o = 0.3 + Math.random();
//        var fon = 10 + Math.random() * 30;
//        var l = e - 100 + 200 * Math.random();
//        var k = 2000 + 5000 * Math.random();
//        $(d).clone().appendTo("body").css({
//            left: e + "px",
//            opacity: o,
//            "font-size": fon,
//        }).animate({
//            top: "400px",
//            left: l + "px",
//            opacity: 0.1,
//        }, k, "linear", function() {
//            $(this).remove()
//        })
//    }, 200)
})
$(window).scroll(function() {
    var h = $("#menu_title").outerHeight(true);
    var scroH = $(this).scrollTop();
    var screenheight = $(this).height();
    var height1 = $(".spring").outerHeight(true);
    var height2 = $(".summer").outerHeight(true);
    var height3 = $(".autumn").outerHeight(true);
    if (scroH + screenheight < height1) {
        $(".header").css({
            "background-color": "white",
            "background": ""
        });
    } else if (scroH + screenheight < height1 + height2 && scroH + screenheight > height1) {
        $(".header").css({
            "background": "url('img/1.jpg')",
        });
    } else if (scroH + screenheight > height1 + height2 && scroH + screenheight < height1 + height2 + height3) {
        $(".header").css({
            "background": "url('img/2.jpg') no-repeat",
            "background-size": "cover"
        });
    } else if (scroH + screenheight > height1 + height2 + height3) {
        $(".header").css({
            "background": "url('img/3.jpg') no-repeat",
            "background-size": "cover"
        });
    }
})