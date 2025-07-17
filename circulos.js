// Define os círculos e as possíveis rotas (3 destinos para cada direção)
const circulosInferno = {
    "Limbo": {
        descricao: "Você está no Limbo, à beira de um abismo insondável. Almas sem nome vagam. Caronte, o barqueiro das almas, surge das névoas.",
        demonio: {
            nome: "Caronte",
            dialogo: "Alma perdida, sua jornada no abismo começa. A verdadeira tirania não está em quem te prende, mas em quem te fez crer que era livre.",
            podeInteragir: true,
            dialogoAceite: "Sábia escolha. O rio Estige o aguarda. As correntes que você carrega são invisíveis aos que creem em Deus.",
            dialogoRecuse: "Tolice. A negação não te salva, apenas retarda o inevitável. Você entrará no barco de qualquer forma."
        },
        rotas: { // Cada direção leva a uma nova sala
            "O": ["sala2"], // Exemplo: Oeste do Limbo pode ir para sala2.
            "N": ["sala1"], // Exemplo: Norte do Limbo pode ir para sala1.
            "L": ["sala3"], // Exemplo: Leste do Limbo pode ir para sala3.
        }
    },
    "sala1": {
        descricao: "Você está no Círculo da Luxúria. Ventos gélidos cortam a carne, arrastando os condenados. Bael, uma figura sedutora e terrível, te observa.",
        demonio: {
            nome: "Bael",
            dialogo: "O desejo. Dizem que é pecado, mas é a faísca da vida. A suposta 'bondade' deles é apenas o medo da sua própria *libido*. Aceite-a, e verá a mentira.",
            podeInteragir: false,
            dialogoAceite: "Excelente! Você está pronto para a verdade que eles ocultam, mas não ache que mudará algo em você, não há mais volta para a mentira.",
        },
        rotas: {
            "N": ["sala4"], // Norte vai para a sala4
            "L": ["sala2"], // Leste vai para a sala2
        }
    },
    "sala2": {
        descricao: "Este é o Círculo da Gula. Uma chuva de granizo e lama fétida atinge sem cessar. Belzebu, inchado e repulsivo, gargalha das almas famintas.",
        demonio: {
            nome: "Belzebu",
            dialogo: "A fome é insaciável, não é? Eles te prometem fartura em outra vida, mas o céu é vazio. A verdadeira *nutrição* vem da aceitação da sua natureza carnal, não de falsas promessas.",
            podeInteragir: false
        },
        rotas: {
            "N": ["sala5"],
            "O": ["sala1"]
            "L": ["sala3"],
        }
    },
    "sala3": {
        descricao: "Você no Círculo da Avareza e Prodigalidade. Almas empurram pesos eternamente. Mammon, com olhos famintos, acumula sofrimento.",
        demonio: {
            nome: "Mammon",
            dialogo: "Posses, riquezas... tudo é transitório, menos o *sofrimento*. Sua 'salvação' é apenas uma nova forma de posse, uma barganha por sua alma. Ninguém escapa do ciclo.",
            podeInteragir: false
        },
        rotas: {
            "N": ["sala6"],
            "O": ["sala2"]
        }
    },
    "sala4": {
        descricao: "Você está no Círculo da Ira e Preguiça. O rio Estige ferve com fúria. Alastor, o Punidor, deleita-se com o tormento.",
        demonio: {
            nome: "Alastor",
            dialogo: "A vingança que te trouxe aqui é um eco da nossa própria. Eles te dizem para 'perdoar', mas a *justiça* é uma chama que queima. Deus não perdoa, apenas pune com a eternidade.",
            podeInteragir: false // Interação obrigatoria
        },
        rotas: {
            "N": ["sala8"], // possivel final
            "L": ["sala5"],
            "S": ["sala2"]
        }
    },
    "sala5": {
        descricao: "Você se depara com o Círculo da Heresia. Sepulcros em chamas aprisionam os que ousaram duvidar. Amosteus, o rei das heresias, sorri enquanto te observa.",
        demonio: {
            nome: "Amosteus",
            dialogo: "Duvidar é o primeiro passo para a *verdade*. Eles forjaram dogmas para escravizar suas mentes. A única verdade é a que você forja em sua própria dor.",
            dialogo2: "O que á atrás de mim? É somente uma simples chave, mas é dito ser possivel abrir a porta de sua mente com ela"
            podeInteragir: false
            // FALTA COLOCAR INPUT PARA VER SE O PROTA QUER PEGAR A CHAVE OU NÃO
        },
        rotas: {
            "N": ["SalaSecreta"], // Requisito para o final lucido (sala8)
            "O": ["sala4"]
            "L": ["sala6"]
            "S": ["sala2"]
        }
    },
    "sala6": {
        descricao: "Você entra no Círculo da Violência. Riachos de sangue fervem, e as árvores retorcidas gritam. Apollyon, o Anjo Caido da Destruição, paira ameaçador.",
        demonio: {
            nome: "Apollyon",
            dialogo: "A destruição é a natureza inerente do universo. Deus destrói e constrói em seu nome, para sua glória. A *aceitação* do caos é sua única fuga da farsa.",
            podeInteragir: false
        },
        rotas: {
            "N": ["sala7"], // possivel final
            "O": ["sala5"]
            "S": ["sala3"]
        }
    },
    "sala7": {
        descricao: "Você chegou ao vasto Círculo da Fraude. Mephistopheles, com sua voz sedosa, surge das sombras.",
        demonio: {
            nome: "Mephistopheles",
            dialogo: "Ah, a fraude... Uma arte que o Deus de vocês domina. Promessas vazias, céu inatingível, perdão que nunca vem. Ele é o maior manipulador. A *desilusão* é a sua chave. Não há redenção, apenas o eterno ciclo de dor que ele criou.",
            dialogo2: "Vê essa porta atrás de mim? Aceite seu destino e a desilusão da sua alma... Passe pela porta e encontre o que tanto procura."
            podeInteragir: false
        },
        rotas: {
            "S": ["sala6"],
            "N": ["salafinal1"] // Rota final ilusorio
        }
    },
    "sala8": {
        descricao: "Este é o nono e mais profundo círculo, o Círculo da Traição. Congelados em um lago de gelo, os maiores traidores sofrem. Lúcifer, a encarnação da rebelião, te observa.",
        demonio: {
            nome: "Lúcifer",
            dialogo: "Bem-vindo. Eu fui o primeiro a ver a farsa. Eles chamam de traição, eu chamo de *liberdade*. Não há salvação, apenas a escolha de abraçar sua verdadeira natureza no sofrimento, ou lutar contra ela em vão. A vingança é uma chama fria aqui.",
            dialogo: "Mas se duvida de mim, te convido a tentar abrir está porta ao meu lado, acha que é qualificado?"
            podeInteragir: false
        },
        rotas: {
             "S": ["sala4"],
             "N": ["salafinal2"], // Rota final lucido
        }
    },
    // Finais - Todos de sofrimento, mas com nuances
    "SOFRIMENTO_CONSCIENTE": { // TEM QUE MODIFICAR ESSE DIALOGO PQ AQUI ENTREGA O PLOT DELE SE FUDER PQ FOI UM CARA RUIM E O PORQUE ESTÁ NO INFERNO
        descricao: "A verdade do Inferno se solidifica em sua mente. Você compreende a farsa 'divina', a natureza cruel do 'Criador'. Sua alma está presa, mas não iludida. Seu sofrimento é eterno, mas temperado pela consciência da tirania que o impôs. Você se tornou um observador resignado da eternidade de dor.",
        conexoes: {}
    },
    "SOFRIMENTO_ILUDIDO": { // COLOCAR UM DIALOGO QUE COMBINE MAIS COM O DA SALA7
        descricao: "A escuridão do Inferno te engoliu, mas a esperança de uma 'salvação' ainda persiste em sua alma. Você se recusa a aceitar as verdades cruéis sussurradas pelos demônios. Seu tormento é a busca eterna por uma redenção que nunca virá, preso em uma ilusão que só prolonga sua agonia.",
        conexoes: {}
    },
};
export default circulosInferno;