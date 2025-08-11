// console.log(parseFloat('3,14'))
// console.log(parseFloat(' 7.89 '))

// Diferença entre parseInt() parseFloat() Number

// console.log(Number('99.99reais'))
// console.log(parseInt('99.99reais'))
// console.log(parseFloat('99.99reais'))

// Casos Especiais

// Strings com espaços
console.log(parseInt('        333           ')) // 333

// Strings com sinal
console.log(parseInt('-500')) // -500

// Uso incorreto de vírgula decimal
console.log(parseFloat('4,99')) // 4

// NaN e como testar
console.log(isNaN(parseInt('Thank You'))) // true