import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasnferenciasPageRoutingModule } from './trasnferencias-routing.module';

import { TrasnferenciasPage } from './trasnferencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasnferenciasPageRoutingModule
  ],
  declarations: [TrasnferenciasPage]
})
export class TrasnferenciasPageModule {}
