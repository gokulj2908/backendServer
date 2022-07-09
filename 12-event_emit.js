const moment = require('moment');
const EventEmitter = require('events');

const event = new EventEmitter();  //on and emit


event.on(
    'login',
    (mobile) => {
        console.log(`LOGIN EVENT from ${mobile} ON  ${moment().format('DDMMYY')}`);
    }
);

event.emit('login', 9876543210);