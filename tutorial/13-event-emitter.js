// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EvenEmitter = require('events');

const customEmitter = new EvenEmitter();
// on - listen for an event
// emit - emit an event
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response', 'Grigori', 33);
