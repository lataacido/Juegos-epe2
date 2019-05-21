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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
