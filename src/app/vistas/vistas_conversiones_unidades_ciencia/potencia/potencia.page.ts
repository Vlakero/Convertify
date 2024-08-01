import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-potencia',
  templateUrl: './potencia.page.html',
  styleUrls: ['./potencia.page.scss'],
})
export class PotenciaPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  potencia_espanol = "Potencia";
  potencia_ingles = "Power";
  convertir_de_espanol = "Convertir:";
  convertir_de_ingles = " Convert:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount to convert:";
  a_espanol = "A:";
  a_ingles = "To:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado
//logica para las conversiones
  unidadSeleccionadaOrigen = 'W';
  unidadSeleccionadaDestino = 'kW';
  unidades = [
    { name: 'Watt (W)', value: 'W' },
    { name: 'Kilowatt (kW)', value: 'kW' },
    { name: 'Megawatt (MW)', value: 'MW' },
    { name: 'Kilocaloría por segundo (kcal/s)', value: 'kcal/s' },
    { name: 'Kilocaloría por hora (kcal/h)', value: 'kcal/h' },
    { name: 'Horsepower (HP)', value: 'HP' },
    { name: 'Pferdestärke (PS)', value: 'PS' },
    { name: 'BTU por hora (BTU/h)', value: 'BTU/h' },
    { name: 'Ton of Refrigeration (TR)', value: 'TR' },
    { name: 'Brake Horsepower (BHP)', value: 'BHP' }
  ];
  cantidad: number | null = null; 
  resultado = 0;

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
  convertir() {
    this.mensajeError = "";
    if (this.unidadSeleccionadaOrigen === this.unidadSeleccionadaDestino) {
      this.mensajeError =  this.idiomaSeleccionado === 'es' ? 'La unidad de origen y la unidad de destino deben ser diferentes.' : 'The source unit and the destination unit must be different.';
      return;
    }
    if (this.cantidad === null || this.cantidad <= 0){
      this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La cantidad debe ser mayor a 0' : 'Amount must be greater than 0';
      return;
    }
    const factor = this.obtenerFactorConversion(this.unidadSeleccionadaOrigen, this.unidadSeleccionadaDestino);
    this.resultado = this.cantidad * factor;
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      'W': { 'W': 1, 'kW': 0.001, 'MW': 0.000001, 'kcal/s': 0.000239006, 'kcal/h': 0.859845, 'HP': 0.001341022, 'PS': 0.00135962, 'BTU/h': 3.4121416331, 'TR': 0.000284345, 'BHP': 0.00134102}, //revisado todo correcto
      'kW': { 'W': 1000, 'kW': 1, 'MW': 0.001, 'kcal/s': 238.8459, 'kcal/h': 860421, 'HP': 1.341022, 'PS': 1.3596216, 'BTU/h': 3412.1416331, 'TR': 0.2843452, 'BHP': 1.3404826 },//revisado todo correcto
      'MW': { 'W': 1000000, 'kW': 1000, 'MW': 1, 'kcal/s': 238845.9, 'kcal/h': 860421000, 'HP': 1341.022, 'PS': 1359.6216, 'BTU/h': 3412141.6331, 'TR': 284.3452, 'BHP': 1340.4826 },//revisado todo correcto
      'kcal/s': { 'kcal/s': 1, 'W': 4.184, 'kW': 0.004184, 'MW': 0.000004184, 'kcal/h': 3600, 'HP': 0.0015596114, 'PS': 0.0015782376, 'BTU/h': 3.9683207216, 'TR': 0.0003306945, 'BHP': 0.0015588855 },//revisado todo correcto
     'HP': { 'W': 745.699872, 'kW': 0.745699872, 'MW': 0.0007456999, 'kcal/s': 178.107856, 'kcal/h': 641.6152816, 'HP': 1, 'PS': 1.013869678, 'BTU/h': 2544.433579, 'TR': 0.2118884378, 'BHP': 0.999987267 },//revisado todo correcto
     'PS': { 'W': 735.49875, 'kW': 0.73549875, 'MW': 0.0007354988, 'kcal/s': 175.42146, 'kcal/h': 631.517256, 'HP': 0.9863200576, 'PS': 1, 'BTU/h': 2509.588436, 'TR': 0.2083333333, 'BHP': 0.9859574026 },//revisado todo correcto
     'BTU/h': { 'W': 0.2930710702, 'kW': 0.0002930711, 'MW': 0.0000002931, 'kcal/s': 0.2519957611, 'kcal/h': 859.8452279, 'HP': 0.0003930148, 'PS': 0.0003984772, 'BTU/h': 1, 'TR': 0.0833333333, 'BHP': 0.0003928571 },//revisado todo correcto
     'TR': { 'W': 3516.8528421, 'kW': 3.5168528421, 'MW': 0.0035168528, 'kcal/s': 843.3398155, 'kcal/h': 3036.2933056, 'HP': 4.714471128, 'PS': 4.7812620399, 'BTU/h': 12000, 'TR': 1, 'BHP': 4.7135338893 },//revisado todo correcto
     'BHP': { 'W': 745.699872, 'kW': 0.745699872, 'MW': 0.745699872, 'kcal/s': 178.107856, 'kcal/h': 641.6152816, 'HP': 1.013869678, 'PS': 1.027121, 'BTU/h': 2544.433579, 'TR': 0.2118884378, 'BHP': 1 }//revisado todo correcto
   };

   return factoresConversion[unidadOrigen][unidadDestino];
 }
}
