const prompt = require("prompt-sync")();
const { circulosInferno } = require("./circulos.js");

let localizacaoAtual = circulosInferno["Limbo"];
let expostoVerdadeInferno = false; // Flag para determinar o tipo de sofrimento final

console.log("Bem-vindo ao Inferno de Dante, aventureiro!");
console.log("Você foi morto e busca vingança e redenção neste labirinto sombrio.");
console.log("Mas saiba: neste abismo, a salvação é uma ilusão");
console.log("------------------------------------------------------------------");

while (true) {
    const nomeCirculoAtual = Object.keys(circulosInferno).find(key => circulosInferno[key] === localizacaoAtual);

    console.log(`\n--- Você está no círculo: ${nomeCirculoAtual.toUpperCase()} ---`);
    console.log(localizacaoAtual.descricao);

    // Interação com o Demônio
    if (localizacaoAtual.demonio) {
        console.log(`\nVocê encontra ${localizacaoAtual.demonio.nome}.`);

        if (localizacaoAtual.demonio.podeInteragir) {
            const escolhaConversar = prompt(`Você deseja conversar com ${localizacaoAtual.demonio.nome}? (sim/nao) `).toLowerCase();
            if (escolhaConversar === "sim") {
                console.log(`\n${localizacaoAtual.demonio.nome}: "${localizacaoAtual.demonio.dialogo}"`);
                console.log(`\n${localizacaoAtual.demonio.nome}: "${localizacaoAtual.demonio.dialogoAceite}"`);
                if (localizacaoAtual === circulosInferno["Luxúria"]) {
                    expulsoVerdadeInferno = true; // Ponto de não retorno para a verdade do inferno
                    console.log("A partir de agora, as revelações dos demônios se tornam mais claras. Sua mente se abre para uma nova (e terrível) verdade.");
                }
            } else {
                console.log(`\nVocê ignora ${localizacaoAtual.demonio.nome}.`);
                console.log(`\n${localizacaoAtual.demonio.nome}: "${localizacaoAtual.demonio.dialogoRecuse}"`);
                if (localizacaoAtual === circulosInferno["Luxúria"]) {
                    // Se ele recusar Asmodeus, a flag permanece false. Ele continua buscando uma salvação ilusória.
                    console.log("Você fechou seus ouvidos para as palavras do demônio, mantendo suas convicções... por enquanto.");
                }
            }
        } else { // Demônios dos círculos 3 em diante, interação é forçada
            console.log(`\n${localizacaoAtual.demonio.nome}: "${localizacaoAtual.demonio.dialogo}"`);
            console.log(`(A voz de ${localizacaoAtual.demonio.nome} ecoa em sua mente, plantando sementes de dúvida e desespero...)`);
        }
    }

    // Se chegou ao último círculo, Traição, o jogo se encaminha para o final
    if (localizacaoAtual === circulosInferno["Traição"]) {
        console.log("\nVocê chegou ao círculo mais profundo do Inferno. Não há mais para onde descer, apenas a aceitação final ou a negação eterna.");
        console.log("Lúcifer te confronta com sua 'verdade'.");
        // A escolha final será feita automaticamente aqui, ou pedimos uma última "ação"
        break; // Sai do loop para processar o final
    }

    // Comandos de movimento
    let direcaoValida = false;
    let comando;

    console.log("\n**Para onde você tenta ir?** (N, S, L, O)");
    console.log("Lembre-se: O labirinto do Inferno é traiçoeiro e seus caminhos são imprevisíveis.");

    while (!direcaoValida) {
        comando = prompt("Sua tentativa de movimento > ").toUpperCase();

        if (circulosInferno[nomeCirculoAtual].rotas[comando]) {
            // Seleciona um dos 3 destinos possíveis aleatoriamente
            const destinosPossiveis = circulosInferno[nomeCirculoAtual].rotas[comando];
            const indiceAleatorio = Math.floor(Math.random() * destinosPossiveis.length);
            const proximoCirculoNome = destinosPossiveis[indiceAleatorio];

            localizacaoAtual = circulosInferno[proximoCirculoNome];
            console.log(`Você avançou para: ???. A escuridão te arrasta mais fundo.`);
            direcaoValida = true;
        } else {
            console.log("Essa direção não parece existir neste lugar infernal. Você permanece no círculo atual. Tente outra direção.");
        }
    }
}

// Lógica para determinar o final após sair do loop (geralmente ao chegar à Traição)
console("\n--- O FIM INEVITÁVEL ---");

if (localizacaoAtual === circulosInferno["Traição"]) {
    if (expulsoVerdadeInferno) {
        // Se o aventureiro foi exposto à verdade do inferno (conversou com Asmodeus)
        // E chegou ao círculo final, ele atinge o sofrimento consciente.
        localizacaoAtual = circulosInferno["SOFRIMENTO_CONSCIENTE"];
    } else {
        // Se não foi exposto à verdade (recusou Asmodeus), mas chegou ao final,
        // ele cai no sofrimento iludido, ainda buscando algo que não existe.
        localizacaoAtual = circulosInferno["SOFRIMENTO_ILUDIDO"];
    }
} else {
    // Caso o loop termine de forma inesperada (ex: sem caminhos em um círculo intermediário)
    // Isso poderia ser um "CONSUMIDO_VINGANCA" se ele apenas vagueou sem propósito.
    // Para simplificar, vou direcionar para SOFRIMENTO_ILUDIDO ou SOFRIMENTO_CONSCIENTE
    // com base na flag, mesmo que não tenha chegado ao fim natural.
    if (expulsoVerdadeInferno) {
        localizacaoAtual = circulosInferno["SOFRIMENTO_CONSCIENTE"];
    } else {
        localizacaoAtual = circulosInferno["SOFRIMENTO_ILUDIDO"];
    }
}

console.log(localizacaoAtual.descricao);
console.log("\nFim da jornada do aventureiro. O Inferno reivindicou sua alma.");;