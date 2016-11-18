/**
 * Created by amitthakkar on 17/11/16.
 */
(() => {
    let buildingHeights = [6, 1, 3, 5, 9, 2, 8];
    /*
     * TOTAL store water
     * */
    let max = (n1, n2) => {
        return n1 > n2 ? n1 : n2;
    };
    let min = (n1, n2) => {
        return n1 > n2 ? n2 : n1;
    };

    let maxHeightFromLeft = {}, maxHeightFromRight = {};
    for (let i = 0; i < buildingHeights.length; i++) {
        maxHeightFromLeft[i] = max(buildingHeights[i], (i != 0) ? maxHeightFromLeft[i - 1] : 0);
    }
    for (let i = buildingHeights.length - 1; i >= 0; i--) {
        maxHeightFromRight[i] = max(buildingHeights[i], i < (buildingHeights.length - 1) ? maxHeightFromRight[i + 1] : 0);
    }
    let totalStorage = 0;
    for (let i = 0; i < buildingHeights.length; i++) {
        totalStorage += min(maxHeightFromLeft[i], maxHeightFromRight[i]) - buildingHeights[i];
    }
    console.log(totalStorage);
})();
