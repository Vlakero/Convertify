import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-conversiones-unidades-basicas',
  templateUrl: './menu-conversiones-unidades-basicas.page.html',
  styleUrls: ['./menu-conversiones-unidades-basicas.page.scss'],
})
export class MenuConversionesUnidadesBasicasPage implements OnInit {
  public folder!: string;
  conversiones_espanol = " Conversiones básicas";
  conversiones_ingles = " Conversions ";
  longitud_espanol = "Longitud";
  longitud_ingles = "Length";
  area_espanol = "Área";
  area_ingles = "Area";
  peso_espanol = "Peso";
  peso_ingles = "Weight";
  volumen_espanol = "Volumen";
  volumen_ingles = "Volume";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad


  items = [
    { href: 'longitud', icon: 'create-outline', title_es: 'Longitud', title_en: 'Length' },
    { href: 'area', icon: 'square-outline', title_es: 'Área', title_en: 'Area' },
    { href: 'peso', icon: 'barbell-outline', title_es: 'Peso', title_en: 'Weight' },
    { href: 'volumen', icon: 'cube-outline', title_es: 'Volumen', title_en: 'Volume' }
  ];
  
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}

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





