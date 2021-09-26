/* 接口初探 */
// function
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// interface
interface LabelledValue {
    label: string
}
function printLabel2(labelValue: LabelledValue) {
    console.log(labelValue.label);
}
let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);

/* 可选属性 */
interface SquareConfig {
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): /* 返回值 */ { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
}
console.log(createSquare({ color: "black" }));

/* 只读属性 */
interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 };

/* 函数类型 */
interface SearchFunc {
    (source: string, substring: string): boolean;
}
let mySearch: SearchFunc = function (source: string, substring: string): boolean {
    let result: number = substring.search(source);
    return result > -1;
}

/* 可索引的类型 */
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// error!
// myArray[2] = "Mallory"; 

/* 类类型 */
interface ClockInterface {
    tick(): void;
}
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {

    constructor(hour: number, minute: number) { };

    tick(): void {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {

    constructor(hour: number, minute: number) { };

    tick(): void {
        console.log("tick tick");
    }
}
let digital: ClockInterface = createClock(DigitalClock, 14, 38);
let analog: ClockInterface = createClock(AnalogClock, 14, 38);
digital.tick();
analog.tick();

/* 继承接口(多继承) */
interface Sharp {
    color: string;
}
interface Square extends Sharp {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);

/* 混合类型 */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter: Counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

/* 接口继承类 */
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}