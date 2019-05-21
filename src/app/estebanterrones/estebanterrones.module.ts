import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstebanterronesPage } from './estebanterrones.page';

const routes: Routes = [
  {
    path: '',
    component: EstebanterronesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstebanterronesPage]
})
export class EstebanterronesPageModule {}
