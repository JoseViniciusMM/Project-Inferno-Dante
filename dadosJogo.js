// ANOTAÇÃO: Arquivo renomeado de Circulos.js para dadosJogo.js para bater com o import.

const dadosJogo = {
    // --- CÍRCULOS PRINCIPAIS ---
    "Limbo": {
        descricao: "Você está no Limbo, à beira de um abismo insondável. Almas sem nome vagam. Caronte, o barqueiro das almas, surge das névoas.",
        demonio: {
            nome: "Caronte",
            dialogo: "Alma perdida, sua jornada no abismo começa. A verdadeira tirania não está em quem te prende, mas em quem te fez crer que era livre.",
            podeInteragir: false // Interação automática
        },
        rotas: {
            "N": "sala2",
            "O": "sala1",
            "L": "sala3"
        }
    },
    "sala1": { // Luxúria
        descricao: "Você está no Círculo da Luxúria. Ventos gélidos cortam a carne, arrastando os condenados. Bael, uma figura sedutora e terrível, te observa.",
        demonio: {
            nome: "Bael",
            dialogo: "O desejo. Dizem que é pecado, mas é a faísca da vida. A suposta 'bondade' deles é apenas o medo da sua própria *libido*. Aceite-a, e verá a mentira.",
            podeInteragir: false
        },
        rotas: {
            "N": "sala4",
            "L": "sala2",
            "S": "Limbo"
        }
    },
    "sala2": { // Gula
        descricao: "Este é o Círculo da Gula. Uma chuva de granizo e lama fétida atinge sem cessar. Belzebu, inchado e repulsivo, gargalha das almas famintas.",
        demonio: {
            nome: "Belzebu",
            dialogo: "A fome é insaciável, não é? Eles te prometem fartura em outra vida, mas o céu é vazio. A verdadeira *nutrição* vem da aceitação da sua natureza carnal.",
            podeInteragir: false
        },
        rotas: {
            "N": "sala5",
            "O": "sala1",
            "L": "sala3",
            "S": "Limbo"
        }
    },
    "sala3": { // Avareza
        descricao: "Você está no Círculo da Avareza. Almas empurram pesos eternamente. Mammon, com olhos famintos, acumula sofrimento.",
        demonio: {
            nome: "Mammon",
            dialogo: "Posses, riquezas... tudo é transitório, menos o *sofrimento*. Sua 'salvação' é apenas uma nova forma de posse, uma barganha por sua alma.",
            podeInteragir: false
        },
        rotas: {
            "N": "sala6",
            "O": "sala2",
            "S": "Limbo"
        }
    },
    "sala4": { // Ira
        descricao: "Você está no Círculo da Ira. O rio Estige ferve com fúria. Alastor, o Punidor, deleita-se com o tormento.",
        demonio: {
            nome: "Alastor",
            dialogo: "A vingança que te trouxe aqui é um eco da nossa própria. Eles te dizem para 'perdoar', mas a *justiça* é uma chama que queima. Deus não perdoa, apenas pune com a eternidade.",
            podeInteragir: false
        },
        rotas: {
            "N": "sala8",
            "L": "sala5",
            "S": "sala1"
        }
    },
    "sala5": { // Heresia
        descricao: "Você se depara com o Círculo da Heresia. Sepulcros em chamas aprisionam os que ousaram duvidar. Amosteus, o rei das heresias, sorri.",
        demonio: {
            nome: "Amosteus",
            tipoInteracao: "escolhaChave", // ANOTAÇÃO: Um tipo de interação especial para a lógica
            dialogo: "Duvidar é o primeiro passo para a *verdade*. Eles forjaram dogmas para escravizar suas mentes...",
            dialogoEscolha: "Atrás de mim há um fragmento de memória, uma chave para a sua própria mente. Quer pegá-la e ver além do véu, ou prefere seguir na sua ignorância abençoada?",
            podeInteragir: true
        },
        rotas: {
            "N": "SalaSecreta",
            "O": "sala4",
            "L": "sala6",
            "S": "sala2"
        }
    },
    "sala6": { // Violência
        descricao: "Você entra no Círculo da Violência. Riachos de sangue fervem, e as árvores retorcidas gritam. Apollyon, o Anjo Caído da Destruição, paira ameaçador.",
        demonio: {
            nome: "Apollyon",
            dialogo: "A destruição é a natureza do universo. Deus destrói e constrói em seu nome. A *aceitação* do caos é sua única fuga da farsa.",
            podeInteragir: false
        },
        rotas: {
            "N": "sala7",
            "O": "sala5",
            "S": "sala3"
        }
    },
    "sala7": { // Fraude
        descricao: "Você chegou ao vasto Círculo da Fraude. Mephistopheles, com sua voz sedosa, surge das sombras.",
        demonio: {
            nome: "Mephistopheles",
            dialogo: "Ah, a fraude... Uma arte que o Deus de vocês domina. Promessas vazias, céu inatingível... Ele é o maior manipulador. A *desilusão* é a sua chave.",
            dialogo2: "Vê esta porta à sua frente? Aceite seu destino e a desilusão. Passe por ela e encontre o que tanto procura.",
            podeInteragir: false
        },
        rotas: {
            "S": "sala6",
            "N": "FinalIlusorio" // Rota para o final ilusório
        }
    },
    "sala8": { // Traição
        descricao: "Este é o nono e mais profundo círculo, o Círculo da Traição. Congelados em um lago de gelo, os maiores traidores sofrem. Lúcifer, a encarnação da rebelião, te observa.",
        demonio: {
            nome: "Lúcifer",
            // ANOTAÇÃO: Corrigido o erro de 'dialogo' duplicado.
            dialogo: "Bem-vindo. Eu fui o primeiro a ver a farsa. Eles chamam de traição, eu chamo de *liberdade*. Há uma porta aqui, mas ela só se abre para quem ousou ver a verdade por trás da mentira. Você é qualificado?",
            podeInteragir: false
        },
        rotas: {
            "S": "sala4",
            "N": "FinalLucido", // Rota para o final lúcido
        }
    },

    // --- SALAS ESPECIAIS ---
    "SalaSecreta": { // frag memoria
        descricao: "Você toca no fragmento e sua mente é invadida por uma memória. Você se vê, em vida, cometendo atos terríveis em nome de uma fé cega, traindo aqueles que confiavam em você. A 'vingança' que você busca... era contra quem, exatamente? A verdade é um peso em sua alma.",
        demonio: null, // Sem demônio aqui
        item: {
            nome: "Fragmento da Verdade",
            descricao: "Agora você sabe o porquê de estar aqui. Não como vítima, mas como culpado."
        },
        rotas: {
            "S": "sala5" // Rota para voltar
        }
    },

    // --- FINAIS ---
    "FinalIlusorio": {
        ehFinal: true,
        descricao: "Você atravessa a porta de Mephistopheles e a escuridão te engole. Sua consciência se desfaz, mas a esperança de uma 'redenção' ainda ecoa em sua alma fragmentada. Você se recusa a aceitar as verdades cruéis e, por isso, seu tormento é a busca eterna por uma salvação que nunca virá, preso em uma ilusão que só prolonga sua agonia."
    },
    "FinalLucido": {
        ehFinal: true,
        descricao: "Com a chave da sua própria memória, você abre a porta de Lúcifer. A verdade sobre seus pecados e a natureza tirânica do 'Criador' se solidificam. Você não é um herói em busca de vingança, mas um pecador recebendo seu castigo. Sua alma está presa, mas sua mente está livre da mentira divina. Seu sofrimento é eterno, mas temperado pela consciência lúcida da farsa cósmica. Você se tornou um observador resignado da sua própria e merecida eternidade de dor."
    }
};

export default dadosJogo;