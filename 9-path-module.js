const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//get last path name in a path sequence
const base = path.basename(filePath);
console.log(base);

//return absolute path including current directory
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
