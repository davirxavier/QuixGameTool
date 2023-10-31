import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";
import {categorias} from "../models/lista-categorias";
import {Genero, ImagensGenero, ImagensVisoes, Visao} from "../models/classes";
import {estruturas} from "../models/lista-estruturas";
import {controles} from "../models/lista-controles";
import {mapas} from "../models/lista-mapas";
import {conexoes} from "../models/lista-conexoes";
import {plataformas} from "../models/lista-plataformas";

@Component({
  selector: 'app-root',
  templateUrl: './paginainicial.component.html',
  styleUrls: ['./paginainicial.component.sass']
})
export class PaginainicialComponent implements OnInit {
  title = 'qgtfront';
  @ViewChild("carousel") carousel: NgbCarousel;

  respostas = {
    categorias: [],
    generos: [],
    estruturas: [],
    visoes: [],
    controles: [],
    mapas: [],
    conexoes: [],
    plataformas: []
  };

  slides: {
    pergunta: string,
    explicacao: string,
    escolhaMultipla?: boolean,
    escolhasMaximas?: number,
    escolhaRetorno?: (opcoes: any[]) => any,
    opcoes: {
      valor: any,
      nome: string,
      imagem: string,
      selecionada?: boolean,
    }[]
  }[] = [
    {
      pergunta: 'Escolha até três categorias',
      explicacao: 'Essas categorias representam a base do seu jogo.',
      escolhaMultipla: true,
      escolhasMaximas: 3,
      escolhaRetorno: (opcoes: any[]) => {
        const generos: Genero[] = [];

        for (let opcao of opcoes) {
          const categoria = categorias.find(c => c.id === opcao.valor);
          if (categoria) {
            generos.push(...categoria.generos);
          }
        }

        this.slides[1].opcoes = generos.map(g => ({
          nome: g,
          valor: g,
          imagem: ImagensGenero[g]
        }));

        this.respostas.categorias = opcoes.map(o => o.valor);
      },
      opcoes: categorias.map(c => ({
        nome: c.nome,
        valor: c.id,
        imagem: c.img
      }))
    },
    {
      pergunta: 'Escolha até três gêneros',
      explicacao: 'Estes gêneros buscam padronizar seu jogo.',
      escolhaMultipla: true,
      escolhasMaximas: 3,
      escolhaRetorno: (opcoes) => {
        this.respostas.generos = opcoes.map(o => o.valor);
      },
      opcoes: []
    },
    {
      pergunta: 'Escolha a estrutura do seu jogo',
      explicacao: 'Qual será a forma que seu jogo terá?',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        const visoes: Visao[] = [];

        for(let opcao of opcoes) {
          const estrutura = estruturas.find(e => e.id === opcao.valor);
          if (estrutura) {
            visoes.push(...estrutura.visao);
          }
        }

        this.slides[3].opcoes = visoes.map(v => ({
          nome: v,
          valor: v,
          imagem: ImagensVisoes[v]
        }))

        this.respostas.estruturas = opcoes.map(o => o.valor);
      },
      opcoes: estruturas.map(e => ({
        nome: e.nome,
        valor: e.id,
        imagem: e.img
      }))
    },
    {
      pergunta: 'Escolha a visão do seu jogo',
      explicacao: 'Qual será a perspectiva que seu jogo terá?',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        this.respostas.visoes = opcoes.map(o => o.valor);
      },
      opcoes: []
    },
    {
      pergunta: 'Escolha o controle do seu jogo',
      explicacao: 'Você deve escolher qual a base de controle de seu jogo.',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        this.respostas.controles = opcoes.map(o => o.valor);
      },
      opcoes: controles.map(c => ({
        nome: c.nome,
        valor: c.id,
        imagem: c.img
      }))
    },
    {
      pergunta: 'Escolha o mapa do seu jogo',
      explicacao: 'O tipo de mapa reflete em grande parte de como será o jogo.',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        this.respostas.mapas = opcoes.map(o => o.valor);
      },
      opcoes: mapas.map(m => ({
        nome: m.nome,
        valor: m.id,
        imagem: m.img
      }))
    },
    {
      pergunta: 'Escolha a conexão do seu jogo',
      explicacao: 'O seu jogo procura um jogador ou mais?',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        this.respostas.conexoes = opcoes.map(o => o.valor);
      },
      opcoes: conexoes.map(c => ({
        nome: c.nome,
        valor: c.id,
        imagem: c.img
      }))
    },
    {
      pergunta: 'Escolha a plataforma do seu jogo',
      explicacao: 'Em qual dispositivo o seu jogo será executado?',
      escolhaMultipla: false,
      escolhasMaximas: 1,
      escolhaRetorno: (opcoes) => {
        this.respostas.plataformas = opcoes.map(o => o.valor);
      },
      opcoes: plataformas.map(p => ({
        nome: p.nome,
        valor: p.id,
        imagem: p.img
      }))
    }
  ];

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onSelect(opcao, slide) {
    if (slide.escolhaMultipla) {
      opcao.selecionada = !opcao.selecionada;
    } else {
      this.nextSlide();
      if (slide.escolhaRetorno) {
        slide.escolhaRetorno([opcao]);
      }
    }
  }

  nextSlide() {
    this.carousel.next();
  }

  continuar(slide) {
    if (slide.escolhaRetorno) {
      slide.escolhaRetorno(slide.opcoes.filter(o => o.selecionada));
    }

    this.nextSlide();
    console.log(this.respostas)
  }

  showContinue(slide) {
    let count = 0;
    slide.opcoes.forEach(o => {
      if (o.selecionada) {
        count++;
      }
    });

    return count <= slide.escolhasMaximas && count > 0;
  }

  protected readonly open = open;
}
