import {Mapa} from "./classes";
import {MAPA_IMG} from "./constants";

export const mapas: Mapa[] = [
  {
    id: 1,
    nome: "Linear",
    img: MAPA_IMG + "linear.png"
  },
  {
    id: 2,
    nome: "Mundo Semi-Aberto",
    img: MAPA_IMG + "semiaberto.png"
  },
  {
    id: 3,
    nome: "Mundo Aberto",
    img: MAPA_IMG + "aberto.png"
  }
];
