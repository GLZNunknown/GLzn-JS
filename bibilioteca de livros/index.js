const livroForm = document.querySelector('#adicionar-livro form');
const livroList = document.querySelector('#livros');
const livroRemoverForm = document.querySelector('#remover-livro form');
const pesquisaForm = document.querySelector('#pesquisar-livro form');
const pesquisaResult = document.querySelector('#resultado-da-pesquisa');

livroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = livroForm.elements.titulo.value.trim();
    const autor = livroForm.elements.autor.value.trim();
    const ano = livroForm.elements.ano.value.trim();
    if (titulo === '' || autor === '' || ano === '') {
        alert('Preencha todos os campos');
        return;
    }
    const livro = {
        titulo,
        autor,
        ano
    };
    const li = document.createElement('li');
    li.textContent = `${titulo} - ${autor} - ${ano}`;
    livroList.appendChild(li);
    livroForm.reset();
});

livroRemoverForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = livroRemoverForm.elements.tituloRemover.value.trim();
    if (titulo === '') {
        alert('Preencha o campo de título');
        return;
    }
    const livros = Array.from(livroList.children);
    const livroParaRemover = livros.find(livro => livro.textContent.includes(titulo));
    if (!livroParaRemover) {
        alert('Livro não encontrado');
        return;
    }
    livroList.removeChild(livroParaRemover);
    livroRemoverForm.reset();
});

pesquisaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pesquisa = pesquisaForm.elements.pesquisa.value.trim();
    if (pesquisa === '') {
        alert('Preencha o campo de pesquisa');
        return;
    }
    const livros = Array.from(livroList.children);
    const livrosPesquisados = livros.filter(livro => livro.textContent.toLowerCase().includes(pesquisa.toLowerCase()));
    if (livrosPesquisados.length === 0) {
        alert('Nenhum livro encontrado');
        return;
    }
    pesquisaResult.innerHTML = '';
    livrosPesquisados.forEach(livro => {
        const li = document.createElement('li');
        li.textContent = livro.textContent;
        pesquisaResult.appendChild(li);
    });
    pesquisaForm.reset();
});
