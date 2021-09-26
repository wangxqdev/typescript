/* 解构 */
/* 函数声明 */
function f({ a, b = 0 } = { a: "" }): void {

}
// ok, default b = 0
f({ a: "yes" });
// ok, default to {a: ""}, which then defaults b = 0
f();
// error, 'a' is required if you supply an argument
// f({});