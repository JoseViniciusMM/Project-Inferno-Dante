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
        // ANOTAÇÃO: Nova variável de estado para controlar o acesso ao final lúcido.
        temChaveDaVerdade: false,
        jogoTerminou: false,
    };

    renderizarSaida("Bem-vindo ao Inferno de Dante, aventureiro!");
    renderizarSaida("Você foi morto e busca vingança e redenção neste labirinto sombrio.");
    renderizarSaida("Mas saiba: neste abismo, a salvação é uma ilusão");
    renderizarSaida("------------------------------------------------------------------");

    while (!estadoJogo.jogoTerminou) {
        const dadosLocalizacaoAtual = obterDadosLocalizacao(estadoJogo, dadosJogo);

        renderizarSaida(`\n--- Você está em: ${dadosLocalizacaoAtual.demonio ? 'Círculo da ' + dadosLocalizacaoAtual.demonio.nome : estadoJogo.nomeCirculoAtual.toUpperCase()} ---`);
        renderizarSaida(dadosLocalizacaoAtual.descricao);

        // ANOTAÇÃO: A verificação de fim do jogo deve acontecer AQUI.
        // Se a localização atual já for um final, o jogo termina.
        verificarCondicaoFim(estadoJogo, dadosLocalizacaoAtual);
        if (estadoJogo.jogoTerminou) {
            exibirMensagemFinal(dadosLocalizacaoAtual);
            break;
        }

        gerirInteracaoDemonio(estadoJogo, dadosLocalizacaoAtual, dadosJogo);

        renderizarSaida("\n**Para onde você tenta ir?** (N, S, L, O)");
        const comando = obterComandoJogador("Sua tentativa de movimento > ");
        
        // ANOTAÇÃO: Passando 'dadosJogo' para a função poder acessar outras salas se necessário.
        processarMovimentoJogador(comando, estadoJogo, dadosLocalizacaoAtual, dadosJogo);
    }
}

// ANOTAÇÃO: Você precisará de um arquivo 'utils.js' com a função 'prompt-sync' ou similar
// para que `obterComandoJogador` funcione em um ambiente Node.js.
// Exemplo de utils.js:
// import promptSync from 'prompt-sync';
// export const prompt = promptSync();

iniciarJogo();