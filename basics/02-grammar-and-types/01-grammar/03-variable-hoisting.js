console.log(x === undefined) // true
var x = 3
console.log(x === undefined) // false



function local() {
    var myvar = "my value"
    console.log(myvar) // undefined
    var myvar = 'local value'
    console.log(myvar)
}

local()

