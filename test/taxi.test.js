"use strict";
const Taxi = require('../taxi');
const Driver = require('../drivers');
const assert = require('assert');


describe("Taxi function", function() {
    it('Should get the model of the car', function() {
        let taxi101 = new Taxi("A4", "2015", "Audi", 123);
        assert.equal('A4', taxi101.model);
    })

    it('Should get the years of the car', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567);
        assert.equal(2005, taxi101.year);
    })


    it('Should get the make of the car', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567);
        assert.equal("Toyota", taxi101.make);
    })

    it('Should get the capacity of the car', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567);
        assert.equal(567, taxi101.capacity);
    })
    it('should get the start point of the taxi', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567, "cape town", "waterfront");
        assert.equal("cape town", taxi101.startLocation)
    })
    it('should get the finishing point of the taxi', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567, "cape town", "waterfront");
        assert.equal("waterfront", taxi101.endLocation)
    })
    it('should get the route the taxi is driving on', function() {
        let taxi101 = new Taxi("A73", 2005, "Toyota", 567, "cape town", "waterfront");
        assert.equal("cape town, waterfront route", taxi101.route())
    })
})

describe("Driver function", function() {
    it('should get the cell number of the driver', function() {
        let driver101 = new Driver("John", "Doe", 0733176291, "CY 234")
        assert.equal(0733176291, driver101.cellNumber)
    })

    it('Should get the last name of the driver', function() {
        let driver101 = new Driver("John", "Doe", 0733176291, "CY 234")
        assert.equal("Doe", driver101.lastName)
    })
    it('Should get the first name of the driver', function() {
        let driver101 = new Driver("John", "Doe", 0733176291, "CY 234")
        assert.equal("John", driver101.firstName)
    })
    it('Should get the license number of the the driver', function() {
        let driver101 = new Driver("John", "Doe", 0733176291, "23457857")
        assert.equal("23457857", driver101.license)
    })

})
