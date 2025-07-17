// logica.js 
import { prompt } from './utils.js';

// --- ARTE ASCII PARA O FINAL ---
const DEMONIO_ROSTO_1 = `
⡯⡯⡯⣯⢯⢿⢽⠝⡰⡭⣫⡓⠝⠈⠑⠉⠈⠑⠙⠝⣸⢿⡽⣯⢿⣽⣻⡽⡨⡊
⡯⡯⣟⣽⢽⢯⢋⢔⢽⠉⢁⢠⡰⣬⡪⠬⢄⡡⡠⠄⠈⢿⡽⡯⣟⣾⣳⡯⢏⠯
⡯⡿⡽⣞⡯⡏⡢⡡⠁⠰⠘⠘⢼⡰⢔⠖⣆⠬⠐⠁⢂⠈⢻⣽⣻⣞⡷⡏⡰⢈
⡯⣟⡽⠓⠋⠁⣠⠄⠠⠑⠐⠑⠄⢀⠈⠉⡀⠈⠐⠐⠐⠄⠄⣁⠑⠑⠻⣳⢵⣳
⣈⣀⢤⢤⢶⡻⠃⠄⡢⠓⠁⠐⢀⠑⠍⢉⠃⠁⠐⠄⠂⠆⠄⠙⠽⡦⣄⠈⠙⠺
⠓⡩⠩⠩⠃⠄⠄⠄⢅⢰⠉⢰⡀⡰⣴⡢⠄⠢⣗⠁⡆⠄⠄⠄⠄⠈⠝⠩⠢⠄
⠄⠄⠁⠌⠂⡲⡄⠄⡪⣂⢉⢈⡰⣺⣺⢽⣀⠁⡀⡀⠄⠂⠄⡯⡛⠌⠄⠡⠨⠈
⣠⢤⣀⣀⡀⠄⠄⠄⢈⠪⡲⣵⠉⠈⠈⠍⠈⠁⣗⢆⠊⠄⢀⣀⣀⢤⣲⡒⡠⠄
⡯⣯⢯⣟⡾⡽⡶⣄⠄⢂⠩⡺⡥⡦⣕⣤⡢⠈⢎⠐⠄⡰⣯⢷⣻⢽⣝⡇⣴⡕
⡯⣗⣿⣺⢽⡪⡯⣻⡄⠐⠨⡘⠌⠉⠈⠈⠨⢑⢀⠊⢠⢿⢽⣝⠮⠋⠐⠘⠑⠁
⠯⢗⣗⡯⣷⢝⠮⠳⢉⠄⠑⢔⢄⠄⠄⠄⠄⢀⢌⠂⣈⠋⠓⢁⣁⣤⣶⣗⣷⢿
⣤⣄⣀⣀⣀⣀⣤⣴⢽⣏⠄⠘⢜⡘⠜⡌⢇⠕⠄⢠⡯⣟⣽⣻⣽⣟⣾⣽⡾⣿
⣿⢽⣯⢿⣻⣽⢷⣻⣽⣞⣦⣄⣀⣀⠁⡈⣀⡠⡴⡯⡯⣗⣯⡿⣾⣽⢾⣷⣻⣟
⡯⣿⢾⣟⣯⣿⣻⣯⡷⣟⣞⢾⣝⡾⡽⣮⡳⡯⣫⢯⢯⣻⣞⣿⣳⣟⡿⣞⣷⣻
⢝⣞⣯⣟⣷⢯⣷⢿⣽⣟⣾⣳⣗⡯⣟⡾⡽⣝⣗⡯⣗⢷⣻⣽⢷⣻⣟⣽⢞⢮
`;
const DEMONIO_ROSTO_2 = `
 ⣠⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡄⣄⠀⠀⠀
 ⠀⠀⠀⢂⠏⡴⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣜⠳⡍⢢⠁⠀⠀⠀⠀⠀
 ⠀⠀⠀⠈⠘⡔⣫⢞⣤⣶⣾⣶⣿⣿⣷⣶⣶⣿⣿⣶⣿⣶⣍⡣⢈⠆⠁⠀⠀⠀⠀⠀
 ⠀⠀⠀⠀⠘⣽⠿⠿⠿⣿⣯⣿⡿⣯⢿⣿⣿⣿⡯⢜⡱⢫⣿⠷⠯⣄⠀⠀⠀⠀
 ⠀⠀⠀⠀⢸⣽⠀⠀⡀⠀⠉⢷⣿⣿⣿⣿⣿⡿⣽⢪⣝⠋⡀⠀⠀⠸⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
 ⠀⠀⠀⢠⣾⠇⠀⠀⠀⠀⠀⣀⠻⣿⣿⣿⣿⣿⣽⣧⢇⠀⠀⠀⠀⠈⣆⠀⠀⠀⠀
 ⠀⠀⠀⣿⢿⣿⣦⣤⣤⣤⣶⣿⣷⣻⣟⣿⣿⣿⣿⣾⣏⡳⢶⣤⣴⣴⡣⠆⠀⠀
 ⠀⠀⢀⣯⣟⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⡟⣿⢻⠟⢷⠛⠝⠫⣟⠿⣭⡓⠆⠀⠀⠀⠀
 ⠀⠀⠀⣿⣾⣟⡾⣽⢻⣿⣿⣿⣿⣿⠳⠉⠆⢉⠈⠄⠂⠈⠀⢈⣿⣲⠹⠀⠀⠀
 ⠀⠀⠀⣿⣷⣏⣞⡽⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⣈⡷⣭⢳⡄⠀⠀
 ⠀⠀⠀⣿⣿⣾⡽⣾⣿⣿⠿⡿⢛⠏⢯⡙⠲⡀⠀⠀⠀⢀⠰⡈⡑⠎⡹⠀⠀⠀
 ⠀⣠⣾⣿⣿⣿⣿⣿⣏⣏⠳⡑⢊⠜⠠⠈⠁⠐⠀⠀⠀⠀⠂⠐⠀⠂⠡⠁⠀⠀
 ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣮⡱⣀⠂⡈⠀⠠⠀⠀⠀⠀⠀⠀⢀⠀⠀⠈⠀⠀⠀⠀
 ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣳⢿⡱⢃⠤⠁⡀⠀⠀⠀⠀⢀⠈⢀⠈⠀⠀⠀⠀
 ⣿⣿⣿⣿⣿⣟⡻⣝⠞⣭⠲⡉⢋⠤⢁⠀⠈⠀⠄⠁⠀⠀⡀⠠⠀⠀⠀
`;


