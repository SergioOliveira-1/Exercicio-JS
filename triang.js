let L1 = 2
let L2 = 2
let L3 = 1

if (L1 === L2 && L2 === L3) {
    console.log("Equilátero")
} else if (L1 === L2 || L2 === L3 || L1 === L3) {
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}
