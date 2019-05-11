import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrestamoPage } from './prestamo.page';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ListaPrestamosPage } from '../lista-prestamos/lista-prestamos.page';
import { TableModule } from 'primeng/table';
const routes: Routes = [
  {
    path: '',
    component: PrestamoPage
  }
];

@NgModule({
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PanelModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestamoPage, ListaPrestamosPage]
})
export class PrestamoPageModule { }
