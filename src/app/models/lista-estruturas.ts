import {Estrutura, Visao} from "./classes";

export const estruturas: Estrutura[] = [
  {
    id: 1,
    nome: "2D",
    visao: [
      Visao.VERTICAL,
      Visao.HORIZONTAL
    ]
  },
  {
    id: 2,
    nome: "2.5D",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ]
  },
  {
    id: 3,
    nome: "3D",
    visao: [
      Visao.P_PESSOA,
      Visao.T_PESSOA
    ]
  }
]
