import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { CrudService } from '../conexfirebase/conexfirebase.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
 
 
  students: any;
  juegosNombre: string;
  juegosPrecio: number;
  juegosPlata: string;
  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private crudService: CrudService,
     public navController : NavController,
      public alertCrtl : AlertController
  ) {}
 
  ngOnInit(){
    
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    
    this.crudService.read_Students().subscribe(data => {

      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Nombre: e.payload.doc.data()['Nombre'],
          Precio: e.payload.doc.data()['Precio'],
          Plata: e.payload.doc.data()['Plata'],
        };
      })
      console.log(this.students);

    });
  }
  
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

  
  CreateRecord() {
    let record = {};
    record['Nombre'] = this.juegosNombre;
    record['Precio'] = this.juegosPrecio;
    record['Plata'] = this.juegosPlata;
    this.crudService.create_NewStudent(record).then(resp => {
      this.juegosNombre = "";
      this.juegosPrecio = undefined;
      this.juegosPlata = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditNombre = record.Nombre;
    record.EditPrecio = record.Precio;
    record.EditPlata = record.Plata;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Nombre'] = recordRow.EditNombre;
    record['Precio'] = recordRow.EditPrecio;
    record['Plata'] = recordRow.EditPlata;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }

}