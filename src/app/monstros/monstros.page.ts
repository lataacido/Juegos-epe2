import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import {AlertController} from '@ionic/angular';

import { CrudService } from '../conexfirebase/conexfirebase.page';

@Component({
  selector: 'app-monstros',
  templateUrl: './monstros.page.html',
  styleUrls: ['./monstros.page.scss'],
})
export class MonstrosPage implements OnInit {
  
  students: any;
  juegosNombre: string;
  juegosPrecio: number;
  juegosPlata: string;


  constructor(private crudService: CrudService, public navController : NavController, public alertCrtl : AlertController) { }

  
  ngOnInit() {
    this.crudService.read_Students().subscribe(data => {

      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Nombre: e.payload.doc.data()['Nombre'],
          Precio: e.payload.doc.data()['Precio'],
          Plata: e.payload.doc.data()['Plata'],
          URL:e.payload.doc.data()['URL'],
        };
      })
      console.log(this.students);

    });
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }
  
  pagame(){
    this.navController.navigateForward('pagame')
  }

}