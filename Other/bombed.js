/**
 * Created by amitthakkar on 26/08/16.
 */
(() => {
    let getBombedString = (string) => {
        let tempObject = {}, result = '';
        for (let index = 0; index < string.length; index++) {
            if (tempObject[string[index]]) {
                tempObject[string[index]]++;
            } else {
                tempObject[string[index]] = 1;
            }
        }
        for (let key in tempObject) {
            if (tempObject[key] == 1) {
                result += key;
            }
        }
        return result;
    };

    console.log(getBombedString('aabccdeefgg'));
})();