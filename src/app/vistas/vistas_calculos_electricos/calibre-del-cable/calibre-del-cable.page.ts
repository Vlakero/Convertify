import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-calibre-del-cable',
  templateUrl: './calibre-del-cable.page.html',
  styleUrls: ['./calibre-del-cable.page.scss'],
})

export class CalibreDelCablePage implements OnInit {
  calibre_del_cable_espanol = "Calibre del cable:";
  calibre_del_cable_ingles = "Cable gauge:";
  longitud_linea_espanol ="Longitud de la linea (metros)";
  longitud_linea_ingles ="line length (meters)";
  caida_tension_permitida_espanol ="% Caida de tensión permitida";
  caida_tension_permitida_ingles ="Allowed voltage drop";
  tipo_aislamiento_espanol ="Tipo de aislamiento";
  tipo_aislamiento_ingles ="Insulation type";
  temperatura_ambiente_espanol ="Temperatura ambiente °C";
  temperatura_ambiente_ingles ="Ambient temperature °C";
  tipo_corriente_espanol ="Tipo de corriente";
  tipo_corriente_ingles ="Current type";
  continua_espanol ="Continua";
  continua_ingles ="Direct current";
  monofasica_espanol ="Monofásica";
  monofasica_ingles ="Single phase";
  bifasica_espanol ="Bifásica";
  bifasica_ingles ="Two phase";
  trifasica_espanol = "Trifásica";
  trifasica_ingles ="Three-phase";
  factor_potencia_espanol = "Factor de potencia";
  factor_potencia_ingles ="Power factor";
  tension_espanol ="Tensión (voltios)";
  tension_ingles ="Voltage (volts)";
  carga_espanol = "Carga (amperios)";
  carga_ingles = "Load (amps)";
  boton_calcular_espanol = "Calcular";
boton_calcular_ingles = "Calculate";
  longitudLinea: number = 0;
  caidaTension: number = 0;
  tipoAislamiento: string = '';
  temperaturaAmbiente: number = 0;
  tipoCorriente: string = '';
  factorPotencia: number = 1;
  tension: number = 0;
  carga: number = 0;
  calibre: string = '';
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
  calcularCalibre() {
    // Fórmulas y cálculos para obtener el calibre de cable

    // Calcular la caída de tensión
    const caidaTensionCalculada = (this.caidaTension / 100) * 100;

    // Obtener la resistividad del cobre en función de la temperatura ambiente
    const resistividad = this.obtenerResistividadCobre(this.temperaturaAmbiente);

    // Calcular el calibre de cable
    this.calibre = this.obtenerCalibreCable(this.longitudLinea, caidaTensionCalculada, resistividad);
  }

  obtenerResistividadCobre(temperaturaAmbiente: number): number {
    // Resistividad del cobre a 20°C (resistencia en ohmios por metro)
    const resistividad20 = 0.00000172;

    // Coeficiente de temperatura del cobre
    const coeficienteTemperatura = 0.00393;

    // Calcular la resistividad ajustada a la temperatura ambiente
    const resistividad = resistividad20 * (1 + coeficienteTemperatura * (temperaturaAmbiente - 20));

    return resistividad;
  }

  obtenerCalibreCable(longitudLinea: number, caidaTension: number, resistividad: number): string {
    // Tamaño máximo permitido del cable (mm²)
    const tamanoMaximoCable = 300;

    // Iterar a través de los tamaños de cable y calcular la caída de tensión
    for (let tamanoCable = 18; tamanoCable >= 0; tamanoCable--) {
      const areaCable = this.obtenerAreaCable(tamanoCable);

      // Calcular la resistencia del conductor
      const resistencia = resistividad * (longitudLinea / areaCable);

      // Calcular la caída de tensión
      const caidaTensionCalculada = (resistencia * 100) / (areaCable * caidaTension);

      // Si la caída de tensión calculada es menor o igual a la caída de tensión permitida, devolver el calibre del cable
      if (caidaTensionCalculada <= caidaTension && areaCable <= tamanoMaximoCable) {
        return tamanoCable.toString() + " mm2";
      }
    }

    return "No se encontró un calibre adecuado";
  }
   obtenerAreaCable(tamanoCable: number): number {
     // Tabla de áreas de sección transversal de cables (mm²)
     const tablaAreasCables = [
       0.82, 1.31, 2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49,
       67.43, 85.01, 107.2, 127, 152, 177, 203, 253, 304, 342, 387, 438, 495, 559,
       632, 712, 796, 884, 988, 1111, 1250, 1406, 1581, 1772, 1983, 2215, 2473, 2759,
       3079, 3439, 3846, 4301, 4810, 5378, 6015, 6728, 7523, 8416, 9435, 10500,
       11730, 13036, 14435, 15945, 17582, 19363, 21309, 23441, 25782, 28358, 31197,
       34320, 37757, 41532, 45685, 50249, 55264, 60775, 66832, 73484, 80789,
       88808, 97603, 107146
     ];
//falla al realizar las conversiones y determinar que calibre seria el adecuado
     return tablaAreasCables[tamanoCable];
   }

   obtenerFactorCorreccion(longitudLinea: number): number {
     // Tabla de factores de corrección para más de tres conductores portadores de corriente
     const tablaFactoresCorreccion = [
       { rango: [1, 3], factor: 1 },
       { rango: [4, 6], factor: 0.8 },
       { rango: [7, 9], factor: 0.7 },
       { rango: [10, 20], factor: 0.5 },
       { rango: [21, 30], factor: 0.45 },
       { rango: [31, 40], factor: 0.4 },
       { rango: [41, 60], factor: 0.35 }
     ];

     // Buscar el factor de corrección correspondiente al rango de longitud de línea
     for (const item of tablaFactoresCorreccion) {
      if (longitudLinea >= item.rango[0] && longitudLinea <= item.rango[1]) {
        return item.factor;
      }
    }

    return 1;
  }

}
