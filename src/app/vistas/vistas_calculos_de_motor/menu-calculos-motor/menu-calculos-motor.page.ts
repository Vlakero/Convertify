import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-calculos-motor',
  templateUrl: './menu-calculos-motor.page.html',
  styleUrls: ['./menu-calculos-motor.page.scss'],
})
export class MenuCalculosMotorPage implements OnInit {
  calculos_espanol ="Cálculos de motor";
  calculos_ingles = "Calculations";
  corriente_motor_espanol = "Corriente del motor";
corriente_motor_ingles = "Motor current";
potencia_motor_espanol = "Potencia del motor";
potencia_motor_ingles = "Engine power";
tension_motor_espanol = "Tensión del motor";
tension_motor_ingles = "Motor voltage";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;

  constructor(private navCtrl: NavController,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
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
