import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListaPrestamosPage } from './lista-prestamos.page';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
const routes: Routes = [
  {
    path: '',
    component: ListaPrestamosPage
  }
];

@NgModule({
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPrestamosPage]
})
export class ListaPrestamosPageModule {}
