import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-conversiones-ciencia',
  templateUrl: './menu-conversiones-ciencia.page.html',
  styleUrls: ['./menu-conversiones-ciencia.page.scss'],
})
export class MenuConversionesCienciaPage implements OnInit {
  fuerza_espanol = "Fuerza";
  fuerza_ingles = "Force";
  potencia_espanol = "Potencia";
  potencia_ingles = "Power";
  presion_espanol = "Presión";
  presion_ingles = "Pressure";
  energia_espanol = "Energía";
  energia_ingles = "Energy";
  convertir_de_espanol = "Convertir de:";
  convertir_de_ingles = " Convert from:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount to convert:";
  a_espanol = "a:";
  a_ingles = "a:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  conversiones_espanol = " Conversión ciencia";
  conversiones_ingles = " Conversions";
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
