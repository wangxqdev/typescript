let sym = Symbol("key");
let sym2 = Symbol("key");
console.log(sym === sym2);

let obj = {
  [sym]: "value",
}
console.log(obj[sym]);

const getClassNameSymbol = Symbol();
class C {
  [getClassNameSymbol]() {
    return "C";
  }
}

let c: C = new C();
console.log(c[getClassNameSymbol]());