// --- FUNÇÕES DE EXIBIÇÃO E ENTRADA ---
function renderizarSaida(texto) { console.log(texto); }
function obterComandoJogador(mensagem) { return prompt(mensagem).toLowerCase().trim(); }

function exibirStatus(dadosLocalizacaoAtual) {
    renderizarSaida(`\n--- ${dadosLocalizacaoAtual.nome.toUpperCase()} ---`);
    renderizarSaida(dadosLocalizacaoAtual.descricao);
    if (dadosLocalizacaoAtual.item) {
        renderizarSaida(`Você nota algo no chão: ${dadosLocalizacaoAtual.item.nome}.`);
    }
    const saidasDisponiveis = Object.keys(dadosLocalizacaoAtual.rotas).join(', ');
    renderizarSaida(`Saídas no mapa: ${saidasDisponiveis}`);
}

// ANOTAÇÃO: Esta é a nova função de ajuda.
function exibirAjuda() {
    renderizarSaida("\nComando não reconhecido. Sua mente confusa tenta se focar no que é possível fazer aqui:");
    renderizarSaida("- Para Mover:       'n', 's', 'l', 'o'");
    renderizarSaida("- Para Interagir:   'conversar'");
    renderizarSaida("- Para Coletar:     'pegar'");
    renderizarSaida("- Para Ver Itens:   'inventario'");
}

// --- FUNÇÕES DE ESTADO E FINAIS ---
function obterDadosLocalizacao(estadoJogo, dadosJogo) { 
    const dados = dadosJogo[estadoJogo.nomeCirculoAtual];
    dados.nome = estadoJogo.nomeCirculoAtual;
    return dados;
}
function verificarCondicaoFim(estadoJogo, dadosLocalizacao) {
    if (dadosLocalizacao.ehFinal) {
        estadoJogo.jogoTerminou = true;
    }
}
function exibirMensagemFinal(dadosLocalizacao) {
    renderizarSaida("\n--- O FIM INEVITÁVEL ---");
    renderizarSaida(dadosLocalizacao.descricao);
    renderizarSaida("\nFim da jornada. O Inferno reivindicou sua alma.");
}
async function iniciarFinalLoopSofrimento() {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const mensagens = [
        "A verdade foi negada.", "Apenas o sofrimento é real.",
        "Sua ausência de escolha é sua prisão.", "Não há mais caminho.",
        "Apenas o vazio.", "Eternamente..."
    ];
    let i = 0;
    while (true) {
        console.clear();
        renderizarSaida(DEMONIO_ROSTO_1);
        renderizarSaida(`\n... ${mensagens[i % mensagens.length]} ...`);
        await delay(2000);
        console.clear();
        renderizarSaida(DEMONIO_ROSTO_2);
        renderizarSaida(`\n... ${mensagens[(i + 1) % mensagens.length]} ...`);
        await delay(2000);
        i++;
    }
}

