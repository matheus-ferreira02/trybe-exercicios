"use strict";
var sizeDog;
(function (sizeDog) {
    sizeDog["Small"] = "Small";
    sizeDog["Medium"] = "Medium";
    sizeDog["Bigger"] = "Bigger";
})(sizeDog || (sizeDog = {}));
class Dog {
    constructor(name, breed, age, size) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.size = size;
    }
}
;
