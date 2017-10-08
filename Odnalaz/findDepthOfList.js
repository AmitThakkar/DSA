(function () {
    let maxLength, depth = 0;
    let selector = 'li:not(:has(ol)):not(:has(ul))';
    let listOfLis = $(selector);
    if (listOfLis) { // only if else were added
        listOfLis.each(function () {
            maxLength = $(this).parents('ul,ol').length;
            if (maxLength > depth)
                depth = maxLength;
        });
    } else {
        let ulSelector = 'ul';
        if ($(ulSelector)) {
            depth = 1;
        }
    }
    console.log("Depth : ", depth);
})();
