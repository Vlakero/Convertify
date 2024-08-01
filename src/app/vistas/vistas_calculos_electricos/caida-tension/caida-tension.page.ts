import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-caida-tension',
  templateUrl: './caida-tension.page.html',
  styleUrls: ['./caida-tension.page.scss'],
})
export class CaidaTensionPage implements OnInit {
  calibre: number =  0;
  tension: number = 0;
  distancia: number = 0;
  factorPotencia: number = 0.9;
  fases: number = 2;
  fase: number = 1.732;
  vlN: number = 127;
  vff: number = 220;
  resistenciaConductor: number = 0;
  impedanciaConductor: number = 0;
  caidaTension: number = 0;
  porcentajeCaidaTension: number = 0;
  porcentajeCaidaTensionbt: number = 0;
//--------empieza traducción--------------
caida_tension_espanol = "Caída de tensión";
caida_tension_ingles = "Tension fall";
calibre_conductor_espanol = "Calibre:";
calibre_conductor_ingles = "Wire size:";
amperaje_espanol ="Amperaje:";
amperaje_ingles ="Amperage:";
distancia_metros_espanol ="Distancia en metros:";
distancia_metros_ingles ="Distance in mts:";
factor_potencia_espanol ="Factor de potencia:";
factor_potencia_ingles ="Power factor:";
fases_espanol ="Fases:";
fases_ingles ="Phases:";
vln_espanol ="Vln:";
vln_ingles ="Vln:";
vff_espanol ="Vff:";
vff_ingles ="Vff:";
impedancia_espanol = "Impedancia del conductor";
impedancia_ingles = "Driver impedance";
resistencia_espanol ="Resistencia del conductor: ";
resistencia_ingles ="Conductor resistance:";
porcentaje_caida_tension_espanol ="Caída de tensión %:";
porcentaje_caida_tension_ingles="Tension fall %:";
idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
public folder!: string;
tipoCorriente: string = 'Corriente_monofasica';
tipoConductor: string = 'noCubierto'; 
   // Define un diccionario que mapea el calibre AWG a su resistencia correspondiente.


  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || 'es';
  }

  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }



  calibres = [
    { name: '14', value: 19, conversion: 52.97, noCubierto: 10.3, recubierto: 10.7, aluminio: 16.9, PVC: 10.2, Aluminios: 10.2, acero:10.2},
    { name: '12', value: 18, conversion: 33.34, noCubierto: 6.5, recubierto: 6.73, aluminio: 10.69, PVC: 6.6, Aluminios: 6.6, acero:6.6},
    { name: '10', value: 17, conversion: 20.96, noCubierto: 4.07, recubierto: 4.226, aluminio: 6.679, PVC: 3.9, Aluminios: 3.9, acero:3.9},
    { name: '8', value: 16, conversion: 13.18, noCubierto: 2.551, recubierto: 2.653, aluminio: 4.204, PVC: 2.56, Aluminios: 2.56, acero:2.56},
    { name: '6', value: 15, conversion: 8.29 , noCubierto: 1.608, recubierto: 1.671, aluminio: 2.652, PVC: 1.61, Aluminios: 1.61, acero:1.61},
    { name: '4', value: 14, conversion: 5.21, noCubierto: 1.01, recubierto: 1.053, aluminio: 1.666, PVC: 1.02, Aluminios: 1.02, acero:1.02},
    { name: '2', value: 13, conversion: 3.28, noCubierto: 0.634, recubierto: 0.661, aluminio: 1.045, PVC: 0.62, Aluminios: 0.66, acero:0.66},
    { name: '1', value: 12, conversion: 2.65, noCubierto: 0.505, recubierto: 0.524, aluminio: 0.829, PVC: 0.49, Aluminios: 0.52, acero:0.52},
    { name: '1/0', value: 11, conversion:  2.06, noCubierto: 0.399, recubierto: 0.415, aluminio: 0.66, PVC: 0.39, Aluminios: 0.43, acero:0.39},
    { name: '2/0', value: 10, conversion: 1.64, noCubierto: 0.317, recubierto: 0.329, aluminio: 0.523, PVC: 0.33, Aluminios: 0.33, acero:0.33},
    { name: '3/0', value: 9, conversion: 1.30, noCubierto: 0.2512, recubierto: 0.261, aluminio: 0.413, PVC: 0.253, Aluminios: 0.269, acero:0.259},
    { name: '4/0', value: 8, conversion:  1.03, noCubierto: 0.1996, recubierto: 0.205, aluminio: 0.328, PVC: 0.203, Aluminios: 0.220, acero:0.207},
    { name: '250', value: 7, conversion: 0.87, noCubierto: 0.1687, recubierto: 0.1753, aluminio: 0.2778, PVC: 0.171, Aluminios: 0.187, acero:0.177},
    { name: '300', value: 6, conversion: 0.73, noCubierto: 0.1409, recubierto: 0.1463, aluminio: 0.2318, PVC: 0.144, Aluminios: 0.161, acero:0.148},
    { name: '350', value: 5, conversion:  0.62, noCubierto: 0.1205, recubierto: 0.1252, aluminio: 0.1984, PVC: 0.125, Aluminios: 0.141, acero:0.128},
    { name: '400', value: 4, conversion: 0.54, noCubierto: 0.1053, recubierto: 0.1084, aluminio: 0.1737, PVC: 0.108, Aluminios: 0.125, acero:0.115},
    { name: '500', value: 3, conversion: 0.44, noCubierto: 0.0845, recubierto: 0.0869, aluminio: 0.1391, PVC: 0.089, Aluminios: 0.105, acero:0.095},
    { name: '600', value: 2, conversion: 0.36, noCubierto: 0.0704, recubierto: 0.0732, aluminio: 0.1159, PVC: 0.075, Aluminios: 0.092, acero:0.082},
    { name: '750', value: 1, conversion: 0.33, noCubierto: 0.0563, recubierto: 0.0579, aluminio: 0.0927, PVC: 0.062, Aluminios: 0.079, acero:0.069},
    { name: '1000', value: 0, conversion: 0.31, noCubierto: 0.0423, recubierto: 0.0434, aluminio: 0.0695, PVC: 0.049, Aluminios: 0.062, acero:0.059},
  ];
  unidadSeleccionadaCalibre = 17;

  // Función para calcular la resistencia del conductor basada en el calibre ingresado.


  // Logica para el cálculo de la caída de tensión
  calcularCaidaTension() {
    // Dependiendo del tipo de corriente que elija, realiza las operaciones correspondientes.
    let corriente = this.tension;
//los calculoos tiene un porcentaje pequeño de margen de error pero en general arrojan resultados
//casi precisos excepto en trifasica el margen de error es mucho mas grande
     if ( this.tipoCorriente === 'Corriente_monofasica' ) {
      corriente *= this.fases/2;
    }
    else if (this.tipoCorriente === 'Corriente_bifasica'){
      corriente *= this.fases;
    }
     else if (this.tipoCorriente === 'Corriente_trifasica'){
      corriente *= this.fase;
     }
    // Convierte la distancia a kilómetros.
    const distancia_Kilometros = this.distancia / 1000;

    // Calcula la resistencia total del conductor en ohmios.
    const resistenciaTotal = this.resistenciaConductor + this.impedanciaConductor;

    // Calcula la caída de tensión en volts.
    this.caidaTension = corriente * resistenciaTotal * distancia_Kilometros;

    // Calcula el porcentaje de caída de tensión.
    this.porcentajeCaidaTension = (this.caidaTension/this.vlN) * 100;
    this.porcentajeCaidaTensionbt = (this.caidaTension/this.vff) * 100;

    // Redondea los resultados a 2 decimales.
    this.caidaTension = +this.caidaTension.toFixed(5);
    this.porcentajeCaidaTension = +this.porcentajeCaidaTension.toFixed(2);
    this.porcentajeCaidaTensionbt = +this.porcentajeCaidaTensionbt.toFixed(2);
  }
}
