import {Categoria, Engine, Genero} from "./classes";
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
    ],
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 4,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 3,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 4,
      [Engine.CRY_ENGINE]: 3,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 4
    }
  },
  {
    id: 2,
    nome: "Aventura",
    img: CATEGORIA_IMG + "aventura.png",
    generos: [
      Genero.EXPLORACAO,
      Genero.PLATAFORMA,
      Genero.SOBREVIVENCIA
    ],
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 4,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 4,
      [Engine.RPG_MAKER]: 4,
      [Engine.CONSTRUCT]: 4,
      [Engine.CRY_ENGINE]: 2,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 4
    }
  },
  {
    id: 3,
    nome: "Arcade",
    img: CATEGORIA_IMG + "arcade.png",
    generos: [
      Genero.COMBATE_PLAYERS,
      Genero.PONTOS,
      Genero.ROGUELITE
    ],
    pontos: {
      [Engine.UNITY]: 3,
      [Engine.UNREAL]: 2,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 4,
      [Engine.RPG_MAKER]: 4,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
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
    ],
    pontos: {
      [Engine.UNITY]: 2,
      [Engine.UNREAL]: 1,
      [Engine.GODOT]: 2,
      [Engine.GAME_MAKER]: 3,
      [Engine.RPG_MAKER]: 3,
      [Engine.CONSTRUCT]: 2,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
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
      Genero.RADICAIS
    ],
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 4,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 2,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 4,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 6,
    nome: "Musical",
    img: CATEGORIA_IMG + "musical.png" ,
    generos: [],
    pontos: {
      [Engine.UNITY]: 2,
      [Engine.UNREAL]: 2,
      [Engine.GODOT]: 3,
      [Engine.GAME_MAKER]: 2,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 2,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 3,
      [Engine.GDEVELOP]: 2
    }
  },
  {
    id: 7,
    nome: "RPG",
    img: CATEGORIA_IMG + "rpg.png",
    generos: [
      Genero.RPG_ACAO,
      Genero.RPG_TURNO
    ],
    pontos: {
      [Engine.UNITY]: 2,
      [Engine.UNREAL]: 3,
      [Engine.GODOT]: 2,
      [Engine.GAME_MAKER]: 5,
      [Engine.RPG_MAKER]: 5,
      [Engine.CONSTRUCT]: 2,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 8,
    nome: "Simulação",
    img: CATEGORIA_IMG + "simulação.png",
    generos: [
      Genero.VEICULOS,
      Genero.SIMULADOR_VIDA,
      Genero.CONSTRUCAO
    ],
    pontos: {
      [Engine.UNITY]: 3,
      [Engine.UNREAL]: 3,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 2,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 2
    }
  },
  {
    id: 9,
    nome: "Terror",
    img: CATEGORIA_IMG + "terror.png",
    generos: [
      Genero.SURVIVAL_HORROR,
      Genero.TERROR_ACAO,
      Genero.TERROR_PSICOLOGICO
    ],
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 4,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 4,
      [Engine.RPG_MAKER]: 3,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 4,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 4
    }
  },
  {
    id: 10,
    nome: "Textual",
    img: CATEGORIA_IMG + "textual.png",
    generos: [
      Genero.PERGUNTAS_RESPOSTAS,
      Genero.VISUAL_NOVEL,
      Genero.AVENTURA_TEXTO
    ],
    pontos: {
      [Engine.UNITY]: 1,
      [Engine.UNREAL]: 1,
      [Engine.GODOT]: 2,
      [Engine.GAME_MAKER]: 4,
      [Engine.RPG_MAKER]: 5,
      [Engine.CONSTRUCT]: 4,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 5,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 11,
    nome: "Tiro",
    img: CATEGORIA_IMG + "tiro.png",
    generos: [],
    pontos: {
      [Engine.UNITY]: 3,
      [Engine.UNREAL]: 3,
      [Engine.GODOT]: 3,
      [Engine.GAME_MAKER]: 3,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 5,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  },
];
