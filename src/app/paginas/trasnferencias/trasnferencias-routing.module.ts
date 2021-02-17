import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasnferenciasPage } from './trasnferencias.page';

const routes: Routes = [
  {
    path: '',
    component: TrasnferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrasnferenciasPageRoutingModule {}
