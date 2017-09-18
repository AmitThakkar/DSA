function validate(input) {
    let result = "";
    let maxFieldCount = -1;
    let rows = input.split("~n");
    let header = rows.shift().split("|");
    header.pop();
    header.shift();
    rows.pop();
    rows.forEach((row) => {
        let fieldCount = row.split("|").length - 2;
        if (fieldCount > maxFieldCount) {
            maxFieldCount = fieldCount;
        }
    });

    let hash = 0;
    if (maxFieldCount > header.length) {
        hash = maxFieldCount - header.length;
    }

    result += rows.length + ":" + maxFieldCount + ":" + header[header.length - 1];
    if (hash > 0) {
        result += ("_" + hash)
    }
    return result;
}

console.log(validate("|name|address|~n|Patrick|patrick@test.com|pat@test.com|~n|Annie|annie@test.com|~n|Zoe|~n"));
