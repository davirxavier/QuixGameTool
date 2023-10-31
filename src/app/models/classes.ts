import {GENERO_IMG} from "./constants";

export class Estrutura {
  id: number;
  nome: string;
  visao?: Visao[];
  img?: string;
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
  [Genero.LUTA]: 'assets/img/generos/luta.png',
  [Genero.HACK]: 'assets/img/generos/hackslash.png',
  [Genero.SOULS]: 'assets/img/generos/soulslike.png',
  [Genero.EXPLORACAO]: 'assets/img/generos/exploração.png',
  [Genero.PLATAFORMA]: 'assets/img/generos/plataforma.png',
  [Genero.SOBREVIVENCIA]: 'assets/img/generos/sobrevivencia.png',
  [Genero.COMBATE_PLAYERS]: 'assets/img/generos/combate.png',
  [Genero.PONTOS]: 'assets/img/generos/pontos.png',
  [Genero.ROGUELITE]: 'assets/img/generos/roguelite.png',
  [Genero.RTS]: 'assets/img/generos/estrategiareal.png',
  [Genero.TBS]: 'assets/img/generos/estrategiaturno.png',
  [Genero.TORRE]: 'assets/img/generos/torre.png',
  [Genero.QUEBRA_CABECA]: 'assets/img/generos/quebracabeça.png',
  [Genero.FUTEBOL]: 'assets/img/generos/futebol.png',
  [Genero.CARTAS]: 'assets/img/generos/cartas.png',
  [Genero.CORRIDA]: 'assets/img/generos/corrida.png',
  [Genero.BASQUETE]: 'assets/img/generos/basquete.png',
  [Genero.RADICAIS]: 'assets/img/generos/radicais.png',
  [Genero.RPG_ACAO]: 'assets/img/generos/rpgação.png',
  [Genero.RPG_TURNO]: 'assets/img/generos/rpgturno.png',
  [Genero.VEICULOS]: 'assets/img/generos/veiculos.png',
  [Genero.SIMULADOR_VIDA]: 'assets/img/generos/simuladorvida.png',
  [Genero.CONSTRUCAO]: 'assets/img/generos/simuladorconstrução.png',
  [Genero.SURVIVAL_HORROR]: 'assets/img/generos/terrorsobrevivencia.png',
  [Genero.TERROR_ACAO]: 'assets/img/generos/terroração.png',
  [Genero.TERROR_PSICOLOGICO]: 'assets/img/generos/psicologico.png',
  [Genero.PERGUNTAS_RESPOSTAS]: 'assets/img/generos/perguntasrespostas.png',
  [Genero.VISUAL_NOVEL]: 'assets/img/generos/novelavisual.png',
  [Genero.AVENTURA_TEXTO]: 'assets/img/generos/aventuratexto.png'
};

export enum Visao {
  VERTICAL = "Vertical",
  HORIZONTAL = "Horizontal",
  P_PESSOA = "Primeira Pessoa",
  T_PESSOA = "Terceira Pessoa"
}

export const ImagensVisoes = {
  [Visao.VERTICAL]: 'assets/img/visoes/vertical.png',
  [Visao.HORIZONTAL]: 'assets/img/visoes/horizontal.png',
  [Visao.P_PESSOA]: 'assets/img/visoes/1pessoa.png',
  [Visao.T_PESSOA]: 'assets/img/visoes/3pessoa.png'
};

export class Controle {
  id: number;
  nome: string;
  img?: string;
}

export class Mapa {
  id: number;
  nome: string;
  img?: string;
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
