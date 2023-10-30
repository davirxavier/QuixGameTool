export class Estrutura {
  id: number;
  nome: string;
  visao?: Visao[]
}

export class Categoria {
  id: number;
  nome: string;
  generos?: Genero[];
  img?: string;
}

export enum Genero {
  LUTA = "Luta",
  SOULS = "SoulsLike",
  HACK = "Hack 'n' Slash",
  EXPLORACAO = "Exploração",
  PLATAFORMA = "Plataforma",
  SOBREVIVENCIA = "Sobrevivência",
  COMBATE_PLAYERS = "Combate entre Jogadores",
  PONTOS = "Acumulo de Pontos",
  ROGUELITE = "Roguelite",
  RTS = "Estratégia em Tempo Real",
  TBS = "Estratégia por Turnos",
  TORRE = "Defesa de Torre",
  QUEBRA_CABECA = "Quebra-Cabeça",
  FUTEBOL = "Futebol",
  CARTAS = "Cartas",
  CORRIDA = "Corrida",
  BASQUETE = "Basquete",
  RADICAIS = "Esportes Radicais",
  RPG_ACAO = "RPG de Ação",
  RPG_TURNO = "RPG por Turno",
  VEICULOS = "Condução de Veículos",
  SIMULADOR_VIDA = "Simulador de Vida",
  CONSTRUCAO = "Simulador de Construção",
  SURVIVAL_HORROR = "Terror de Sobrevivência",
  TERROR_ACAO = "Terror de Ação",
  TERROR_PSICOLOGICO = "Terror Psicológico",
  PERGUNTAS_RESPOSTAS = "Perguntas e Respostas",
  VISUAL_NOVEL = "Novela Visual",
  AVENTURA_TEXTO = "Aventura em Texto"
}

export const ImagensGenero = {
  [Genero.FUTEBOL]: 'assets/img/categorias/esporte.png'
};

export enum Visao {
  VERTICAL = "Vertical",
  HORIZONTAL = "Horizontal",
  P_PESSOA = "Primeira Pessoa",
  T_PESSOA = "Terceira Pessoa"
}

export class Controle {
  id: number;
  nome: string;
}

export class Mapa {
  id: number;
  nome: string;
}

export class Conexao {
  id: number;
  nome: string;
}

export class Plataforma {
  id: number;
  nome: string;
}

export enum Engine {
  UNITY = "Unity Engine",
  GODOT = "Godot Engine",
  UNREAL = "Unreal Engine",
  GAME_MAKER = "Game Maker Engine",
  RPG_MAKER = "RPG Maker Engine",
  CONSTRUCT = "Construct Engine",
  CRY_ENGINE = "CryEngine",
  PHASER = "Phaser Engine",
  GDEVELOP = "GDevelop Engine"
}
