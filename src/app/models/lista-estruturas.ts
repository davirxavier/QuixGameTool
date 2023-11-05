import {Engine, Estrutura, Visao} from "./classes";
import {ESTRUTURA_IMG} from "./constants";

export const estruturas: Estrutura[] = [
  {
    id: 1,
    nome: "2D",
    img: ESTRUTURA_IMG + "2D.png",
    visao: [
      Visao.VERTICAL,
      Visao.HORIZONTAL
    ],
    pontos: {
      [Engine.UNITY]: 2,
      [Engine.UNREAL]: 0,
      [Engine.GODOT]: 3,
      [Engine.GAME_MAKER]: 5,
      [Engine.RPG_MAKER]: 5,
      [Engine.CONSTRUCT]: 5,
      [Engine.CRY_ENGINE]: 0,
      [Engine.PHASER]: 5,
      [Engine.GDEVELOP]: 5
    }
  },
  {
    id: 2,
    nome: "2.5D",
    img: ESTRUTURA_IMG + "2.5D.png",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ],
    pontos: {
      [Engine.UNITY]: 3,
      [Engine.UNREAL]: 0,
      [Engine.GODOT]: 3,
      [Engine.GAME_MAKER]: 0,
      [Engine.RPG_MAKER]: 0,
      [Engine.CONSTRUCT]: 0,
      [Engine.CRY_ENGINE]: 0,
      [Engine.PHASER]: 0,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 3,
    nome: "3D",
    img: ESTRUTURA_IMG + "3D.png",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ],
    pontos: {
      [Engine.UNITY]: 5,
      [Engine.UNREAL]: 5,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 0,
      [Engine.RPG_MAKER]: 0,
      [Engine.CONSTRUCT]: 0,
      [Engine.CRY_ENGINE]: 5,
      [Engine.PHASER]: 3,
      [Engine.GDEVELOP]: 4
    }
  }
]
