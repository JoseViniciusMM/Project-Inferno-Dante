// utils.js
import promptSync from 'prompt-sync';

// Cria a função prompt e a exporta para ser usada no resto do jogo
export const prompt = promptSync({ sigint: true });