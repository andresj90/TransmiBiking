import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrestamoPage } from './prestamo.page';
import { TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
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
    TableModule,
    AccordionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrestamoPage]
})
export class PrestamoPageModule {}
