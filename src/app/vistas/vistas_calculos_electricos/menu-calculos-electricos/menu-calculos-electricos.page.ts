import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-calculos-electricos',
  templateUrl: './menu-calculos-electricos.page.html',
  styleUrls: ['./menu-calculos-electricos.page.scss'],
})
export class MenuCalculosElectricosPage implements OnInit {
  public folder!: string;
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  caida_tension_espanol = "Caída de tensión";
  caida_tension_ingles = "Tension fall";
  calculo_corriente_espanol = "Cálculo de corriente";
  calculo_corriente_ingles = "Current calculation";
  calculo_corriente_max_espanol = "Cálculo de corriente max";
  calculo_corriente_max_ingles = "Calculation of max current";
  calibre_cable_espanol = "Calibre del cable";
  calibre_cable_ingles = "Cable gauge";
  medida_peso_cable_espanol = "Medida/peso cable";
  medida_peso_cable_ingles = "Cable size and weight";
  calculos_espanol ="Cálculos eléctricos";
  calculos_ingles = "Calculations";
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
