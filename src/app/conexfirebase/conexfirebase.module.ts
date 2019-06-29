import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConexfirebasePage } from './conexfirebase.page';

const routes: Routes = [
  {
    path: '',
    component: ConexfirebasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConexfirebasePage]
})
export class ConexfirebasePageModule {}
