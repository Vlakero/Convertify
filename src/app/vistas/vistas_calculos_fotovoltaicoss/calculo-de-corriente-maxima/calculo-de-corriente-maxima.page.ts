import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-calculo-de-corriente-maxima',
  templateUrl: './calculo-de-corriente-maxima.page.html',
  styleUrls: ['./calculo-de-corriente-maxima.page.scss'],
})
export class CalculoDeCorrienteMaximaPage implements OnInit {
  corriente_espanol= "Corriente (A):";
  corriente_ingles= "Current (A):";
  corriente_max_espanol= "Corriente máxima";
  corriente_max_ingles= "Maximum current";
  boton_calcular_espanol = "Calcular";
  boton_calcular_ingles = "Calculate";
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
  corriente: number = 0;
  imax: number = 0;
//probado, testeado y FUNCIONA da el resultado correcto
  calcularCorrienteMaxima() {
    this.imax = 1.25 * this.corriente;
  }
}
