import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-edgardhenriquez',
  templateUrl: './edgardhenriquez.page.html',
  styleUrls: ['./edgardhenriquez.page.scss'],
})
export class EdgardhenriquezPage implements OnInit {
 
  constructor(public navController : NavController, public actionSheetController: ActionSheetController ) { }
  ngOnInit() {
  }
  paginas(){
    this.navController.navigateForward('paginas')
  }
  
  tabs(){
    this.navController.navigateForward('tabs')
  }

  async ACTIONSHEET() {
    const actionSheet = await this.actionSheetController.create({
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
    await actionSheet.present();
  }
}
