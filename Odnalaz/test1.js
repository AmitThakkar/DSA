(function () {
    var maxLength, depth = 0;
    var selector = 'li:not(:has(ol)):not(:has(ul))';
    var listOfLis = $(selector);
    if(listOfLis) { // only if else were added
        listOfLis.each(function() {
            maxLength = $(this).parents('ul,ol').length;
            if (maxLength > depth)
                depth = maxLength;
        });
    } else {
        var ulSelector = 'ul';
        if($(ulSelector)) {
            depth = 1;
        }
    }
    console.log("Depth : ", depth);
})();

what should be output? 1?
