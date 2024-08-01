import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-conversiones-unidades-hogar',
  templateUrl: './menu-conversiones-unidades-hogar.page.html',
  styleUrls: ['./menu-conversiones-unidades-hogar.page.scss'],
})
export class MenuConversionesUnidadesHogarPage implements OnInit {
  temperatura_espanol = "Temperatura";
  temperatura_ingles = "Temperature";
  tiempo_espanol = "Tiempo";
  tiempo_ingles = "Time";
  velocidad_espanol = "Velocidad";
  velocidad_ingles = "Speed";
  conversiones_espanol = " Conversión hogar";
  conversiones_ingles = " Conversions";
  public folder!: string;
  idiomaSeleccionado = "";
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
