import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-conversiones-varias',
  templateUrl: './menu-conversiones-varias.page.html',
  styleUrls: ['./menu-conversiones-varias.page.scss'],
})
export class MenuConversionesVariasPage implements OnInit {
  angulos_espanol = "Ángulos";
  angulos_ingles = "Angles";
  datos_espanol = "Datos";
  datos_ingles= "Data";
  conversiones_espanol = " Conversión varias";
  conversiones_ingles = " Conversions";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  constructor(private navCtrl: NavController,private activatedRoute: ActivatedRoute) { }

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
