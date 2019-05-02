import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';

import { IonicModule } from '@ionic/angular';

import { ListeventosPage } from './listeventos.page';

const routes: Routes = [
  {
    path: '',
    component: ListeventosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TableModule
  ],
  declarations: [ListeventosPage]
})
export class ListeventosPageModule {}
