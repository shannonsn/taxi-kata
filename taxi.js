module.exports = function Taxi(model, year, make, capacity, startLocation, endLocation) {
    this.model = model;
    this.year = year;
    this.make = make;
    this.capacity = capacity;
    this.startLocation = startLocation;
    this.endLocation = endLocation;

    this.route = () => {
        if (this.startLocation && this.endLocation) {
            return startLocation +", " + endLocation + " route"
        }
    }
}
