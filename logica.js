import { prompt } from './utils.js'; // Supondo que você tenha um utils.js para o prompt

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
    const { demonio, item } = dadosLocalizacao;

    if (item) {
        // Se houver um item na sala, o jogador o obtém.
        renderizarSaida(`\nVocê encontrou: ${item.nome}. ${item.descricao}`);
        if (dadosLocalizacao === dadosJogo["SalaSecreta"]) {
            estadoJogo.temChaveDaVerdade = true;
        }
    }

    if (!demonio) return;

    renderizarSaida(`\nVocê encontra ${demonio.nome}.`);
    renderizarSaida(`\n${demonio.nome}: "${demonio.dialogo}"`);

    // ANOTAÇÃO: Lógica de interação especial baseada em 'tipoInteracao'
    if (demonio.podeInteragir && demonio.tipoInteracao === 'escolhaChave') {
        renderizarSaida(`${demonio.nome}: "${demonio.dialogoEscolha}"`);
        const escolha = obterComandoJogador(`Aceitar o fragmento? (sim/nao) `);

        if (escolha === "sim") {
            renderizarSaida("\nVocê decide encarar a verdade, não importa o quão dolorosa seja.");
            // O jogador será movido para a sala secreta no próximo passo
        } else {
            renderizarSaida("\nVocê recua, temendo o que pode descobrir. A ignorância é uma benção temporária.");
            // Impede o jogador de ir para a SalaSecreta
            dadosLocalizacao.rotas["N"] = "sala5"; // Altera a rota N para não levar a lugar nenhum efetivamente
        }
    }

    if (demonio.dialogo2) {
        renderizarSaida(`${demonio.nome}: "${demonio.dialogo2}"`);
    }
}

function processarMovimentoJogador(comando, estadoJogo, dadosLocalizacao, dadosJogo) {
    const direcao = comando.toUpperCase();
    const proximoCirculoNome = dadosLocalizacao.rotas[direcao];

    if (!proximoCirculoNome) {
        renderizarSaida("\nEssa direção não parece existir neste lugar infernal. Tente outra direção.");
        return;
    }

    // ANOTAÇÃO: Condição para acessar o Final Lúcido
    if (proximoCirculoNome === "FinalLucido" && !estadoJogo.temChaveDaVerdade) {
        renderizarSaida("\nA porta à sua frente parece selada por uma força que você não compreende. Falta algo... uma verdade que você se recusa a ver.");
        return; // Impede o movimento
    }

    estadoJogo.nomeCirculoAtual = proximoCirculoNome;
    // Ocultar o nome do próximo círculo adiciona mistério
    // renderizarSaida(`\nVocê avançou para: ${proximoCirculoNome}. A escuridão te arrasta mais fundo.`);
}

function verificarCondicaoFim(estadoJogo, dadosLocalizacao) {
    // ANOTAÇÃO: A condição de fim agora é baseada em uma propriedade da sala.
    if (dadosLocalizacao.ehFinal) {
        estadoJogo.jogoTerminou = true;
    }
}

function exibirMensagemFinal(dadosLocalizacao) {
    // ANOTAÇÃO: A mensagem final é simplesmente a descrição da sala final.
    renderizarSaida("\n--- O FIM INEVITÁVEL ---");
    renderizarSaida(dadosLocalizacao.descricao);
    renderizarSaida("\nFim da jornada. O Inferno reivindicou sua alma.");
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