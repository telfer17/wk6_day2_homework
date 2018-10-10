const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(position, 1);
};

Park.prototype.mostVisitors = function (dinosaur) {
  let highest = this.dinosaurs[0];
  for (let dino of this.dinosaurs){
    if (dino.visitors > highest.visitors)
    highest = dino
  }
  return highest
};


Park.prototype.findAll = function (species) {
  let filtered_dinos = [];
  for (let dino of this.dinosaurs){
    if (dino.species.toLowerCase() === species.toLowerCase()){
      filtered_dinos.push(dino);
    }
  }
  return filtered_dinos;
};


Park.prototype.dailyVisitors = function () {
  let total = 0;
  for(let dino of this.dinosaurs){
    total += dino.visitors;
  }
  return total;

};


Park.prototype.yearlyVisitors = function () {
  return this.dailyVisitors() * 365;
};


Park.prototype.yearlyIncome = function () {
  return this.price * this.yearlyVisitors();
};



module.exports = Park
