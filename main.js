// main.js (Versão Final e Corrigida)
import dadosJogo from './dadosJogo.js';
import {
    renderizarSaida, obterComandoJogador, obterDadosLocalizacao,
    processarComando, verificarCondicaoFim, exibirMensagemFinal,
    exibirStatus
} from './logica.js';

// ANOTAÇÃO 1: A função agora precisa ser 'async' para poder usar 'await' dentro dela.
async function iniciarJogo() {
    const estadoJogo = {
        nomeCirculoAtual: "Limbo",
        inventario: [],
        temChaveDaVerdade: false,
        escolhaHeresiaFeita: false,
        saiuDoLimbo: false,
        jogoTerminou: false
    };

    renderizarSaida("Bem-vindo ao Inferno de Dante, aventureiro!");
    renderizarSaida("Você foi morto e busca vingança e redenção neste labirinto sombrio.");
    renderizarSaida("------------------------------------------------------------------");
    renderizarSaida("\nSua alma desperta, confusa. Um instinto sombrio sussurra como interagir com este plano:");
    renderizarSaida("- Use [N, S, L, O] para se mover entre os círculos.");
    renderizarSaida("- Use [Conversar] para interagir com as entidades.");
    renderizarSaida("- Use [Pegar] para apanhar itens e [Inventario] para ver o que carrega.");
    renderizarSaida("------------------------------------------------------------------");

    while (!estadoJogo.jogoTerminou) {
        const dadosLocalizacaoAtual = obterDadosLocalizacao(estadoJogo, dadosJogo);

        verificarCondicaoFim(estadoJogo, dadosLocalizacaoAtual);
        if (estadoJogo.jogoTerminou) {
            exibirMensagemFinal(dadosLocalizacaoAtual);
            break;
        }

        exibirStatus(dadosLocalizacaoAtual);
        
        const comando = obterComandoJogador("\nO que você faz? > ");
        
        // ANOTAÇÃO 2: Adicionamos 'await' aqui. O loop vai pausar e esperar a conclusão do comando.
        await processarComando(comando, estadoJogo, dadosLocalizacaoAtual, dadosJogo);
    }
}

iniciarJogo();