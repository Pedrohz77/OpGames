






const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log(valorNome)
    console.log(valorEmail)
    console.log(valorDescricao)
    
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }
    
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        document.querySelector ("#cadastro form").reset()
        
        alert("Solicitação enviada")
    })
    .catch(erro => {
        
        console.error(erro)
        alert("Erro desconhecido")
    })

    event.preventDefault()
}