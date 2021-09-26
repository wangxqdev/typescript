/* 布尔值 */
let isDone: boolean = false;
/* 数字 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
/* 字符串 */
let _name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${_name}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);
/* 数组 */
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];
/* 元组 Tuple */
let x: [string, number];
x = ['hello', 10];
/* 枚举 */
enum Color {
  RED = 1, YELLOW, BLUE
}
let c: Color = Color.BLUE;
let cName: string = Color[2];
/* Any */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
/* Void */
function warnUser(): void {
  console.log("This is my warning message");
}
/* Null 和 Undefined */
let u: undefined = undefined;
let n: null = null;
/* Never */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {

  }
}
/* Object */
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
create(undefined);
/* 类型断言 */
let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;