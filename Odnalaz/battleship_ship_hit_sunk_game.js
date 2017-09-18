function solution(N, S, T) {
    let shipArea = {};
    let shipCoordinates = S.split(",");
    shipCoordinates.forEach((shipCoordinate, shipIndex) => {
        let shipIndexes = shipCoordinate.split(" ");

        let xIndex = shipIndexes[0].match(/(\d+)([A-Za-z]+)/);
        let startRow = xIndex[1];
        let startLetter = xIndex[2];

        let yIndex = shipIndexes[1].match(/(\d+)([A-Za-z]+)/);
        let endRow = yIndex[1];
        let endLetter = yIndex[2];

        for (let row = startRow, letter = startLetter; row <= endRow;) {
            shipArea[row + letter] = shipIndex;
            letter = String.fromCharCode(letter.codePointAt() + 1);
            if (letter > endLetter) {
                letter = startLetter;
                row++;
            }
        }
    });

    let sunkShips = {};
    let hitShips = {};

    let hits = T.split(" ");
    hits.forEach((hit) => {
        if (shipArea[hit] !== undefined) {
            sunkShips[shipArea[hit]] = true;
            delete shipArea[hit];
        }
    });

    for (let areaKey in shipArea) {
        if (sunkShips[shipArea[areaKey]]) {
            hitShips[shipArea[areaKey]] = true;
            delete sunkShips[shipArea[areaKey]];
        }
    }

    return Object.keys(sunkShips).length + "," + Object.keys(hitShips).length;
}

result = solution(4, "1B 2C,2D 4D", "2B 2D 3D 4D 4A");
console.log(result); // "1,1"
result = solution(4, '1A 1B,2C 2C', '1B');
console.log(result); // "0,1"
result = solution(4, '1A 2A,12A 12A', '12A');
console.log(result); // "1,0"
