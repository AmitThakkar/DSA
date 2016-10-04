/**
 * Created by amitthakkar on 04/10/16.
 */
(() => {
    let reviews = [];
    let filterByMinAverageScore = (reviews, min_avg) => {
        let result = [];
        let tempObj = {};
        reviews.forEach((review) => {
            if (!tempObj[review.hotel_id]) {
                tempObj[review.hotel_id] = {
                    score: review.score,
                    count: 1
                };
            } else {
                tempObj[review.hotel_id].score += review.score;
                tempObj[review.hotel_id].count++;
            }
        });
        for (let key in tempObj) {
            if (tempObj[key].score / tempObj[key].count > min_avg) {
                result.push(key);
            }
        }
        return result;
    };

    let data = [
        {'hotel_id': 1001, 'user_id': 501, 'score': 7},
        {'hotel_id': 1001, 'user_id': 502, 'score': 7},
        {'hotel_id': 1001, 'user_id': 503, 'score': 7},
        {'hotel_id': 2001, 'user_id': 504, 'score': 10},
        {'hotel_id': 3001, 'user_id': 505, 'score': 5},
        {'hotel_id': 2001, 'user_id': 506, 'score': 5}
    ];
    console.log(filterByMinAverageScore(data, 6));
})();