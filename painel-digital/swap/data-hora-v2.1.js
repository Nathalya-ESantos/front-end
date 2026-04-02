const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');

const temas = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    }
};

function aplicarEstilos(elemento, estilo) {
    Object.assign(elemento.style, estilo);
}

function atualizarPainel() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    let saudacao = ''

    if (horaAtual < 12) {
        saudacao = 'Bom dia';
    } else if (horaAtual < 18)
        {saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }

    recepcao(saudacao)
}


function diaSemana(){
    const agora = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    elDataCompleta.textContent = dataFormatada;
}
diaSemana()

function recepcao(saudacao){
    const agora = new Date();
    elBoasVindas.textContent = `Olá, ${saudacao}!`;
    elRelogio.textContent = agora.toLocaleTimeString('pt-BR');
}0

// Adicionando ao DOM
document.body.append(elBoasVindas, elRelogio, elDataCompleta);

setInterval(atualizarPainel, 1000)
atualizarPainel()