const events = require('events');
const util = require('util');

// events is a constructor
const fartEmitter = new events.EventEmitter();

// events.on()
fartEmitter.on('fart', (fartNoise) => console.log(fartNoise));

// events.emit()
fartEmitter.emit('fart', 'faaaaaaaaaaaaart!');

////////////////////////////////////////////////////////////////

// add EventEmitter to custom Object
class Person {
  constructor(name) {
    this.name = name
  }
}

// Person inherits EventEmitter
util.inherits(Person, events.EventEmitter);

// create a new Person
const sean = new Person('Sean');
console.log(sean);

// create custom event emitter
sean.on('speak', (msg) => console.log(`${ sean.name } said ${ msg }`));

// emit event emitter
sean.emit('speak', 'Sup and shit!');
