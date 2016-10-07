/**
 * Created by amitthakkar on 07/10/16.
 */
(() => {
    let sortUsersViaBubbleAlgo = (users) => {
        for (let i = 0; i < users.length - 1; i++) {
            for (let j = i + 1; j < users.length; j++) {
                if (users[i].score < users[j].score) {
                    let temp = users[i];
                    users[i] = users[j];
                    users[j] = temp;
                }
            }
        }
    };

    let data = [
        {name: 'Amit', score: 10},
        {name: 'Namita', score: 2},
        {name: 'Neetika', score: 4},
        {name: 'Rohit', score: 8},
        {name: 'Bob', score: 1},
        {name: 'John', score: 9},
        {name: 'Jasper', score: 6}
    ];

    sortUsersViaBubbleAlgo(data);
    console.log(data);
})();