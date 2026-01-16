function carregarMissoes(url) {
    fetch(url)
    .then(res => res.json())
    .then(dados => {
        const ul = document.getElementById("lista-missoes");
        ul.innerHTML = "";

        //pegar o nome de cada missao e mostrar no html
        for(let i = 0; i < dados.length; i ++) {
            const li = document.createElement("li");
            li.textContent = `${dados[i].id} - ${dados[i].nome} (${dados[i].status})`;
            ul.appendChild(li);
        }
    })
  .catch(err => console.log(err));
}

function criarMissao(url) {
    const formCriar = document.getElementById("form-criar-missao");

    formCriar.addEventListener("submit", (event) => {
        event.preventDefault();

        const novaMissao = {
            nome: formCriar.nome.value,
            tripulacao: formCriar.tripulacao.value,
            nave: formCriar.nave.value,
            destino: formCriar.destino.value,
            status: formCriar.status.value,
            duracao: formCriar.duracao.value
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novaMissao)
        })

        .then(res =>res.json())
        .then(resposta => {
            console.log(resposta);
            formCriar.reset();
            carregarMissoes(url);
        })
        .catch(err => console.log(err));

    });
}

function atualizarMissao(url) {
    const formAtualizar = document.getElementById("form-atualizar-missao");

    formAtualizar.addEventListener("submit", (event) => {
        event.preventDefault();

        const id = formAtualizar.id.value;

        const novaMissao = {
            nome: formAtualizar.nome.value,
            tripulacao: formAtualizar.tripulacao.value,
            nave: formAtualizar.nave.value,
            destino: formAtualizar.destino.value,
            status: formAtualizar.status.value,
            duracao: Number(formAtualizar.duracao.value)
        };

        fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novaMissao)
        })

        .then(res =>res.json())
        .then(resposta => {
            console.log(resposta);
            formAtualizar.reset();
            carregarMissoes(url);
        })
        .catch(err => console.log(err));

    });
    
}

function deletarMissao(url) {
    const formDeletar = document.getElementById("form-deletar-missao");

    formDeletar.addEventListener("submit", (event) => {
        event.preventDefault();

        const id = formDeletar.id.value;

        fetch(`${url}/${id}`, {
            method: "DELETE",
        })
        .then(res => {
            console.log(res);
            formDeletar.reset();
            carregarMissoes(url);
        })
        .catch(err => console.log(err));

    });
    
}



//chamar a funcao
const api_url = "http://localhost:3000/missions";
carregarMissoes(api_url);
criarMissao(api_url);
atualizarMissao(api_url);
deletarMissao(api_url);