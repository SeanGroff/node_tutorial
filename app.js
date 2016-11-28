const E = require('events');

const fartEmitter = new E.EventEmitter();

fartEmitter.on('fart', (fartNoise) => console.log(fartNoise));

fartEmitter.emit('fart', 'faaaaaaaaaaaaart!');