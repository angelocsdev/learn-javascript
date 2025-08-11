const inputNumero = document.getElementById('numero');
const selectBase = document.getElementById('radix');
const buttonConverter = document.getElementById('converter');
const divResultados = document.getElementById('resultados');

buttonConverter.addEventListener('click',function() {
    const valorDigitado = inputNumero.value;
    const baseEscolhida = parseInt(selectBase.value);
    
    const regexBinario = /^[0-1]+$/;
    const regexOctal = /^[0-7]+$/;
    const regexDecimal = /^[0-9]+$/;
    const regexHexa = /^[0-9a-fA-F]+$/;

    let regex;

    switch (baseEscolhida) {
    case 2: regex = regexBinario; break;
    case 8: regex = regexOctal; break;
    case 10: regex = regexDecimal; break;
    case 16: regex = regexHexa; break;
    default: regex = null;
    }

    if (!regex || !regex.test(valorDigitado)) {
    divResultados.innerHTML = '<p>Valor inválido para a base escolhida.</p>';
    inputNumero.focus();
    return;
    }
    

    const decimal = parseInt(valorDigitado, baseEscolhida);

    if (isNaN(decimal)) {
        divResultados.innerHTML = '<p>Valor inválido para a base escolhida.</p>';
        return;
    }


    // Converte decimal para cada uma das entradas
    const binario = decimal.toString(2);
    const octal = decimal.toString(8);
    const hexa = decimal.toString(16).toUpperCase();

    
    // Exibe os resultados
    divResultados.innerHTML = `
        <p>Decimal: ${decimal}</p>
        <p>Binário: ${binario}</p>
        <p>Octal: ${octal}</p>
        <p>Hexadecimal: ${hexa}</p>
    `;

    

    



})




