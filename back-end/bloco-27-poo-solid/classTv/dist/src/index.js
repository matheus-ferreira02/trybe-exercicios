"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    turnOn() {
        console.log(this.brand);
        console.log(this.size);
        console.log(this.resolution);
        console.log(this.connections);
    }
}
const television = new Tv('Philco', 22, 'Full HD', 'HDMI');
television.turnOn();
