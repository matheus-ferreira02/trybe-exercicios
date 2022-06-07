"use strict";
var Metric;
(function (Metric) {
    Metric["Meters"] = "Meters";
    Metric["Kilometers"] = "Kilometers";
})(Metric || (Metric = {}));
class House {
    constructor(size, metric, location) {
        this.size = size,
            this.metric = metric,
            this.location = location;
    }
}
;
