/**
 * Created by amitthakkar on 23/11/16.
 */
/*
 * Design an OO parking lot. What classes and functions will it have. It should say, full, empty and also be able to
 * find spot for Valet parking. The lot has 3 different types of parking: regular, handicapped and compact.
 * */
class ParkingLot {
    var parkingLotSign = new ParkingLotSign();
    var parkingSpaces = [];
    spaceStatus = function () {

    };
    nearestParkingSpace = function () {

    };
    
}

class ParkingSpace {
    var location;//distance From
    var isOccupied;
    var spaceOccupied = function () {

    };
    var spaceFree = function () {

    };
}

class RegularParkingSpace extends ParkingSpace {

}

class HandicappedParkingSpace extends ParkingSpace {

}

class CompactParkingSpace extends ParkingSpace {

}

class Parker {
    var park = function () {

    };
    var unpark = function () {

    };
}

class ValetParker extends Parker {

}


class ParkingLotSign {
    isFull = function () {

    };
    isEmpty = function () {

    };
    isNormal = function () {

    };
}
