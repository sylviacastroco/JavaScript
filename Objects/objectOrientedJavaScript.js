  //add class 
  //add a constructor method inside the class
  //outline properties that class will have
  //when we create object we invoke the constructor method
  //passing parameters
  //class is blueprint - object is factory with blueprints inside

//instantiate an empty class 
  class Pet {
    constructor(animal, breed, age, sound) {
    this.animal = animal;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
  }
    
    //adding a getter method
    get activity(){
      const today = new Date();
      const hour = today.getHours(); 
    
      if ( hour > 8 && hour <= 20){
      return 'playing';
      } else {
      return 'sleeping';
      }
    }
    
    //add getter for setter
     get owner(){
       return this._owner;
     }
   
    //adding a setter
    set owner(owner){
      this._owner = owner;
      console.log(`setter called: ${owner}`);
    }
    
    //adding methods to class
    //methods do not use function keyword
    speak(){
    console.log(this.sound);
  }
}

class Owner {
  constructor(name, address){
    this.name = name;
    this.address = address;
  }

  set phone(phone){
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone(){
    return this._phone;
  }
}

//class declaration
const ernie = new Pet('dog', 'pug', 1, 'yip yip');
const vera = new Pet('dog', 'border collie', 6, 'woof');
const scofield = new Pet('dog', 'doberman', 8, 'wee wee');

//direct property access while providing method
ernie.owner = 'Ashley';
console.log(ernie.owner);


//set ernie to a new instance of the owner flass
ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';
console.log(ernie.owner.name);
console.log(ernie.owner.phone);

//log the class declaration
console.log(ernie);
console.log(vera);
console.log(scofield);

console log get method
console.log(ernie.activity);
console.log(vera.activity);
console.log(scofield.activity);

//log ernie object as a whole
onsole.log(ernie);

//call the method that was instantiated
ernie.speak();
vera.speak();
