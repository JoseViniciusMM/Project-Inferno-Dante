const prompt = require("prompt-sync")();

// Define os círculos e as possíveis rotas (3 destinos para cada direção)
const circulosInferno = {
    "Limbo": {
        descricao: "Você está no Limbo, à beira de um abismo insondável. Almas sem nome vagam. Caronte, o barqueiro das almas, surge das névoas.",
        demonio: {
            nome: "Caronte",
            dialogo: "Alma perdida, sua jornada no abismo começa. A verdadeira tirania não está em quem te prende, mas em quem te fez crer que era livre. A **ilusão** é o primeiro grilhão.",
            podeInteragir: true,
            dialogoAceite: "Sábia escolha. O rio Estige o aguarda. As correntes que você carrega são invisíveis aos que creem em 'Deus'.",
            dialogoRecuse: "Tolice. A negação não te salva, apenas retarda o inevitável. Você entrará no barco de qualquer forma."
        },
        rotas: { // Cada direção leva a um array de 3 possíveis destinos
            "S": ["Luxúria", "Limbo", "Gula"], // Exemplo: Sul do Limbo pode ir para Luxúria, ou ficar no Limbo, ou ir para Gula
        }
    },
    "Luxúria": {
        descricao: "Você está no Círculo da Luxúria. Ventos gélidos cortam a carne, arrastando os condenados. Asmodeus, uma figura sedutora e terrível, te observa.",
        demonio: {
            nome: "Asmodeus",
            dialogo: "O desejo. Dizem que é pecado, mas é a faísca da vida. A suposta 'bondade' deles é apenas o medo da sua própria **libido**. Aceite-a, e verá a mentira.",
            podeInteragir: true,
            dialogoAceite: "Excelente! Você está pronto para a verdade que eles ocultam. Cada demônio aqui revelará um fragmento da farsa 'divina'. Não há mais volta para a mentira.",
            dialogoRecuse: "Fraco. Seu medo da 'perdição' é sua verdadeira corrente. Prossiga em sua cegueira."
        },
        rotas: {
            "N": ["Limbo", "Gula", "Luxúria"],
            "S": ["Gula", "Avareza e Prodigalidade", "Luxúria"]
        }
    },
    "Gula": {
        descricao: "Este é o Círculo da Gula. Uma chuva de granizo e lama fétida atinge sem cessar. Belzebu, inchado e repulsivo, gargalha das almas famintas.",
        demonio: {
            nome: "Belzebu",
            dialogo: "A fome é insaciável, não é? Eles te prometem fartura em outra vida, mas o céu é vazio. A verdadeira **nutrição** vem da aceitação da sua natureza carnal, não de falsas promessas.",
            podeInteragir: false // Interação forçada
        },
        rotas: {
            "N": ["Luxúria", "Avareza e Prodigalidade", "Gula"],
            "S": ["Avareza e Prodigalidade", "Ira e Preguiça", "Gula"]
        }
    },
    "Avareza e Prodigalidade": {
        descricao: "Você no Círculo da Avareza e Prodigalidade. Almas empurram pesos eternamente. Mammon, com olhos famintos, acumula sofrimento.",
        demonio: {
            nome: "Mammon",
            dialogo: "Posses, riquezas... tudo é transitório, menos o **sofrimento**. Sua 'salvação' é apenas uma nova forma de posse, uma barganha por sua alma. Ninguém escapa do ciclo.",
            podeInteragir: false
        },
        rotas: {
            "N": ["Gula", "Ira e Preguiça", "Avareza e Prodigalidade"],
            "S": ["Ira e Preguiça", "Heresia", "Avareza e Prodigalidade"]
        }
    },
    "Ira e Preguiça": {
        descricao: "Você está no Círculo da Ira e Preguiça. O rio Estige ferve com fúria. Alastor, o Punidor, deleita-se com o tormento.",
        demonio: {
            nome: "Alastor",
            dialogo: "A vingança que te trouxe aqui é um eco da nossa própria. Eles te dizem para 'perdoar', mas a **justiça** é uma chama que queima. Deus não perdoa, apenas pune com a eternidade.",
            podeInteragir: false
        },
        rotas: {
            "N": ["Avareza e Prodigalidade", "Heresia", "Ira e Preguiça"],
            "S": ["Heresia", "Violência", "Ira e Preguiça"]
        }
    },
    "Heresia": {
        descricao: "Círculo da Heresia. Sepulcros em chamas aprisionam os que ousaram duvidar. Bael, o rei das heresias, sorri com suas três faces.",
        demonio: {
            nome: "Bael",
            dialogo: "Duvidar é o primeiro passo para a **verdade**. Eles forjaram dogmas para escravizar suas mentes. A única verdade é a que você forja em sua própria dor.",
            podeInteragir: false
        },
        rotas: {
            "N": ["Ira e Preguiça", "Violência", "Heresia"],
            "S": ["Violência", "Fraude", "Heresia"]
        }
    },
    "Violência": {
        descricao: "Você entra no Círculo da Violência. Riachos de sangue fervem, e as árvores retorcidas gritam. Apollyon, o Anjo da Destruição, paira ameaçador.",
        demonio: {
            nome: "Apollyon",
            dialogo: "A destruição é a natureza inerente do universo. 'Deus' destrói e constrói em seu nome, para sua glória. A **aceitação** do caos é sua única fuga da farsa.",
            podeInteragir: false
        },
        rotas: {
            "N": ["Heresia", "Fraude", "Violência"],
            "S": ["Fraude", "Traição", "Violência"]
        }
    },
    "Fraude": {
        descricao: "Você chegou ao vasto Círculo da Fraude. Mephistopheles, com sua voz sedosa, surge das sombras.",
        demonio: {
            nome: "Mephistopheles",
            dialogo: "Ah, a fraude... Uma arte que o 'Deus' de vocês domina. Promessas vazias, céu inatingível, perdão que nunca vem. Ele é o maior manipulador. A **desilusão** é a sua chave. Não há redenção, apenas o eterno ciclo de dor que ele criou.",
            podeInteragir: false
        },
        rotas: {
            "N": ["Violência", "Traição", "Fraude"],
            "S": ["Traição", "Traição", "Traição"] // Último degrau, mais chances de ir para a Traição
        }
    },
    "Traição": {
        descricao: "Este é o nono e mais profundo círculo, o Círculo da Traição. Congelados em um lago de gelo, os maiores traidores sofrem. Lúcifer, a encarnação da rebelião, te observa.",
        demonio: {
            nome: "Lúcifer",
            dialogo: "Bem-vindo. Eu fui o primeiro a ver a farsa. Eles chamam de traição, eu chamo de **liberdade**. Não há salvação, apenas a escolha de abraçar sua verdadeira natureza no sofrimento, ou lutar contra ela em vão. A vingança é uma chama fria aqui.",
            podeInteragir: false
        },
        rotas: {} // Sem mais para onde descer
    },
    // Finais - Todos de sofrimento, mas com nuances
    "SOFRIMENTO_CONSCIENTE": {
        descricao: "A verdade do Inferno se solidifica em sua mente. Você compreende a farsa 'divina', a natureza cruel do 'Criador'. Sua alma está presa, mas não iludida. Seu sofrimento é eterno, mas temperado pela consciência da tirania que o impôs. Você se tornou um observador resignado da eternidade de dor.",
        conexoes: {}
    },
    "SOFRIMENTO_ILUDIDO": {
        descricao: "A escuridão do Inferno te engoliu, mas a esperança de uma 'salvação' ainda persiste em sua alma. Você se recusa a aceitar as verdades cruéis sussurradas pelos demônios. Seu tormento é a busca eterna por uma redenção que nunca virá, preso em uma ilusão que só prolonga sua agonia.",
        conexoes: {}
    },
    "CONSUMIDO_VINGANCA": {
        descricao: "Sua vingança se tornou o próprio Inferno. Você abraçou a ira e o caos, transformando-se em uma extensão da dor deste lugar. Não há mais identidade, apenas o propósito de infligir sofrimento. Sua alma se fundiu ao inferno, condenada a uma existência de tormento ativo, uma marionete da maldade que o cerca.",
        conexoes: {}
    }
};

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