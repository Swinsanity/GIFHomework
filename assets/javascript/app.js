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
        
    })
})