import {Categoria, Genero} from "./classes";
import {CATEGORIA_IMG} from "./constants";

export const categorias: Categoria[] = [
  {
    id: 1,
    nome: "Ação",
    img: CATEGORIA_IMG + "ação.png",
    generos: [
      Genero.LUTA,
      Genero.SOULS,
      Genero.HACK
    ]
  },
  {
    id: 2,
    nome: "Aventura",
    img: CATEGORIA_IMG + "aventura.png",
    generos: [
      Genero.EXPLORACAO,
      Genero.PLATAFORMA,
      Genero.SOBREVIVENCIA
    ]
  },
  {
    id: 3,
    nome: "Arcade",
    img: CATEGORIA_IMG + "arcade.png",
    generos: [
      Genero.COMBATE_PLAYERS,
      Genero.PONTOS,
      Genero.ROGUELITE
    ]
  },
  {
    id: 4,
    nome: "Estratégia",
    img: CATEGORIA_IMG + "estrategia.png",
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
    img: CATEGORIA_IMG + "esportes.png",
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
    img: CATEGORIA_IMG + "musical.png" ,
    generos: []
  },
  {
    id: 7,
    nome: "RPG",
    img: CATEGORIA_IMG + "rpg.png",
    generos: [
      Genero.RPG_ACAO,
      Genero.RPG_TURNO
    ]
  },
  {
    id: 8,
    nome: "Simulação",
    img: CATEGORIA_IMG + "simulação.png",
    generos: [
      Genero.VEICULOS,
      Genero.SIMULADOR_VIDA,
      Genero.CONSTRUCAO
    ]
  },
  {
    id: 9,
    nome: "Terror",
    img: CATEGORIA_IMG + "terror.png",
    generos: [
      Genero.SURVIVAL_HORROR,
      Genero.TERROR_ACAO,
      Genero.TERROR_PSICOLOGICO
    ]
  },
  {
    id: 10,
    nome: "Textual",
    img: CATEGORIA_IMG + "textual.png",
    generos: [
      Genero.PERGUNTAS_RESPOSTAS,
      Genero.VISUAL_NOVEL,
      Genero.AVENTURA_TEXTO
    ]
  },
  {
    id: 11,
    nome: "Tiro",
    img: CATEGORIA_IMG + "tiro.png",
    generos: []
  },
];
