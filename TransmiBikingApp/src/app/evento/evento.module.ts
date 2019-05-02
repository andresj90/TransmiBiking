import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import { IonicModule } from '@ionic/angular';
import {OrderListModule} from 'primeng/orderlist';

import { EventoPage } from './evento.page';

const routes: Routes = [
  {
    path: '',
    component: EventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarouselModule,
    OrderListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventoPage]
})
export class EventoPageModule {}
