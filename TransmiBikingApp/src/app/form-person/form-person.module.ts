import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormPersonPage } from './form-person.page';
import { PanelModule } from 'primeng/panel';
const routes: Routes = [
  {
    path: '',
    component: FormPersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPersonPage]
})
export class FormPersonPageModule {}
