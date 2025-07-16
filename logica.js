
import { prompt } from './utils.js';


function renderizarSaida(texto) {
    console.log(texto);
}

function obterComandoJogador(mensagem) {
    return prompt(mensagem).toLowerCase().trim();
}

function obterDadosLocalizacao(estadoJogo, dadosJogo) {
    return dadosJogo[estadoJogo.nomeCirculoAtual];
}

function gerirInteracaoDemonio(estadoJogo, dadosLocalizacao) {
    const { demonio } = dadosLocalizacao;

    if (!demonio) {
        return;
    }

    renderizarSaida(`\nVocê encontra ${demonio.nome}.`);

    if (!demonio.podeInteragir) {
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogo}"`);
        renderizarSaida(`(A voz de ${demonio.nome} ecoa em sua mente...)`);
        return;
    }

    const escolha = obterComandoJogador(`Você deseja conversar com ${demonio.nome}? (sim/nao) `);

    if (escolha === "sim") {
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogo}"`);
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogoAceite}"`);
        if (estadoJogo.nomeCirculoAtual === "Luxúria") {
            estadoJogo.aceitouAVerdade = true;
            renderizarSaida("\nA partir de agora, as revelações dos demônios se tornam mais claras...");
        }
    } else {
        renderizarSaida(`\nVocê ignora ${demonio.nome}.`);
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogoRecuse}"`);
        if (estadoJogo.nomeCirculoAtual === "Luxúria") {
            renderizarSaida("\nVocê fechou seus ouvidos para as palavras do demônio...");
        }
    }
}

function processarMovimentoJogador(comando, estadoJogo, dadosLocalizacao) {
    const direcao = comando.toUpperCase();
    const rotasDisponiveis = dadosLocalizacao.rotas[direcao];

    if (!rotasDisponiveis) {
        renderizarSaida("\nEssa direção não parece existir neste lugar infernal. Tente outra direção.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * rotasDisponiveis.length);
    const proximoCirculoNome = rotasDisponiveis[indiceAleatorio];
    
    estadoJogo.nomeCirculoAtual = proximoCirculoNome;
    renderizarSaida("\nVocê avançou para: ???. A escuridão te arrasta mais fundo.");
}

function verificarCondicaoFim(estadoJogo) {
    if (estadoJogo.nomeCirculoAtual === "Traição") {
        renderizarSaida("\nVocê chegou ao círculo mais profundo do Inferno. Não há mais para onde descer.");
        estadoJogo.jogoTerminou = true;
    }
}

function exibirMensagemFinal(estadoJogo, dadosJogo) {
    renderizarSaida("\n--- O FIM INEVITÁVEL ---");
    
    const chaveFinal = estadoJogo.aceitouAVerdade ? "SOFRIMENTO_CONSCIENTE" : "SOFRIMENTO_ILUDIDO";
    const dadosDoFinal = dadosJogo[chaveFinal];

    renderizarSaida(dadosDoFinal.descricao);
    renderizarSaida("\nFim da jornada do aventureiro. O Inferno reivindicou sua alma.");
}

export {
    renderizarSaida,
    obterComandoJogador,
    obterDadosLocalizacao,
    gerirInteracaoDemonio,
    processarMovimentoJogador,
    verificarCondicaoFim,
    exibirMensagemFinal
};