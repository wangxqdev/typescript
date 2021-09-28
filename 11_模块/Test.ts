/* 默认导入 */
// import validator from "./ZipCodeValidator";
// import validate from "./StaticZipCodeValidator";
import zip = require("./ZipCodeValidator");

// let myValidator = new validator();

const strings: string[] = ["Hello", "98052", "101"];
// strings.forEach(s => console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`));
let validator = new zip();
/* export = 和 import = require() */
strings.forEach(s => console.log(`"${s}" ${validator.isAcceptable(s) ? "matches" : "does not match"}`));
