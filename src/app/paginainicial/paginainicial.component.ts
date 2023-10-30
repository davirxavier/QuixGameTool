import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";
import {categorias} from "../models/lista-categorias";
import {Genero, ImagensGenero} from "../models/classes";

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
    generos: []
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
