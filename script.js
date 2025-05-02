let num = document.getElementById('txtn');
let lista = document.getElementById('flista');
let res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        let numero = Number(num.value);
        valores.push(numero);

        let item = document.createElement('option');
        item.text = `O valor ${numero} foi adicionado à lista.`;
        lista.appendChild(item);

        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já adicionado!');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        res.innerHTML = '';
        let tot = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce((a, b) => a + b, 0);
        let media = soma / tot;
        let ordemDecrescente = [...valores].sort((a, b) => b - a);

        res.innerHTML += `<p>🔢 Ao todo, foram cadastrados <strong>${tot}</strong> números.</p>`;
        res.innerHTML += `<p>📈 O maior valor foi <strong>${maior}</strong>.</p>`;
        res.innerHTML += `<p>📉 O menor valor foi <strong>${menor}</strong>.</p>`;
        res.innerHTML += `<p>➕ A soma dos valores é <strong>${soma}</strong>.</p>`;
        res.innerHTML += `<p>📊 A média dos valores é <strong>${media.toFixed(2)}</strong>.</p>`;
        res.innerHTML += `<p>🔽 Ordem decrescente: <strong>${ordemDecrescente.join(', ')}</strong></p>`;
        res.innerHTML += `<p>🧠 Comparações:</p>`;

        for (let i = 0; i < valores.length - 1; i++) {
            let a = valores[i];
            let b = valores[i + 1];
            if (a < b) {
                res.innerHTML += `<p>O ${a} é menor que o ${b}</p>`;
            } else if (a > b) {
                res.innerHTML += `<p>O ${a} é maior que o ${b}</p>`;
            } else {
                res.innerHTML += `<p>O ${a} é igual ao ${b}</p>`;
            }
        }
    }
}
