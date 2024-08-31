const lista = [3,2,1]
let min = lista[0]
let max = lista[0]

for (let item of lista){
    if (item > max){
        max = item
    } else if (item < min){
        min = item
    }
}
console.log(min)
console.log(max)