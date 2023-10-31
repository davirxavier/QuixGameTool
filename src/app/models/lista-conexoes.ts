import {Conexao} from "./classes";
import {CONEXAO_IMG} from "./constants";

export const conexoes: Conexao[] = [
  {
    id: 1,
    nome: "Um Jogador",
    img: CONEXAO_IMG + "jogador.png"
  },
  {
    id: 2,
    nome: "Multijogador",
    img: CONEXAO_IMG + "multijogador.png"
  }
];
