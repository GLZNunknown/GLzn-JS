const botao = document.querySelector('button');
const ul = document.querySelector('ul');

botao.addEventListener('click', () => {
    const link = prompt("Insira o novo link que você quer colocar");
    const nomeDoLink = prompt('Insira o nome do link');

    if (link && nomeDoLink) {
        const novoItem = document.createElement('li');
        const novoLink = document.createElement('a');

        novoLink.href = link;
        novoLink.textContent = nomeDoLink;  // Adiciona o texto do link aqui
        novoLink.target = "_blank"; // Abre o link em uma nova aba, opcional

        novoItem.appendChild(novoLink);  // Adiciona o link ao item da lista
        ul.prepend(novoItem);  // Adiciona o item da lista à ul
    }
});
