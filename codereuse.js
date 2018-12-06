//Capital letter denotes something other than a standard variable 

// function(){
//   var something = '0' //closure, function that returns another function
//   return function(){
//     return someValue + someOtherValue
//   }
// }



var extend = function(obj1, obj2){
  for (var key in obj2){
    obj1[key] = obj2[key]
  }
};

var Dog = function(dog){
  var obj = {}
  obj.name = dog.name;
  obj.breed = dog.breed;
  obj.age = dog.age;
  obj.happiness = dog.happiness;
  obj.hunger = dog.hunger;
  obj.energy = dog.energy;
  extend(obj, Dog.methods)
	return obj;
}

Dog.methods = {
  feed : function(food){
    if(this.hunger - food > 0) {
        this.hunger -= food;
      } else {
        this.hunger = 0;
      }
      return this.hunger;
  },    
  play : function(time){
    if(this.happiness + time < 100){
      this.happiness += time;
    } else{
      this.happiness = 100;
    }
     if(this.energy - time > 0){
      this.energy -= time;
    } else{
      this.energy = 0;
    }
    return this.happiness;
 },
  nap: function(time){
    if (this.energy + time < 100){
      this.energy += time;
    } else{
      this.energy = 100;
    }
    return this.energy;
 }        
}

 var doggie = Dog({
  name: 'Scout',
  breed: ['Husky', 'German Shepherd'],
  age: 4,
  happiness: 50,
  hunger: 10,
  energy: 100,
  });


// console.log(Dog.prototype)
// console.log(doggie)
console.log(doggie.nap(5))

