const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

//method returns the system Uptime in seconds
console.log(`The systems Uptime in seconds is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
