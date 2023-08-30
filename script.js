$(document).ready(function () {

    $(".item").each(function () {
        product($(this));
    });
    function product(item) {

        var active = false;

        item.find(".price__button").on("click", function () {
           active = true;
        });

        item.mouseleave(function () {
            if(active) {
                item.addClass("reserved__item");
                item.find(".reserved-layer").show();
                active = false;
            }
        });

        item.on("click", function () {
           if(item.hasClass("reserved__item")) {
               item.removeClass("reserved__item");
               item.find(".reserved-layer").hide();
           }
        });
    }

})