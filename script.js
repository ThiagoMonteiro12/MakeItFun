let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abrirFecharMenu() {

    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")

        iconex.style.display = "inline"

        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")

        iconex.style.display = "none"
        
        iconeBarras.style.display = "inline"
    }
}

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-text").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para a api
    // 127.0.0.1 = localhost
    // Método HTTP POST - Create -> Cadastrar ou criar 
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        // Limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        // CASO ERRO - alert com msg erro
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}