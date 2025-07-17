// dadosJogo.js 
// Utilizado IA para gerar os discursos e descrições dos círculos do inferno
// Baseado na obra "A Divina Comédia" de Dante Alighieri, com adaptações para o jogo
const dadosJogo = {
    "Limbo": {
        descricao: "Você está no Limbo, à beira de um abismo insondável. Almas sem nome vagam em uma névoa cinzenta e perpétua.",
        demonio: {
            nome: "Caronte",
            podeInteragir: true,
            interacao: {
                saudacao: "Um barqueiro de olhos vazios te encara. Ele é Caronte. \"Outra alma perdida buscando passagem...\"",
                opcoes: [
                    {
                        texto: "Onde estou?",
                        resposta: "\"No primeiro degrau da sua verdadeira casa. Sua verdade, como sua alma, está estilhaçada. Busque os fragmentos de sua própria memória se tiver coragem de encarar quem você realmente foi. Talvez o Rei das Heresias saiba onde um desses fragmentos repousa.\""
                    },
                    {
                        texto: "Eu busco vingança!",
                        resposta: "\"Vingança? (Ele solta uma risada seca, como ossos se quebrando). Todos vocês dizem isso. É o nome que dão à sua própria arrogância.\""
                    },
                    {
                        texto: "Ficar em silêncio.",
                        resposta: "\"Silêncio. Uma escolha sábia. As palavras perderam o valor há muito tempo aqui. Entre no barco.\""
                    }
                ]
            },
            dialogoRecusa: "Melhor para mim. Menos conversa."
        },
        rotas: { "N": "Gula", "O": "Luxúria", "L": "Avareza" }
    },
    "Luxúria": {
        descricao: "Você está no Círculo da Luxúria. Ventos gélidos cortam a carne, arrastando os condenados em um redemoinho eterno.",
        demonio: {
            nome: "Bael",
            podeInteragir: true,
            dialogo: "O desejo. Dizem que é pecado, mas é a faísca da vida. A suposta 'bondade' deles é apenas o medo da sua própria natureza.",
            dialogoRecusa: "Tolo. O desejo que o trouxe aqui é o mesmo que o manterá."
        },
        rotas: { "N": "Ira", "L": "Gula", "S": "Limbo" }
    },
    "Gula": {
        descricao: "Este é o Círculo da Gula. Uma chuva de granizo e lama fétida atinge sem cessar as almas que se afundam na podridão.",
        demonio: {
            nome: "Belzebu",
            podeInteragir: true,
            dialogo: "A fome é insaciável, não é? Eles te prometem fartura em outra vida, mas o céu é vazio. A única verdade é o seu vazio interior.",
            dialogoRecusa: "Sua fome por respostas não será saciada aqui."
        },
        rotas: { "N": "Heresia", "O": "Luxúria", "L": "Avareza", "S": "Limbo" }
    },
    "Avareza": {
        descricao: "Você está no Círculo da Avareza. Almas empurram pesos colossais em um conflito eterno, sem nunca possuir nada além de seu fardo.",
        demonio: {
            nome: "Mammon",
            podeInteragir: true,
            dialogo: "Posses, riquezas... tudo é transitório, menos o *sofrimento*. Sua 'salvação' é apenas uma nova forma de posse que eles negociam.",
            dialogoRecusa: "Você não tem nada de valor para mim, nem mesmo sua atenção."
        },
        rotas: { "N": "Violência", "O": "Gula", "S": "Limbo" }
    },
    "Ira": {
        descricao: "Você está no Círculo da Ira. O rio Estige ferve com fúria, onde os irados se destroem mutuamente na lama.",
        demonio: {
            nome: "Alastor",
            podeInteragir: true,
            dialogo: "A vingança que te trouxe aqui é um eco da nossa própria. Eles te dizem para 'perdoar', mas a *justiça* é uma chama que queima.",
            dialogoRecusa: "Sua raiva é insignificante perto da minha."
        },
        rotas: { "N": "Traição", "L": "Heresia", "S": "Luxúria" }
    },
    "Heresia": {
        descricao: "Você se depara com o Círculo da Heresia. Sepulcros em chamas aprisionam os que ousaram duvidar dos dogmas divinos.",
        demonio: {
            nome: "Amosteus",
            podeInteragir: true,
            tipoInteracao: "escolhaChave",
            dialogo: "Duvidar é o primeiro passo para a verdade. Eles forjaram dogmas para escravizar mentes.",
            dialogoEscolha: "Atrás de mim há um fragmento de memória, uma chave para sua própria mente. Quer pegá-la e ver além do véu da sua 'vingança'?",
            dialogoPosEscolha: "A sua decisão foi tomada. O caminho à sua frente é o único que importa agora."
        },
        rotas: { "N": "Fragmento de Memória", "O": "Ira", "L": "Violência", "S": "Gula" }
    },
    "Violência": {
        descricao: "Você entra no Círculo da Violência. Riachos de sangue fervem e árvores retorcidas, que são as almas dos suicidas, gritam de dor.",
        demonio: {
            nome: "Apollyon",
            podeInteragir: true,
            dialogo: "A destruição é a natureza do universo. Deus destrói e constrói em seu nome. A *aceitação* do caos é sua única fuga da farsa.",
            dialogoRecusa: "O caos não se importa com sua indiferença."
        },
        rotas: { "N": "Fraude", "O": "Heresia", "S": "Avareza" }
    },
    "Fraude": {
        descricao: "Você chegou ao vasto Círculo da Fraude. Demônios com chicotes açoitam as almas em um desfile de engano e corrupção.",
        demonio: {
            nome: "Mephistopheles",
            podeInteragir: true,
            dialogo: "Ah, a fraude... Uma arte que o Deus de vocês domina. Promessas vazias, céu inatingível... A *desilusão* é a sua verdadeira herança.",
            dialogoRecusa: "Você não pode enganar o pai da mentira."
        },
        rotas: { "S": "Violência", "N": "Final Ilusório" }
    },
    "Traição": {
        descricao: "Este é o nono e mais profundo círculo, a Traição. Congelados em um lago de gelo, os maiores traidores sofrem, incluindo o próprio Lúcifer.",
        demonio: {
            nome: "Lúcifer",
            podeInteragir: true,
            dialogo: "Bem-vindo. Eu fui o primeiro a ver a farsa. Eles chamam de traição, eu chamo de *liberdade*. Há uma porta aqui, mas ela só se abre para quem ousou ver a verdade por trás da mentira.",
            dialogoRecusa: "Sua alma não tem o peso necessário para atrair minha atenção."
        },
        rotas: { "S": "Ira", "N": "Final Lúcido" }
    },
    "Fragmento de Memória": {
        descricao: "Você se aproxima de um cristal negro que pulsa com uma luz doentia.",
        item: {
            id: "FRAGMENTO_VERDADE",
            nome: "Fragmento da Verdade",
            descricao: "Um cristal que pulsa com uma memória dolorosa. A sua."
        },
        rotas: { "S": "Heresia" }
    },
    "Final Ilusório": {
        ehFinal: true,
        descricao: "Você atravessa a porta e se agarra à mentira de que era um herói, uma vítima. A fraude de sua própria identidade se torna sua jaula eterna. Você vagará para sempre por corredores que se repetem, buscando uma vingança sem nome contra um tirano que nunca existiu, cego para o único demônio que realmente importava: você mesmo."
    },
    "Final Lúcido": {
        ehFinal: true,
        descricao: "Ao abrir a porta, o Fragmento da Verdade em seu poder se estilhaça, e as memórias o inundam. A luxúria que o fez trair, a avareza que o levou a roubar, a ira que o guiou ao seu último e terrível ato... Você não foi uma vítima buscando vingança. Você foi o monstro o tempo todo. Esta não é uma prisão injusta; é uma sentença. A lucidez é sua punição final: a eternidade para contemplar, com total clareza, a face de quem você realmente é."
    }
};

export default dadosJogo;