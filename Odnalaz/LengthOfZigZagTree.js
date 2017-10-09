/**
 * Created by akumar13 on 10/8/17.
 */
function solution(node) {
    if (node) {
        return getMaxZigZagLength(node, -1);
    }
    return 0;
}

function getMaxZigZagLength(node, direction) {
    let leftZigZag = 0;
    let rightZigZag = 0;
    if (node.l) {
        leftZigZag = getMaxZigZagLength(node.l, 1);
        if (direction === 0) {
            leftZigZag++;
        }
    }
    if (node.r) {
        rightZigZag = getMaxZigZagLength(node.r, 0);
        if (direction === 1) {
            rightZigZag++;
        }
    }
    return Math.max(leftZigZag, rightZigZag);
}

console.log(solution({
    "x": 5,
    "l": {
        "x": 3,
        "l": {
            "x": 20,
            "l": {
                "x": 6,
                "l": null,
                "r": null
            },
            "r": null
        },
        "r": null
    },
    "r": {
        "x": 10,
        "l": {"x": 1, "l": null, "r": null},
        "r": {
            "x": 15,
            "l": {"x": 30, "l": null, "r": {"x": 9, "l": null, "r": null}},
            "r": {"x": 8, "l": null, "r": null}
        }
    }
}));
