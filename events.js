const EventEmitter = require('node:events')

const emitter = new EventEmitter();

emitter.on('order-pizza',(size,topping)=>{
    console.log(`Order recived! Baking a ${size} pizza with ${topping}`);
})

emitter.on('order-fish',(size,topping)=>{
    console.log(`Order recived! Baking a ${size} fish with ${topping}`);
})
emitter.emit('order-fish','large','red chilli')

