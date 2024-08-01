import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-eficiencia-del-motor',
  templateUrl: './eficiencia-del-motor.page.html',
  styleUrls: ['./eficiencia-del-motor.page.scss'],
})
export class EficienciaDelMotorPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }
  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Aquí navegas hacia atrás en la pila de navegación
    this.navCtrl.back();
  }
}
