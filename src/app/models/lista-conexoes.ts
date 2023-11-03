import {Conexao, Engine} from "./classes";
import {CONEXAO_IMG} from "./constants";

export const conexoes: Conexao[] = [
  {
    id: 1,
    nome: "Um Jogador",
    img: CONEXAO_IMG + "jogador.png",
    pontos: {
      [Engine.UNITY]: 1,
      [Engine.UNREAL]: 1,
      [Engine.GODOT]: 1,
      [Engine.GAME_MAKER]: 1,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 1,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 1,
      [Engine.GDEVELOP]: 1
    }
  },
  {
    id: 2,
    nome: "Multijogador",
    img: CONEXAO_IMG + "multijogador.png",
    pontos: {
      [Engine.UNITY]: 1,
      [Engine.UNREAL]: 1,
      [Engine.GODOT]: 1,
      [Engine.GAME_MAKER]: 1,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 1,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 1,
      [Engine.GDEVELOP]: 1
    }
  }
];
