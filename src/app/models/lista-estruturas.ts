import {Estrutura, Visao} from "./classes";
import {ESTRUTURA_IMG} from "./constants";

export const estruturas: Estrutura[] = [
  {
    id: 1,
    nome: "2D",
    img: ESTRUTURA_IMG + "2D.png",
    visao: [
      Visao.VERTICAL,
      Visao.HORIZONTAL
    ]
  },
  {
    id: 2,
    nome: "2.5D",
    img: ESTRUTURA_IMG + "2.5D.png",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ]
  },
  {
    id: 3,
    nome: "3D",
    img: ESTRUTURA_IMG + "3D.png",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ]
  }
]
