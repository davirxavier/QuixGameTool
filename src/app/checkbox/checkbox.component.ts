import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent {
  opcoes: { opcao1: boolean, opcao2: boolean, opcao3: boolean } = {
    opcao1: false,
    opcao2: false,
    opcao3: false
  };
}
