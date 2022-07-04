const os = require('os');

console.log(os.userInfo());

console.log(`System is running for ---> ${os.uptime()} seconds`);

console.log('Release--->', os.release());

console.log('Total Memory--->', os.totalmem());

console.log('Free Memory --->', os.freemem());