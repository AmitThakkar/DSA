/**
 * Created by amitthakkar on 24/08/16.
 * This blog explain how to find minimum dices for reach a point in Snake and Ladder Game.
 */
(() => {
    'use strict';
    //const input = [20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    /*const input = [
     38, 0, 0, 14, 0, //5
     0, 0, 0, 31, 0, //10
     0, 0, 0, 0, 0,  //15
     0, 7, 0, 0, 0,  //20
     42, 0, 0, 0, 0,  //25
     0, 0, 84, 0, 0, //30
     0, 0, 0, 0, 0, //35
     0, 0, 0, 0, 0, //40
     0, 0, 0, 0, 0, //45
     0, 0, 0, 0, 0, //50
     67, 0, 0, 34, 0, //55
     0, 0, 0, 0, 0, //60
     0, 19, 0, 60, 0, //65
     0, 0, 0, 0, 0, //70
     0, 91, 0, 0, 0, //75
     0, 0, 0, 0, 99, //80
     0, 0, 0, 0, 0, //85
     0, 36, 0, 0, 0, //90
     0, 0, 73, 0, 75, //95
     0, 0, 79, 0, 0  //100
     ];*/
    const input = [
        0, 0, 0, 14, 0, // 5
        0, 0, 0, 31, 0, // 10
        0, 0, 0, 0, 0, //15
        0, 7, 0, 0, 38, //20
        0, 0, 0, 0, 0, //25
        0, 0, 84, 0, 0, // 30
        0, 0, 0, 0, 0, //35
        0, 0, 0, 0, 59, // 40
        0, 0, 0, 0, 0, // 45
        0, 0, 0, 0, 0, //50
        67, 0, 0, 34, 0, //55
        0, 0, 0, 0, 0, //60
        0, 19, 81, 60, 0, //65
        0, 0, 0, 0, 0, //70
        91, 0, 0, 0, 0, // 75
        0, 0, 0, 0, 0, //80
        0, 0, 0, 0, 0, //85
        0, 24, 0, 0, 0, //90
        0, 0, 73, 0, 76, //95
        0, 0, 0, 78, 0 //100
    ];

    function getMinimumDices(input) {
        const graph = {};
        input.forEach((number, index) => {
            graph[index + 1] = '-1';
        });
        for (let position = 0; position < input.length; position++) {
            if (position > 0 && input[position - 1] != 0) {
                delete graph[position];
                continue;
            }
            for (let diceNumber = 1; diceNumber <= 6 && diceNumber <= input.length; diceNumber++) {
                let nextPositionValue = input[position + diceNumber - 1];
                if (nextPositionValue == 0) { // Nothings is here
                    if (graph[position + diceNumber] == '-1' || graph[position + diceNumber] > graph[position] + 1) {
                        if (position > 0) {
                            graph[position + diceNumber] = graph[position] + 1;
                        } else {
                            graph[position + diceNumber] = 1;
                        }
                    }
                } else if (nextPositionValue > position + diceNumber) { // Ladder Is Here
                    if (graph[nextPositionValue] == '-1') {
                        if (position == 0) {
                            graph[nextPositionValue] = 1;
                        } else {
                            graph[nextPositionValue] = graph[position] + 1;
                        }
                    } else if (graph[nextPositionValue] > graph[position] + 1) {
                        graph[nextPositionValue] = graph[position] + 1;
                    }
                } else if (nextPositionValue < position) {
                    delete graph[position + diceNumber];
                }
            }
        }
        return graph;
    }

    console.log(getMinimumDices(input));
})();