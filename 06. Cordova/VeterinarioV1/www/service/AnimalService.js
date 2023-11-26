import { Animal } from "../model/Animal.js";

export function getAnimals() {
  const animal1 = new Animal(1, "Bob", "M", null, "DOG");
  const animal2 = new Animal(2, "Pluto", "M", 345, "DOG");
  const animal3 = new Animal(3, "Misi", "F", 567, "CAT");
  const animal4 = new Animal(4, "Rex", "M", 967, "DOG");
  const animal5 = new Animal(5, "Osiris", "M", 482, "CAT");
  const animal6 = new Animal(6, "Boira", "F", null, "CAT");
  const animal7 = new Animal(7, "Cinamon", "M", 583, "HORSE");

  return [animal1, animal2, animal3, animal4, animal5, animal6, animal7];
}

export function getAnimal(idAnimal) {
  const animals = getAnimals();

  /*
  for(let i = 0; i<animals.length; i++){
    if(animal[i].id === idAnimal){
        return animal[i];
    }
  }
  */

  return animals.find((ani) => ani.id === idAnimal);
}

function getDogs() {
  const animals = getAnimals();
  var isDog =  function (animal) {
    return animal.type === "DOG";
  }
  return animals.filter(isDog);
}
