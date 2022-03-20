import "./lib/lib";

$("button").on("click", function () {
    $("div").eq(2).classToggle("active");
});


$(".active").setAtr("data-active", true);
$(".active").getAtr("data-active");
$("div").eq(1).setAtr("data-born", 1990);