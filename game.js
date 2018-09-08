$(document).ready(() => {
    var pairs = ["volcano", "volcano", "dragon", "dragon", "rocket", "rocket", "excavator", "excavator", "dinosaur", "dinosaur", "octopus", "octopus", "acorn", "acorn", "lego", "lego", "boat", "boat", "truck", "truck"];

    var clicked = false;
    var selected;
    var selected2;
    var readyForNext = true;

    function makeGrid() {
        for (i = 0; i < 4; i++) {
            var row = "<div class='row'>"
            for (j = 0; j < 5; j++) {
                var selection = Math.floor(Math.random() * pairs.length);
                var image = pairs[selection];
                pairs.splice(selection, 1);
                row += "<a class='dot' ";
                row += "data-id='" + image + "'>";
                row += "</a>";
            }
            row += "</div>";
            $("#grid").append(row);
        }
    };

    makeGrid();

    function revealPic(target) {
        if ($(target).attr("data-id") == "volcano") {
            $(target).html("<img src='images/volcano.jpg'>");
            selected = "volcano";
            clicked = true;
        }
        if ($(target).attr("data-id") == "dragon") {
            $(target).html("<img src='images/dragon.jpg'>");
            selected = "dragon";
            clicked = true;
        }
        if ($(target).attr("data-id") == "dinosaur") {
            $(target).html("<img src='images/dinosaur.jpg'>");
            selected = "dinosaur";
            clicked = true;
        }
        if ($(target).attr("data-id") == "octopus") {
            $(target).html("<img src='images/octopus.jpg'>");
            selected = "octopus";
            clicked = true;
        }
        if ($(target).attr("data-id") == "excavator") {
            $(target).html("<img src='images/excavator.jpg'>");
            selected = "excavator";
            clicked = true;
        }
        if ($(target).attr("data-id") == "boat") {
            $(target).html("<img src='images/boat.jpg'>");
            selected = "boat";
            clicked = true;
        }
        if ($(target).attr("data-id") == "truck") {
            $(target).html("<img src='images/truck.jpg'>");
            selected = "truck";
            clicked = true;
        }
        if ($(target).attr("data-id") == "acorn") {
            $(target).html("<img src='images/acorn.png'>");
            selected = "acorn";
            clicked = true;
        }
        if ($(target).attr("data-id") == "lego") {
            $(target).html("<img src='images/lego.png'>");
            selected = "lego";
            clicked = true;
        }
        if ($(target).attr("data-id") == "rocket") {
            $(target).html("<img src='images/rocket.png'>");
            selected = "rocket";
            clicked = true;
        }
        console.log(selected);
    };

    function wrongPic(target) {
        if ($(target).attr("data-id") == "volcano") {
            $(target).html("<img src='images/volcano.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "dragon") {
            $(target).html("<img src='images/dragon.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "dinosaur") {
            $(target).html("<img src='images/dinosaur.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "octopus") {
            $(target).html("<img src='images/octopus.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "excavator") {
            $(target).html("<img src='images/excavator.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "boat") {
            $(target).html("<img src='images/boat.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "truck") {
            $(target).html("<img src='images/truck.jpg'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "acorn") {
            $(target).html("<img src='images/acorn.png'>");
            selected = "acorn";
            clicked = true;
        }
        if ($(target).attr("data-id") == "lego") {
            $(target).html("<img src='images/lego.png'>");
            clicked = true;
        }
        if ($(target).attr("data-id") == "rocket") {
            $(target).html("<img src='images/rocket.png'>");
            clicked = true;
        }
        console.log(selected);
    };

    function hidePic() {
        $("[data-id=" + selected2 + "]").empty();
        $("[data-id=" + selected + "]").empty();
        clicked = false;
        selected = "";
        readyForNext = true;
    }

    $(".dot").on("click", function () {
        if (!clicked && readyForNext) {
            revealPic(this);
        }
        else if (clicked && readyForNext) {
            if ($(this).attr("data-id") != selected) {
                selected2 = $(this).attr("data-id");
                wrongPic(this);
                readyForNext = false;
                setTimeout(hidePic, 1200);
            }
            else {
                revealPic(this);
                clicked = false;
                selected = "";
            }
        }
    })
});