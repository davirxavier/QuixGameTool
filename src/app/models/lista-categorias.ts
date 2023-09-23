import {Categoria, Genero} from "./classes";

export const categorias: Categoria[] = [
  {
    id: 1,
    nome: "Ação",
    generos: [
      Genero.LUTA,
      Genero.SOULS,
      Genero.HACK
    ]
  },
  {
    id: 2,
    nome: "Aventura",
    generos: [
      Genero.EXPLORACAO,
      Genero.PLATAFORMA,
      Genero.SOBREVIVENCIA
    ]
  },
  {
    id: 3,
    nome: "Arcade",
    generos: [
      Genero.COMBATE_PLAYERS,
      Genero.PONTOS,
      Genero.ROGUELITE
    ]
  },
  {
    id: 4,
    nome: "Estratégia",
    generos: [
      Genero.RTS,
      Genero.TBS,
      Genero.TORRE,
      Genero.QUEBRA_CABECA
    ]
  },
  {
    id: 5,
    nome: "Esportes",
    generos: [
      Genero.FUTEBOL,
      Genero.CARTAS,
      Genero.CORRIDA,
      Genero.BASQUETE,
      Genero.RADICAIS,
      Genero.LUTA
    ]
  },
  {
    id: 6,
    nome: "Musical",
    generos: []
  },
  {
    id: 7,
    nome: "RPG",
    generos: [
      Genero.RPG_ACAO,
      Genero.RPG_TURNO
    ]
  },
  {
    id: 8,
    nome: "Simulação",
    generos: [
      Genero.VEICULOS,
      Genero.SIMULADOR_VIDA,
      Genero.CONSTRUCAO
    ]
  },
  {
    id: 9,
    nome: "Terror",
    generos: [
      Genero.SURVIVAL_HORROR,
      Genero.TERROR_ACAO,
      Genero.TERROR_PSICOLOGICO
    ]
  },
  {
    id: 10,
    nome: "Textual",
    generos: [
      Genero.PERGUNTAS_RESPOSTAS,
      Genero.VISUAL_NOVEL,
      Genero.AVENTURA_TEXTO
    ]
  },
  {
    id: 11,
    nome: "Tiro"
  },
];
