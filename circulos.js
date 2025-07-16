
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
        rotas: {
            "S": ["Luxúria", "Limbo", "Gula"],
        }
    },
    //... (restante da estrutura de dados dos círculos, inalterada)...
    "Traição": {
        descricao: "Este é o nono e mais profundo círculo, o Círculo da Traição. Congelados em um lago de gelo, os maiores traidores sofrem. Lúcifer, a encarnação da rebelião, te observa.",
        demonio: {
            nome: "Lúcifer",
            dialogo: "Bem-vindo. Eu fui o primeiro a ver a farsa. Eles chamam de traição, eu chamo de **liberdade**. Não há salvação, apenas a escolha de abraçar sua verdadeira natureza no sofrimento, ou lutar contra ela em vão. A vingança é uma chama fria aqui.",
            podeInteragir: false
        },
        rotas: {} // Sem rotas de saída
    },
    // Finais do Jogo
    "SOFRIMENTO_CONSCIENTE": {
        descricao: "A verdade do Inferno se solidifica em sua mente. Você compreende a farsa 'divina', a natureza cruel do 'Criador'. Sua alma está presa, mas não iludida. Seu sofrimento é eterno, mas temperado pela consciência da tirania que o impôs. Você se tornou um observador resignado da eternidade de dor."
    },
    "SOFRIMENTO_ILUDIDO": {
        descricao: "A escuridão do Inferno te engoliu, mas a esperança de uma 'salvação' ainda persiste em sua alma. Você se recusa a aceitar as verdades cruéis sussurradas pelos demônios. Seu tormento é a busca eterna por uma redenção que nunca virá, preso em uma ilusão que só prolonga sua agonia."
    }
};

export default circulosInferno;