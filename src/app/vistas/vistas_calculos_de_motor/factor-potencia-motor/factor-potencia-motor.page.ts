import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-factor-potencia-motor',
  templateUrl: './factor-potencia-motor.page.html',
  styleUrls: ['./factor-potencia-motor.page.scss'],
})
export class FactorPotenciaMotorPage implements OnInit {

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
