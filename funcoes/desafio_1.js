// somxr(3)(4)(5)
const somar = function(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(somar(3)(4)(5))

const somarAB = somar(3)(4)
console.log(somarAB(5))

// calcular(3)(7)(fn)

const calcular = function(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

function subtrair(a, b){
    return a-b
}

function multipicar(a, b){
    return a*b
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multipicar)

console.log(r2)
