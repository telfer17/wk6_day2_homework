const Park = function(name, price, dinosaurs){
  this.name = name
  this.price = price
  this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(position, 1)
};

Park.prototype.mostVisitors = function (dinosaur) {
  let most = dinosaurs[0]
  for (let dinosaur of dinosaurs){
    if (dinosaur.visitors > most.visitors)
    most = dinosaur
  }
  return most
};


module.exports = Park
