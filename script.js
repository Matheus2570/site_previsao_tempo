const key = "d66bf5931873a371e489e02f31dc2d82";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temperatura").innerHTML = `${dados.main.temp}°C`;
    document.querySelector(".textoPrevisao").innerHTML = dados.weather[0].description; 
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
    document.querySelector(".imagemPrevisao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    document.querySelector(".blocoIconeDoTempo").style.display = "flex";
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".inputPesquisa").value;
    buscarCidade(cidade);
}
