import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {Categoria, Conexao, Controle, Estrutura, Genero, Mapa, Plataforma, Visao} from "../models/classes";
import {categorias} from "../models/lista-categorias";
import {estruturas} from "../models/lista-estruturas";
import {controles} from "../models/lista-controles";
import {mapas} from "../models/lista-mapas";
import {conexoes} from "../models/lista-conexoes";
import {plataformas} from "../models/lista-plataformas";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent implements OnInit {

  formGroup = new FormGroup({
    categoria: new FormControl(undefined),
    estrutura: new FormControl(undefined),
    genero: new FormControl(undefined),
    visao: new FormControl(undefined),
    controle: new FormControl(undefined),
    mapa: new FormControl(undefined),
    conexao: new FormControl(undefined),
    plataforma: new FormControl(undefined)
  });

  estruturas: Estrutura[] = [...estruturas];

  categorias: Categoria[] = [...categorias];

  generos: Genero[] = [];

  visoes: Visao[] = [];

  controles: Controle[] = [...controles];

  mapas: Mapa[] = [...mapas];

  conexoes: Conexao[] = [...conexoes];

  plataformas: Plataforma[] = [...plataformas];

  ngOnInit() {
    this.formGroup.controls.estrutura.valueChanges.subscribe(estruturaId => {
      this.visoes = [];

      const estrutura = this.estruturas.find(e => e.id == estruturaId);
      if (estrutura) {
        this.visoes = this.visoes.concat(estrutura.visao);
      }

      this.visoes.sort((visao1, visao2) => visao1.localeCompare(visao2));
    });

    this.formGroup.controls.categoria.valueChanges.subscribe(categoriaIds => {
      this.generos = [];

      for (let categoriaId of categoriaIds) {
        const categoria = this.categorias.find(c => c.id == categoriaId);
        if (categoria) {
          this.generos = this.generos.concat(categoria.generos);
        }
      }

      this.generos.sort((genero1, genero2) => genero1.localeCompare(genero2));
    });
  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

  protected readonly undefined = undefined;
}
