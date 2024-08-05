import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payscreen',
  templateUrl: './payscreen.page.html',
  styleUrls: ['./payscreen.page.scss'],
})
export class PayscreenPage  {

  idiomaSeleccionado: string = 'es'; // Ajusta el idioma según tu lógica

  constructor(private navCtrl: NavController) {}

  goToPayment() {
    this.navCtrl.navigateForward('/pasarela-de-pago');
  }

  goToMonthly() {
    this.navCtrl.navigateForward('/pasarela-mensual');
  }

  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }
}