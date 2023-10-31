import {Plataforma} from "./classes";
import {PLATAFORMA_IMG} from "./constants";

export const plataformas: Plataforma[] = [
  {
    id: 1,
    nome: "Desktop",
    img: PLATAFORMA_IMG + "desktop.png"
  },
  {
    id: 2,
    nome: "Mobile",
    img: PLATAFORMA_IMG + "mobile.png"
  },
  {
    id: 3,
    nome: "Navegador Web",
    img: PLATAFORMA_IMG + "web.png"
  }
];
