// let menu = document.queryselector("#menu")
var cond;
window.onload = () => {
if (window.innerWidth > 1299) {
    iconeX.style.display = "none"
    cond = 0
    menu.classList.remove("menu-fechado")
    iconesBarras.style.display= "none"
}
}

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
       cond = 0  
    }
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")
        
        // Mostrar icone X
        iconeX.style.display = "none"

        // Esconder icone Barras
        iconesBarras.style.display= "inline"
        cond = 1
    }
}

window.onresize = () => {
    if (window.innerWidth > 1299 && menu.classList.contains("menu-fechado")) {
        cond = 0
        menu.classList.remove("menu-fechado") 
    } 
    if (window.innerWidth > 1299) {
        iconeX.style.display = "none"

        iconesBarras.style.display= "none"
        
    } else if (cond == 0 ) {
        iconeX.style.display = "inline"
        
    } else {
        iconesBarras.style.display= "inline"
    }
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