import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  mensajeError: string = '';
  area_espanol = "Área";
  area_ingles = "Area";
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

  //logica para las conversiones
  unidadSeleccionadaOrigen = 'mm2';
  unidadSeleccionadaDestino = 'cm2';
  unidades = [
    { name: 'Milímetros cuadrados', value: 'mm2' },
    { name: 'Centímetros cuadrados', value: 'cm2' },
    { name: 'Decímetros cuadrados', value: 'dm2' },
    { name: 'Metros cuadrados', value: 'm2' },
    { name: 'Pies cuadrados', value: 'ft2' },
    { name: 'Pulgadas cuadradas', value: 'in2' },
    { name: 'Yardas cuadradas', value: 'yd2' },
    { name: 'Kilómetros cuadrados', value: 'km2' },
    { name: 'Acres', value: 'acre' },
    { name: 'Millas cuadradas', value: 'mi2' },
    { name: 'Hectáreas', value: 'ha' }


  ];
  cantidad: number | null = null;
  resultado = 0;
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado


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
  convertir() {


    this.mensajeError = "";
    if (this.unidadSeleccionadaOrigen === this.unidadSeleccionadaDestino) {
      this.mensajeError =  this.idiomaSeleccionado === 'es' ? 'La unidad de origen y la unidad de destino deben ser diferentes.' : 'The source unit and the destination unit must be different.';
      return;
    }
    if (this.cantidad === null || this.cantidad <= 0) {
      this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La cantidad debe ser mayor a 0' : 'Amount must be greater than 0';
      return;
    } 
    const factor = this.obtenerFactorConversion(this.unidadSeleccionadaOrigen, this.unidadSeleccionadaDestino);
    this.resultado = this.cantidad * factor;
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
    if (this.resultado.toString().length > 6) {
      this.resultado = parseFloat(this.resultado.toExponential(2));
    }
  }
//Falta corregir que se conviertan en numeros cientifico
  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {

      'mm2': { 'mm2': 1, 'cm2': 0.01, 'dm2': 1e-4, 'm2': 1e-6, 'ft2': 1.0764e-5, 'in2': 0.0015500031, 'yd2': 1.1959900463e-6, 'km2': 1e-12, 'acre': 2.4710538147e-10, 'ha': 1e-10 , 'mi2' : 3.861e-13}, //revisado todo correcto
      'cm2': { 'mm2': 100, 'cm2': 1, 'dm2': 0.01, 'm2': 0.0001, 'ft2': 0.001076391, 'in2': 0.1550003101, 'yd2': 1.1959900463e-5, 'km2': 1e-10, 'acre': 2.4710538147e-8, 'ha': 1e-8 , 'mi2' : 3.861e-11}, //revisado todo correcto
      'dm2': { 'mm2': 10000, 'cm2': 100, 'dm2': 1, 'm2': 0.01, 'ft2': 0.1076391042, 'in2': 15.5000310031, 'yd2': 0.000119599, 'km2': 1e-8, 'acre': 2.4710538147e-6, 'ha': 1e-6 , 'mi2' : 3.861e-9}, //revisado todo correcto
      'm2': { 'mm2': 1000000, 'cm2': 10000, 'dm2': 100, 'm2': 1, 'ft2': 10.7639104167, 'in2': 1550.00310031, 'yd2': 0.000119599, 'km2': 1e-6 , 'acre':0.000247105, 'ha':1e-4, 'mi2':3.861e-7},// revisado todo correcto
      'ft2': { 'mm2': 92903, 'cm2': 929.03, 'dm2':9.2903, 'm2': 0.092903, 'ft2': 1, 'in2': 144, 'yd2': 0.111111, 'km2' :9.2903e-8, 'acre': 2.2957e-5 ,'ha': 9.2903e-6, 'mi2': 3.587e-8},//revisado todo correcto
      'in2': { 'mm2': 645.16, 'cm2': 6.4516, 'dm2':0.064516, 'm2': 0.00064516, 'ft2': 0.00694444, 'in2': 1, 'yd2': 0.000771605, 'km2': 6.4516e-10, 'acre':1.5942e-7  ,'ha': 6.4516e-8 , 'mi2': 2.491e-10}, //revisado todo correcto
      'yd2': { 'mm2': 836127, 'cm2': 8361.27, 'dm2':83.6127, 'm2': 0.836127, 'ft2': 9, 'in2': 1296, 'yd2': 1, 'km2': 8.3613e-7, 'acre' : 0.000206612, 'ha': 8.3613e-5, 'mi2': 3.2283e-7 },//revisado todo correcto
      'km2': { 'mm2': 1e+12, 'cm2': 1e+10, 'dm2': 1e+8, 'm2': 1e+6, 'ft2': 1.076e+7, 'in2': 1.55e+9, 'yd2': 1.196e+6, 'km2' : 1,'acre': 247.105, 'ha': 100, 'mi2': 0.386102 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'acre': { 'mm2': 4.047e+9, 'cm2': 4.047e+7, 'dm2':404686, 'm2': 4046.86, 'ft2': 43560, 'in2': 6.273e+6, 'yd2': 4840, 'km2': 0.00404686, 'acre': 1,  'ha': 0.404686 , 'mi2': 0.0015625},//revisado los resultados son correctos pero no se convierte en numero cientifico
      'mi2': { 'mm2': 2.59e+12, 'cm2': 2.59e+10, 'dm2':2.59e+8, 'm2': 2.59e+6, 'ft2': 2.788e+7, 'in2': 4.014e+9, 'yd2': 3.098e+6, 'km2': 2.58999, 'acre': 640, 'ha': 258.999 , 'mi2': 1},//revisado los resultados son correctos pero no se convierte en numero cientifico
      'ha': { 'mm2': 1e+10, 'cm2': 1e+8, 'dm2':1000000, 'm2': 10000, 'ft2': 107639, 'in2': 1.55e+7, 'yd2': 11959.9, 'km2':0.01, 'acre':2.47105, 'ha': 1, 'mi2':0.00386102 }//revisado los resultados son correctos pero no se convierte en numero cientifico

      };

      return factoresConversion[unidadOrigen][unidadDestino];
      }
}
