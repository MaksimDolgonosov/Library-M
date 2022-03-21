import "./lib/lib";

$("button").on("click", function () {
    $("div").eq(2).classToggle("active");
});

$(".active").setAtr("data-active", true);
$(".active").getAtr("data-active");

$("div").eq(1).setAtr("data-born", 1990);

$("div").on("click", function () {
    console.log($(this).index());
});

let user = {
    0: "Max",
    1: "Dolgonosov",
    2: 31
};

let k = user.querySelectorAll("Max");
console.log(k);
