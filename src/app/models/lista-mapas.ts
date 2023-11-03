import {Engine, Mapa} from "./classes";
import {MAPA_IMG} from "./constants";

export const mapas: Mapa[] = [
  {
    id: 1,
    nome: "Linear",
    img: MAPA_IMG + "linear.png",
    pontos: {
      [Engine.UNITY]: 3,
      [Engine.UNREAL]: 3,
      [Engine.GODOT]: 3,
      [Engine.GAME_MAKER]: 4,
      [Engine.RPG_MAKER]: 4,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 3,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 2,
    nome: "Mundo Semi-Aberto",
    img: MAPA_IMG + "semiaberto.png",
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 3,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 3,
      [Engine.RPG_MAKER]: 3,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 3,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 3,
    nome: "Mundo Aberto",
    img: MAPA_IMG + "aberto.png",
    pontos: {
      [Engine.UNITY]: 4,
      [Engine.UNREAL]: 4,
      [Engine.GODOT]: 4,
      [Engine.GAME_MAKER]: 2,
      [Engine.RPG_MAKER]: 2,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 4,
      [Engine.PHASER]: 4,
      [Engine.GDEVELOP]: 3
    }
  }
];
