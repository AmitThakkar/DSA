/**
 * Created by amitthakkar on 17/11/16.
 */
(() => {
    let buildingHeights = [6, 1, 3, 5, 9, 2, 8];
    let maxStoreWater = 0;
    let firstBuilding, secondBuilding;
    for (let i = 0; i < buildingHeights.length - 2; i++) {
        for (let j = 2; j < buildingHeights.length; j++) {
            let fb = buildingHeights[i];
            let sb = buildingHeights[j];
            let storage = (fb - sb) * (j - i - 1);
            if (storage > maxStoreWater) {
                maxStoreWater = storage;
                firstBuilding = fb;
                secondBuilding = sb;
            }
        }
    }
    console.log(firstBuilding, secondBuilding, maxStoreWater)
})();
