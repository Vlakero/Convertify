import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  public folder!: string;
  // traducciones
  acerca_de_espanol = "Acerca de";
  acerca_de_ingles = "About";
  descripcion_texto_espanol = "Convertify es una aplicación de cálculos y conversiones que está diseñada para cualquier tipo de usuarios, tanto para estudiantes como profesionistas y cualquier otra persona interesada en su uso.";
  descripcion_texto_ingles = "Convertify is an application for calculations and conversions that is designed for any type of user, both students and professionals and anyone else interested in its use.";
  acerca_de_app_texto_espanol = "Te ayudará a realizar una variedad de cálculos relacionados con conversiones de unidades básicas, divisas, unidades del hogar, de ciencia y unidades varias, además de la electricidad, motores eléctricos y temas fotovoltaicos.";
  acerca_de_app_texto_ingles = "It will help you perform a variety of calculations related to basic unit conversions, currencies, household, science and miscellaneous units, as well as electricity, electric motors and photovoltaic topics.";
  nota_espanol = "Tipo de Licencia:";
  nota_ingles = "Type of License";
  nota_texto_espanol = "Version Básica o Version PRO";
  nota_texto_ingles = "Basic Version or PRO Version";
  correo_texto_espanol = "Para cualquier solicitud o duda contactar al correo: proyectos@ulsolarmx.com";
  correo_texto_ingles = "For any request or question, please contact us at: proyectos@ulsolarmx.com";
  version_espanol = "Versión"
  version_ingles = "Version"
  version_texto_espanol = "2.1"
  version_texto_ingles = "2.1"
  idiomaSeleccionado = ""; // Variable para almacenar el idioma seleccionado
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {// Recuperar el idioma seleccionado del localStorage al cargar la página
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }
  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }
  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }
}
