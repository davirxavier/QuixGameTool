import {Engine, Plataforma} from "./classes";
import {PLATAFORMA_IMG} from "./constants";

export const plataformas: Plataforma[] = [
  {
    id: 1,
    nome: "Desktop",
    img: PLATAFORMA_IMG + "desktop.png",
    pontos: {
      [Engine.UNITY]: 5,
      [Engine.UNREAL]: 5,
      [Engine.GODOT]: 5,
      [Engine.GAME_MAKER]: 5,
      [Engine.RPG_MAKER]: 5,
      [Engine.CONSTRUCT]: 1,
      [Engine.CRY_ENGINE]: 5,
      [Engine.PHASER]: 1,
      [Engine.GDEVELOP]: 4
    }
  },
  {
    id: 2,
    nome: "Mobile",
    img: PLATAFORMA_IMG + "mobile.png",
    pontos: {
      [Engine.UNITY]: 1,
      [Engine.UNREAL]: 0,
      [Engine.GODOT]: 1,
      [Engine.GAME_MAKER]: 1,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 1,
      [Engine.CRY_ENGINE]: 0,
      [Engine.PHASER]: 5,
      [Engine.GDEVELOP]: 3
    }
  },
  {
    id: 3,
    nome: "Navegador Web",
    img: PLATAFORMA_IMG + "web.png",
    pontos: {
      [Engine.UNITY]: 0,
      [Engine.UNREAL]: 0,
      [Engine.GODOT]: 0,
      [Engine.GAME_MAKER]: 1,
      [Engine.RPG_MAKER]: 1,
      [Engine.CONSTRUCT]: 5,
      [Engine.CRY_ENGINE]: 0,
      [Engine.PHASER]: 3,
      [Engine.GDEVELOP]: 3
    }
  }
];
