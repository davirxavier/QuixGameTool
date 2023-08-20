import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginainicialComponent} from "./paginainicial/paginainicial.component";
import {SobreComponent} from "./sobre/sobre.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ContatoComponent} from "./contato/contato.component";

const routes: Routes = [
  {
    path: "pagina-inicial", component: PaginainicialComponent
  },
  {
    path: "sobre", component: SobreComponent
  },
  {
    path: "checkbox", component: CheckboxComponent
  },
  {
    path: "contato", component: ContatoComponent
  },
  {
    path: '', redirectTo: '/pagina-inicial', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/pagina-inicial' ,pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
