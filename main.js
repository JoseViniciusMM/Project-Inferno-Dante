import dadosJogo from './dadosJogo.js';
import {
    renderizarSaida,
    obterComandoJogador,
    obterDadosLocalizacao,
    gerirInteracaoDemonio,
    processarMovimentoJogador,
    verificarCondicaoFim,
    exibirMensagemFinal
} from './logicaJogo.js';


function iniciarJogo() {

    const estadoJogo = {
        nomeCirculoAtual: "Limbo",
        aceitouAVerdade: false,
        jogoTerminou: false,
    };

    renderizarSaida("Bem-vindo ao Inferno de Dante, aventureiro!");
    renderizarSaida("Você foi morto e busca vingança e redenção neste labirinto sombrio.");
    renderizarSaida("Mas saiba: neste abismo, a salvação é uma ilusão");
    renderizarSaida("------------------------------------------------------------------");

    while (!estadoJogo.jogoTerminou) {
        const dadosLocalizacaoAtual = obterDadosLocalizacao(estadoJogo, dadosJogo);

        renderizarSaida(`\n--- Você está no círculo: ${estadoJogo.nomeCirculoAtual.toUpperCase()} ---`);
        renderizarSaida(dadosLocalizacaoAtual.descricao);

        gerirInteracaoDemonio(estadoJogo, dadosLocalizacaoAtual);

        verificarCondicaoFim(estadoJogo);
        if (estadoJogo.jogoTerminou) break;

        renderizarSaida("\n**Para onde você tenta ir?** (N, S, L, O)");
        const comando = obterComandoJogador("Sua tentativa de movimento > ");
        
        processarMovimentoJogador(comando, estadoJogo, dadosLocalizacaoAtual);
    }

    exibirMensagemFinal(estadoJogo, dadosJogo);
}

iniciarJogo();