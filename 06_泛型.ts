/* Hello World */
function identity<T>(arg: T): T {
    return arg;
}
// 函数声明
let myIdentity: <T>(arg: T) => T = identity;

/* 泛型接口 */
interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity2: GenericIdentityFn<number> = identity;

/* 泛型类 */
class GenericNumber<T> {
    zeroValue: T;
    // 函数声明
    add: (x: T, y: T) => T;
}
let genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;
genericNumber.add = function (x, y) { return x + y };

/* 在泛型里使用类类型 */
class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}
// function createInstance<T extends Animal>(c: new () => T);
function createInstance<T extends Animal>(c: { new(): T }): T {
    return new c();
}