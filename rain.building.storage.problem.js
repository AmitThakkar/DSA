/**
 * Created by amitthakkar on 17/11/16.
 */
(() => {
    // let buildingHeights = [6, 1, 3, 5, 9, 2, 8];
    let buildingHeights = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
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
    let totalStorage = 0, maxStorageBetween2Building = 0, tempStorage = 0, leftBuilding = 0, rightBuilding = 0;
    for (let i = 0; i < buildingHeights.length; i++) {
        let storeWater = min(maxHeightFromLeft[i], maxHeightFromRight[i]) - buildingHeights[i];
        totalStorage += storeWater;
        tempStorage += storeWater;
        if (storeWater === 0) {
            if (tempStorage > maxStorageBetween2Building) {
                maxStorageBetween2Building = tempStorage;
                tempStorage = 0;
                leftBuilding = rightBuilding;
                rightBuilding = i;
            }
        }
    }
    console.log(totalStorage, maxStorageBetween2Building, leftBuilding, rightBuilding);
})();
