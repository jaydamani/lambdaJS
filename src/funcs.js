const mostImportantFunction = x => x

const t = (a,b) => a
const f = (a,b) => b

const not = (a) => a(f,t)
const or = (a,b) => a(t,b)
const nor = (a,b) => a(f,not(b))
const and = (a,b) => a(b,f)
const nand = (a,b) => a(not(b),t)
const xor = (a,b) => a(b,not(b))
const xnor = (a,b) => a(not(b),b)

const pair = fst => snd => sel => sel(fst,snd)
const fst = t
const snd = f

const l = pair
const Null = f => f((x) => false)
const nill = (x) => true
const get = (l,n) => n(f) 


const zero = (a,b) => b
const one = (a,b) => a(b)

const isZero = (a) => a(x => f, t)
const LE = (a,b) => isZero(sub(a,b))
const L = (a,b) => not(GE(a,b))
const GE = (a,b) => isZero(sub(b,a))
const G = (a,b) => not(LE(a,b))
const Equals = (a,b) => and(LE(a,b),GE(a,b))

const succ = (a) => (x,y) => a(x,x(y))
const add = (a,b) => a(succ,b)
const pred = (a) => (x,y) => 
a(g => h => h(g(x)),(a) => y,x => x)
const sub = (a,b) => b(pred,a)

const mult = (a,b) => b(x => add(x,a),zero)
const divmod = (x,y) => {

    const dm = (a,b) => 
    L(b,y)
    (() => pair(a,b))
    (() => dm(succ(a),sub(b,y)))()
    return dm(zero,x)

}
const div = (x,y) => divmod(x,y,fst)
const mod = (x,y) => divmod(x,y,snd)


const exp = (a,b) => b(x => mult(a,x),one)

const two = succ(one)
const three = succ(two)
const four = succ(three)
const five = succ(four)
const ten = mult(five,two)



let num = 0
const fu = (x) => {return ++x}
const k = exp (ten,three)
console.log(mult(k,add(ten,two))(fu,0))