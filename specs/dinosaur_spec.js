const assert = require('assert')
const Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 'Carnivore', 100)
  })

  it('should have a species', function(){
    const actual = dinosaur.species;
    assert.strictEqual('T-Rex', actual);
  });

  it('should have a diet', function(){
    const actual = dinosaur.diet;
    assert.strictEqual('Carnivore', actual);
  });

  it('should have an average number of daily visitors', function(){
    const actual = dinosaur.visitors;
    assert.strictEqual(100, actual);
  });

})
