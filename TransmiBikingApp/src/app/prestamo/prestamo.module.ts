import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrestamoPage } from './prestamo.page';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
const routes: Routes = [
  {
    path: '',
    component: PrestamoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestamoPage]
})
export class PrestamoPageModule {}
