/// <reference path="animals.ts" />
console.log ('main.ts');

let animals = new Animals();
animals.showAnimals();
animals.addAnimal('Lehm');
animals.showAnimals();
animals.removeAnimal(1);
animals.showAnimals();
(async() =>{
    console.log(await Helper.getHTMLTemplate('animal-template.htm'));
})();
console.log('Hello')