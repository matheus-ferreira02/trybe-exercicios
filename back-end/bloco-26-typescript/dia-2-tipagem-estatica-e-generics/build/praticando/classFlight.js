"use strict";
var TypeAirplane;
(function (TypeAirplane) {
    TypeAirplane["Commercial"] = "Commercial";
    TypeAirplane["Private"] = "Private";
})(TypeAirplane || (TypeAirplane = {}));
class Flight {
    constructor(airplane, origin, destiny) {
        this.airplane = airplane;
        this.origin = origin;
        this.destiny = destiny;
    }
}
;
