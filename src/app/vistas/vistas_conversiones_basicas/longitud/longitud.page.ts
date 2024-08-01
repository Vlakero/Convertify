import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-longitud',
  templateUrl: './longitud.page.html',
  styleUrls: ['./longitud.page.scss'],
})
export class LongitudPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  longitud_espanol = "Longitud";
  longitud_ingles = "Length";
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
  public folder!: string;
//Logica para realizar las converisones
  unidadSeleccionadaOrigen = 'm';
  unidadSeleccionadaDestino = 'km';
  unidades = [
    { name: 'Milímetros', value: 'mm' },
    { name: 'Centímetros', value: 'cm' },
    { name: 'Decímetros', value: 'dm' },
    { name: 'Metros', value: 'm' },
    { name: 'Pulgadas', value: 'in' },
    { name: 'Pies', value: 'ft' },
    { name: 'Yardas', value: 'yd' },
    { name: 'Millas', value: 'mi' },
    { name: 'Kilómetros', value: 'km' }
  ];
  cantidad: number | null = null;
  resultado = 0;
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado


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
    if (this.cantidad === null || this.cantidad <= 0) {
      this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La cantidad debe ser mayor a 0' : 'Amount must be greater than 0';
      return;
    }

    const factor = this.obtenerFactorConversion(this.unidadSeleccionadaOrigen, this.unidadSeleccionadaDestino);
    this.resultado = this.cantidad * factor;
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });

  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      'mm': { 'mm': 1, 'cm': 0.1, 'dm': 0.01, 'm': 0.001, 'in': 0.0393701, 'ft': 0.00328084, 'yd': 0.00109361, 'mi': 0.621371, 'km': 0.001 },//revisado todo correcto
      'cm': { 'mm': 10, 'cm': 1, 'dm': 0.1, 'm': 0.01, 'in': 0.393701, 'ft': 0.0328084, 'yd': 0.0109361, 'mi': 0.00000621371, 'km': 0.00001 },//revisado todo correcto
'dm': { 'mm': 100, 'cm': 10, 'dm': 1, 'm': 0.1, 'in': 3.93701, 'ft': 0.328084, 'yd': 0.109361, 'mi': 0.0000621371, 'km': 0.0001 },//revisado todo correcto
'm': { 'mm': 1000, 'cm': 100, 'dm': 10, 'm': 1, 'in': 39.3701, 'ft': 3.28084, 'yd': 1.09361, 'mi': 0.000621371, 'km': 0.001 },//revisado todo correcto
'in': { 'mm': 25.4, 'cm': 2.54, 'dm': 0.254, 'm': 0.0254, 'in': 1, 'ft': 0.0833333, 'yd': 0.0277778, 'mi': 0.0000157828, 'km': 0.0000254 },//revisado todo correcto
'ft': { 'mm': 304.8, 'cm': 30.48, 'dm': 3.048, 'm': 0.3048, 'in': 12, 'ft': 1, 'yd': 0.333333, 'mi': 0.000189394, 'km': 0.0003048 },//revisado todo correcto
'yd': { 'mm': 914.4, 'cm': 91.44, 'dm': 9.144, 'm': 0.9144, 'in': 36, 'ft': 3, 'yd': 1, 'mi': 0.000568182, 'km': 0.0009144 },//revisado todo correcto
'mi': { 'mm': 1609344, 'cm': 160934.4, 'dm': 16093.44, 'm': 1609.344, 'in': 63360, 'ft': 5280, 'yd': 1760, 'mi': 1, 'km': 1.60934 },//revisado todo correcto
'km': { 'mm': 1000000, 'cm': 100000, 'dm': 10000, 'm': 1000, 'in': 39370.1, 'ft': 3280.84, 'yd': 1093.61, 'mi': 0.621371, 'km': 1 }//revisado todo correcto
};
return factoresConversion[unidadOrigen][unidadDestino];
}
}