// --- LÓGICA DE INTERAÇÃO ---
async function gerirInteracaoDemonio(estadoJogo, dadosLocalizacao) {
    const { demonio } = dadosLocalizacao;
    if (!demonio || !demonio.podeInteragir) {
        renderizarSaida("\nNão há com quem conversar aqui.");
        return;
    }
    if (demonio.interacao && demonio.interacao.opcoes) {
        renderizarSaida(`\n${demonio.interacao.saudacao}`);
        demonio.interacao.opcoes.forEach((opcao, index) => renderizarSaida(`${index + 1}: ${opcao.texto}`));
        const escolha = obterComandoJogador(`Sua escolha (1-${demonio.interacao.opcoes.length}) > `);
        const indiceEscolha = parseInt(escolha) - 1;
        if (indiceEscolha >= 0 && indiceEscolha < demonio.interacao.opcoes.length) {
            renderizarSaida(`\n${demonio.nome}: ${demonio.interacao.opcoes[indiceEscolha].resposta}`);
        } else {
            renderizarSaida("\nVocê hesita e perde a oportunidade. O demônio te encara com indiferença.");
        }
    } else if (demonio.tipoInteracao === 'escolhaChave' && !estadoJogo.escolhaHeresiaFeita) {
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogo}"`);
        renderizarSaida(`${demonio.nome}: "${demonio.dialogoEscolha}"`);
        const escolhaChave = obterComandoJogador(`Aceitar o fragmento? (sim/nao) > `);
        if (escolhaChave === "sim") {
            renderizarSaida("\nVocê aceita a dolorosa verdade. Um caminho se abre à sua frente.");
            estadoJogo.escolhaHeresiaFeita = true;
        } else {
            renderizarSaida("\nVocê recua. Sua recusa em ver a verdade é sua sentença final. Sua alma, desprovida de propósito, agora está presa a este lugar.");
            await obterComandoJogador("\nPressione ENTER para aceitar seu destino...");
            await iniciarFinalLoopSofrimento();
        }
    } else if (demonio.tipoInteracao === 'escolhaChave' && estadoJogo.escolhaHeresiaFeita) {
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogoPosEscolha}"`);
    } else {
        renderizarSaida(`\n${demonio.nome}: "${demonio.dialogo}"`);
    }
}

// --- LÓGICA DE MOVIMENTO ---
function processarMovimentoJogador(comando, estadoJogo, dadosLocalizacao, dadosJogo) {
    const direcao = comando.toUpperCase();
    const proximoCirculoNome = dadosLocalizacao.rotas[direcao];
    if (!proximoCirculoNome) {
        renderizarSaida(`\nEssa direção não parece existir. Você continua em: ${estadoJogo.nomeCirculoAtual.toUpperCase()}.`);
        return;
    }
    if (proximoCirculoNome === "Limbo" && estadoJogo.saiuDoLimbo) {
        renderizarSaida("\nUma força invisível sela o caminho atrás de você. Não há como voltar ao Limbo.");
        return;
    }
    if (proximoCirculoNome === "Final Lúcido" && !estadoJogo.temChaveDaVerdade) {
        renderizarSaida("\nA porta à sua frente parece selada. Falta algo... uma verdade que você se recusa a ver.");
        return;
    }
    if (estadoJogo.nomeCirculoAtual === "Limbo") {
        estadoJogo.saiuDoLimbo = true;
        renderizarSaida("\nAo deixar o Limbo, você sente a passagem atrás de você se fechar para sempre...");
    }
    estadoJogo.nomeCirculoAtual = proximoCirculoNome;
}

// --- LÓGICA DE ITENS E INVENTÁRIO ---
function pegarItem(estadoJogo, dadosLocalizacao) {
    if (!dadosLocalizacao.item) {
        renderizarSaida("\nNão há nada para pegar aqui.");
        return;
    }
    const item = dadosLocalizacao.item;
    renderizarSaida(`\nVocê pegou: ${item.nome}.`);
    estadoJogo.inventario.push(item);
    if (item.id === "FRAGMENTO_VERDADE") {
        estadoJogo.temChaveDaVerdade = true;
    }
    delete dadosLocalizacao.item;
}

function exibirInventario(estadoJogo) {
    if (estadoJogo.inventario.length === 0) {
        renderizarSaida("\nSeu inventário está vazio.");
        return;
    }
    renderizarSaida("\n--- INVENTÁRIO ---");
    estadoJogo.inventario.forEach(item => {
        renderizarSaida(`- ${item.nome}: ${item.descricao}`);
    });
    renderizarSaida("------------------");
}

// --- PROCESSADOR DE COMANDOS PRINCIPAL ---
async function processarComando(comando, estadoJogo, dadosLocalizacao, dadosJogo) {
    const direcoes = ['n', 's', 'l', 'o'];
    if (direcoes.includes(comando)) {
        processarMovimentoJogador(comando, estadoJogo, dadosLocalizacao, dadosJogo);
    } else {
        switch (comando) {
            case 'conversar':
                await gerirInteracaoDemonio(estadoJogo, dadosLocalizacao);
                break;
            case 'pegar':
                pegarItem(estadoJogo, dadosLocalizacao);
                break;
            case 'inventario':
                exibirInventario(estadoJogo);
                break;
            default:
                exibirAjuda();
        }
    }
}

export {
    renderizarSaida, obterComandoJogador, obterDadosLocalizacao,
    processarComando, verificarCondicaoFim, exibirMensagemFinal, exibirStatus
};
