const assert = require('assert')
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe('Park', function(){

  let park;
  let dinosaur1, dinosaur2, dinosaur3;

  beforeEach(function(){
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 100)
    dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 80)
    dinosaur3 = new Dinosaur('Velociraptor', 'Carnivore', 65)

    park = new Park('Disneyland', 10)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual('Disneyland', actual);
  });

  it('should have a price', function(){
    const actual = park.price;
    assert.strictEqual(10, actual);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual([], actual);
  });

  it('number of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  })

  it('should be able to add a dinosaur to collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)
  })

  it('should be able to remove a dinosaur', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur2)
    const actual = [dinosaur1]
    const expected = park.dinosaurs
    assert.deepStrictEqual(actual, expected)
  })

  it('should find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.mostVisitors()
    assert.strictEqual(actual, dinosaur1)
  })

  it('should find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const stegosaurus = park.findAll("stegosaurus");
    assert.deepStrictEqual([dinosaur2], stegosaurus);
  })

  it('should calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const visitors = park.dailyVisitors();
    assert.strictEqual(245 ,visitors);
  })

  it('should calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const yearly_visitors = park.yearlyVisitors();
    assert.strictEqual(89425, yearly_visitors);
  })

  it('should calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const income = park.yearlyIncome();
    assert.strictEqual(894250 ,income);
  })

  it('should remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.kill("stegosaurus");
    assert.strictEqual(2, park.dinosaurs.length);
  })

})
