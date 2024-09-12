const altura = document.getElementById('altura');
const largura = document.getElementById('largura');
const precoM2 = document.getElementById('precoM2');
const resultado = document.getElementById('resultado');

function calcular(){
    const area = parseFloat(altura.value) * parseFloat(largura.value);
    const preco = area * parseFloat(precoM2.value);
     resultado.innerHTML = `O preço da peça é de R$ ${preco.toFixed(2)}`;
    resultado.classList.add('resultado');



}

altura.addEventListener('change', calcular);
largura.addEventListener('change', calcular);
precoM2.addEventListener('change', calcular);
