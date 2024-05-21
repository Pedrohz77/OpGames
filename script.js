// let menu = document.queryselector("#menu")
let menu = document.getElementsByClassName("menu")[0]
let iconesBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")
function abrirFecharMenu() {
   
    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abri o menu
        menu.classList.remove("menu-fechado")

       // Mostrar icone X
       iconeX.style.display = "inline"

       // Esconder icone Barras
       iconesBarras.style.display= "none"
        
    }
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")
        
        // Mostrar icone X
        iconeX.style.display = "none"

        // Esconder icone Barras
        iconesBarras.style.display= "inline"

    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconesBarras.style.display= "none"
}

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