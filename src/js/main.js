import "./lib/lib";

$("button").on("click", function () {
    $(this).classToggle("active");
});


$(".active").setAtr("data-active", true);
$(".active").getAtr("data-active");
$("button").html();