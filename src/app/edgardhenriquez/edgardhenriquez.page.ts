import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-edgardhenriquez',
  templateUrl: './edgardhenriquez.page.html',
  styleUrls: ['./edgardhenriquez.page.scss'],
})
export class EdgardhenriquezPage implements OnInit {
  //aqui le damos parametros al constructor, los paremtros se importan y luego se usan.
  constructor(public navController : NavController, public actionSheetController: ActionSheetController ) { }
  ngOnInit() {
  }
  //con estos metodos navegamos entre paginas con el toolbar
  paginas(){
    this.navController.navigateForward('paginas')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }

//con este metodo asincrono se crea al actionsheet o hoja de accion
  async ACTIONSHEET() {
    const actionSheet = await this.actionSheetController.create({
      //de aqui en adelante el actionsheet se forma y se le dan opciones.
      header: 'Sobre que quieres saber mas',
      buttons: [{
        text: 'Samus',
        icon: 'eye',
        handler: () => {
          this.navController.navigateForward('samus')
        }
      },{
        text: 'Metroids',
        icon: 'eye',
        handler: () => {
          this.navController.navigateForward('metroid')
        }
      },{
        text: 'Federacion Galactica',
        icon: 'eye',
        handler: () => {
          this.navController.navigateForward('federacion')
        }
      }, {text: 'Titulos',
        icon: 'eye',
        handler: () => {
        this.navController.navigateForward('titulos')
      }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    //para que el actionsheet se mantenga en espera
    await actionSheet.present();
  }
}
