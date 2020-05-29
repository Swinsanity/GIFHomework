$(document).ready(function() {

    var gifs = [
        "approval", "tired", "no", "cats", "fail", "what", "hearts", "bye"
    ];

    function makeButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();

        for (var i = 0; i <arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }

    }

    $(document).on("click", ".gif-button", function() {
        $("#gifs").empty();
        $(".gif-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=vsWajxKdCbeh1Lt7r5Swp1EuByTDTg9Q";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class=\"gif-item\">");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animated = results[i].images.fixed_height.url;
                    var still = results[i].images.fixed_height_still.url;

                    var animalImage = $("<img>");
                    gifImage.attr("src", still);
                    gifImage.attr("data-still", still);
                    gifImage.attr("data-animate", animated);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif-image");
                    
                    gifDiv.append(p);
                    gifDiv.append(gifImage);

                    $("#gifs").append(gifDiv);
                }
            });
    });

    $(document).on("click", ".gif-image", function() {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var newGif = $("input").eq(0).val();

        if (newGif.length > 2) {
            gifs.push(newGif);
        }

        makeButtons(gifs, "gif-button", "#gif-buttons");
    });

    makeButtons(gifs, "gif-button", "#gif-buttons");
});