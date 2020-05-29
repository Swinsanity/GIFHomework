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
})