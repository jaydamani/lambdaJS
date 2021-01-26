const t = (a,b) => a
const f = (a,b) => b

const not = (a) => a(f,t)

const or = (a,b) => a(t,b)
const nor = (a,b) => a(f,not(b))

const and = (a,b) => a(b,f)
const nand = (a,b) => a(not(b),t)

const xor = (a,b) => a(b,not(b))
const xnor = (a,b) => a(not(b),b)

const zero = (a,b) => b
const one = (a,b) => a(b)

const add = (a,b) => (x,y) => a(x,b(x,y))
const mult = (a,b) => (x,y) => a(y => b(x,y),y)
const exp = (a,b) => (x,y) => a()

let num = 0
const fu = (x) => ++x

const two = add(one,one)

console.log(mult(add(two,two),add(two,two))(fu,0))