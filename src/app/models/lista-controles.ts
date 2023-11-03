import {Controle, Engine} from "./classes";
import {CONTROLE_IMG} from "./constants";

export const controles: Controle[] = [
  {
    id: 1,
    nome: "Aponte e Clique",
    img: CONTROLE_IMG + "aponteclique.png",
    pontos: {
      [Engine.UNITY]: 2,
      [Engine.UNREAL]: 1,
      [Engine.GODOT]: 2,
      [Engine.GAME_MAKER]: 5,
      [Engine.RPG_MAKER]: 5,
      [Engine.CONSTRUCT]: 3,
      [Engine.CRY_ENGINE]: 1,
      [Engine.PHASER]: 5,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 2,
    nome: "Teclas e/ou Joystick",
    img: CONTROLE_IMG + "setas.png",
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
