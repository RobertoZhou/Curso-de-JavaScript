function fatorial(num) {
    fat = 1
    for(let cont = num; cont > 1; cont--) {
        fat *= cont
    }
    return fat
}

// 5! = 5 x 4 x 3 x 2 x 1 = 120

console.log(fatorial(5))