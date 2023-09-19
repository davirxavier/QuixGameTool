import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent {

  formGroup = new FormGroup({
    nome: new FormControl('Anonimo', [Validators.required]),
    categoria: new FormControl(undefined),
    estrutura: new FormControl(undefined),
    genero: new FormControl(undefined)
  });

  categorias: any[] = [
    {
      id: 1,
      nome: "Ação"
    },
    {
      id: 2,
      nome: "Aventura"
    },
    {
      id: 3,
      nome: "Arcade"
    },
    {
      id: 4,
      nome: "Aponte e clique"
    },
    {
      id: 5,
      nome: "Cartas"
    },
    {
      id: 6,
      nome: "Estratégia"
    },
    {
      id: 8,
      nome: "Luta"
    },
    {
      id: 9,
      nome: "Musical"
    },
    {
      id: 10,
      nome: "RPG"
    },
    {
      id: 11,
      nome: "Simulação"
    },
    {
      id: 12,
      nome: "Terror"
    },
    {
      id: 13,
      nome: "Textual"
    },
  ];

  estruturas: any[] = [
    {
      id: 1,
      nome: "2D"
    },
    {
      id: 2,
      nome: "2.5D"
    },
    {
      id: 3,
      nome: "3D"
    }
  ];

  generos: any[] = [
    {
      id: 1,
      nome: "Primeira Pessoa"
    },
    {
      id: 2,
      nome: "Terceira Pessoa"
    },
    {
      id: 3,
      nome: "Plataforma"
    },
    {
      id: 4,
      nome: "Soulslike"
    },
    {
      id: 5,
      nome: "Turnos"
    },
    {
      id: 6,
      nome: "Educativo"
    },
    {
      id: 7,
      nome: "Hack 'n' Slash"
    },
    {
      id: 8,
      nome: "Esportes"
    }
  ];

  onSubmit() {
    console.log(this.formGroup.value)
  }

  protected readonly undefined = undefined;
}
