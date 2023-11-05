import {Categoria, Engine, Genero, Visao} from "./classes";
import {categorias} from "./lista-categorias";

export const GeneroPontos: {[genero: string]: {[engine: string]: number}} = {
  [Genero.LUTA]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 2,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 3,
    [Engine.CONSTRUCT]: 1,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 1,
    [Engine.GDEVELOP]: 1
  },
  [Genero.SOULS]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 2,
    [Engine.GAME_MAKER]: 1,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 1,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 1,
    [Engine.GDEVELOP]: 1
  },
  [Genero.HACK]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 2,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 2,
    [Engine.GDEVELOP]: 2
  },
  [Genero.EXPLORACAO]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 5,
    [Engine.RPG_MAKER]: 5,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 5,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 5
  },
  [Genero.PLATAFORMA]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 5,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 3
  },
  [Genero.SOBREVIVENCIA]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 3
  },
  [Genero.COMBATE_PLAYERS]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 3,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.PONTOS]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 3,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.ROGUELITE]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 2,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.RTS]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 2
  },
  [Genero.TBS]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 2,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 2,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 2,
    [Engine.GDEVELOP]: 2
  },
  [Genero.TORRE]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 2
  },
  [Genero.QUEBRA_CABECA]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.FUTEBOL]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 1,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 2,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 2
  },
  [Genero.CARTAS]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 3
  },
  [Genero.CORRIDA]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.BASQUETE]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 2
  },
  [Genero.RADICAIS]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 4
  },
  [Genero.RPG_ACAO]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 5,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 3,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 4
  },
  [Genero.RPG_TURNO]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 2,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 5,
    [Engine.RPG_MAKER]: 5,
    [Engine.CONSTRUCT]: 3,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 3
  },
  [Genero.VEICULOS]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.SIMULADOR_VIDA]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 3,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 2,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.CONSTRUCAO]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 2,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 2
  },
  [Genero.SURVIVAL_HORROR]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 4,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 3,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.TERROR_ACAO]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 5,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 3
  },
  [Genero.TERROR_PSICOLOGICO]: {
    [Engine.UNITY]: 4,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 2,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 5,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 3
  },
  [Genero.PERGUNTAS_RESPOSTAS]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 2,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 2,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 4
  },
  [Genero.VISUAL_NOVEL]: {
    [Engine.UNITY]: 1,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 5,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 4
  },
  [Genero.AVENTURA_TEXTO]: {
    [Engine.UNITY]: 1,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 2,
    [Engine.GAME_MAKER]: 3,
    [Engine.RPG_MAKER]: 2,
    [Engine.CONSTRUCT]: 2,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 3,
    [Engine.GDEVELOP]: 2
  }
};

export const VisaoPontos: {[visao: string]: {[engine: string]: number}} = {
  [Visao.VERTICAL]: {
    [Engine.UNITY]: 2,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 4,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 4
  },
  [Visao.HORIZONTAL]: {
    [Engine.UNITY]: 3,
    [Engine.UNREAL]: 1,
    [Engine.GODOT]: 3,
    [Engine.GAME_MAKER]: 4,
    [Engine.RPG_MAKER]: 4,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 1,
    [Engine.PHASER]: 4,
    [Engine.GDEVELOP]: 4
  },
  [Visao.P_PESSOA]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 4,
    [Engine.GAME_MAKER]: 1,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 4,
    [Engine.CRY_ENGINE]: 5,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 1
  },
  [Visao.T_PESSOA]: {
    [Engine.UNITY]: 5,
    [Engine.UNREAL]: 5,
    [Engine.GODOT]: 5,
    [Engine.GAME_MAKER]: 1,
    [Engine.RPG_MAKER]: 1,
    [Engine.CONSTRUCT]: 5,
    [Engine.CRY_ENGINE]: 5,
    [Engine.PHASER]: 5,
    [Engine.GDEVELOP]: 2
  }
};
