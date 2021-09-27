/* 交叉类型 */
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
    // 断言→类型转换
    (<any>result[id]) = (<any>first[id]);
  }
  for (let id in second) {
    if (result.hasOwnProperty(id)) {
      continue;
    }
    // 断言→类型转换
    (<any>result[id]) = (<any>second[id]);
  }
  return result;
}
class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log(): void {

  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

/* 类型保护与区分类型 */
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
function getSmallPet(): Fish | Bird {
  return {
    swim: () => { },
    layEggs: () => { },
  }
}
let pet = getSmallPet();
// 断言→类型转换
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else {
  (<Bird>pet).fly();
}

/* 用户自定义的类型保护 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/* typeof 类型保护 */
/* instanceof 类型保护 */

/* 类型别名 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

/* 接口 vs. 类型别名 */
type Alias = { num: number }
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

/* 可辨识联合 */
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
  }
}

/* 索引类型 */
// keyof T: 索引类型查询操作符
// T[K]: 索引访问操作符
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: 'Jarid',
  age: 35
};
let strings: string[] = pluck(person, ['name']);
console.log(strings);

/* 索引类型和字符串索引签名 */
interface Map2<T> {
  [key: string]: T;
}
let keys: keyof Map2<number>;
let value: Map2<number>['foo'];

/* 映射类型 */
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
type Partial2<T> = { [P in keyof T]?: T[P] };
type PersonReadOnly = ReadOnly<Person>;
type PersonPartial = Partial2<Person>;

type Proxy<T> = {
  get(): T;
  set(value: T): void;
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
}
function proxify<T>(o: T): Proxify<T> { }
/* 由映射类型进行推断 */
function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T;
  for (const k in t) {
    result[k] = t[k].get();
  }
  return result;
}
