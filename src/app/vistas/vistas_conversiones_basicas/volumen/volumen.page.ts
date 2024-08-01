import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-volumen',
  templateUrl: './volumen.page.html',
  styleUrls: ['./volumen.page.scss'],
})
export class VolumenPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  volumen_espanol = "Volumen";
  volumen_ingles = "Volume";
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
  idiomaSeleccionado = "";
  //logica para las conversiones
  unidadSeleccionadaOrigen = 'ml';
  unidadSeleccionadaDestino = 'L';
  unidades = [
    { name: 'Mililitros', value: 'ml' },
    { name: 'Decilitros', value: 'dl' },
    { name: 'Litros', value: 'L' },
    { name: 'Milímetros cúbicos', value: 'mm3' },
    { name: 'Centímetros cúbicos', value: 'cm3' },
    { name: 'Decímetros cúbicos', value: 'dm3' },
    { name: 'Metros cúbicos', value: 'm3' },
    { name: 'Pulgadas cúbicas', value: 'in3' },
    { name: 'Pies cúbicos', value: 'ft3' },
    { name: 'Yardas cúbicas', value: 'yd3' },
    { name: 'Galones (US)', value: 'gal (US)' },
    { name: 'Galones (UK)', value: 'gal (UK)' },
    { name: 'Cuartos (US)', value: 'qt (US)' },
    { name: 'Pintas (US)', value: 'pt (US)' },
    { name: 'Onzas líquidas (US)', value: 'fl oz (US)' }
  ];
  cantidad: number | null = null; 
  resultado = 0;
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
      this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La unidad de origen y la unidad de destino deben ser diferentes.' : 'The source unit and the destination unit must be different.';
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
      'ml': { 'ml': 1, 'dl': 0.1, 'L': 0.001, 'mm3': 1000, 'cm3': 1, 'dm3': 0.001, 'm3': 0.000001, 'in3': 0.0610237, 'ft3': 0.0000353147, 'yd3': 0.00000130795, 'gal (US)': 0.000264172, 'gal (UK)': 0.000219969, 'qt (US)': 0.00105669, 'pt (US)': 0.00211338, 'fl oz (US)': 0.033814 },//revisado todo correcto
      'dl': { 'ml': 10, 'dl': 1, 'L': 0.01, 'mm3': 10000, 'cm3': 10, 'dm3': 0.01, 'm3': 0.00001, 'in3': 0.610237, 'ft3': 0.00353147, 'yd3': 0.000130795, 'gal (US)': 0.0264172, 'gal (UK)': 0.0219969, 'qt (US)': 0.105669, 'pt (US)': 0.211338, 'fl oz (US)': 3.3814 },//revisado todo correcto
      'L': { 'ml': 1000, 'dl': 100, 'L': 1, 'mm3': 1000000, 'cm3': 1000, 'dm3': 1, 'm3': 0.001, 'in3': 61.0237, 'ft3': 0.0353147, 'yd3': 0.00130795, 'gal (US)': 0.264172, 'gal (UK)': 0.219969, 'qt (US)': 1.05669, 'pt (US)': 2.11338, 'fl oz (US)': 33.814 },//revisado todo correcto
      'mm3': { 'ml': 0.001, 'dl': 0.0001, 'L': 0.000001, 'mm3': 1, 'cm3': 0.001, 'dm3': 0.000001, 'm3': 0.000000001, 'in3': 0.0000610237, 'ft3': 0.0000000353147, 'yd3': 0.00000000130795, 'gal (US)': 0.000000264172, 'gal (UK)': 0.000000219969, 'qt (US)': 0.00000105669, 'pt (US)': 0.00000211338, 'fl oz (US)': 0.000033814 },//revisado todo correcto
      'cm3': { 'ml': 1, 'dl': 0.1, 'L': 0.001, 'mm3': 1000, 'cm3': 1, 'dm3': 0.001, 'm3': 0.000001, 'in3': 0.0610237, 'ft3': 0.0000353147, 'yd3': 0.00000130795, 'gal (US)': 0.000264172, 'gal (UK)': 0.000219969, 'qt (US)': 0.00105669, 'pt (US)': 0.00211338, 'fl oz (US)': 0.033814 },//revisado todo correcto
      'dm3': { 'ml': 1000, 'dl': 100, 'L': 1, 'mm3': 1000000, 'cm3': 1000, 'dm3': 1, 'm3': 0.001, 'in3': 61.0237, 'ft3': 0.0353147, 'yd3': 0.00130795, 'gal (US)': 0.264172, 'gal (UK)': 0.219969, 'qt (US)': 1.05669, 'pt (US)': 2.11338, 'fl oz (US)': 33.814 },//revisado todo correcto
      'm3': { 'ml': 1000000, 'dl': 100000, 'L': 1000, 'mm3': 1000000000, 'cm3': 1000000, 'dm3': 1000, 'm3': 1, 'in3': 61023.7, 'ft3': 35.3147, 'yd3': 1.30795, 'gal (US)': 264.172, 'gal (UK)': 219.969, 'qt (US)': 1056.69, 'pt (US)': 2113.38, 'fl oz (US)': 33814 },//revisado todo correcto
      'in3': { 'ml': 16.3871, 'dl': 1.63871, 'L': 0.0163871, 'mm3': 16387.1, 'cm3': 16.3871, 'dm3': 0.0163871, 'm3': 0.0000163871, 'in3': 1, 'ft3': 0.000578704, 'yd3': 0.0000214335, 'gal (US)': 0.004329, 'gal (UK)': 0.00360465, 'qt (US)': 0.017316, 'pt (US)': 0.034632, 'fl oz (US)': 0.554113 },//revisado todo correcto
      'ft3': { 'ml': 28316.8, 'dl': 2831.68, 'L': 28.3168, 'mm3': 28316846.6, 'cm3': 28316.8, 'dm3': 28.3168, 'm3': 0.0283168, 'in3': 1728, 'ft3': 1, 'yd3': 0.037037, 'gal (US)': 7.48052, 'gal (UK)': 6.22884, 'qt (US)': 29.9221, 'pt (US)': 59.8442, 'fl oz (US)': 957.506 },//revisado todo correcto
      'yd3': { 'ml': 764554.9, 'dl': 76455.5, 'L': 764.5549, 'mm3': 764554858, 'cm3': 764554.9, 'dm3': 764.5549, 'm3': 0.7645549, 'in3': 46656, 'ft3': 27, 'yd3': 1, 'gal (US)': 201.974, 'gal (UK)': 168.178, 'qt (US)': 807.896, 'pt (US)': 1615.79, 'fl oz (US)': 25852.7 },//revisado todo correcto
      'gal (US)': { 'ml': 3785.41, 'dl': 378.541, 'L': 3.78541, 'mm3': 3785411.8, 'cm3': 3785.41, 'dm3': 3.78541, 'm3': 0.00378541, 'in3': 231, 'ft3': 0.133681, 'yd3': 0.00495113, 'gal (US)': 1, 'gal (UK)': 0.832674, 'qt (US)': 4, 'pt (US)': 8, 'fl oz (US)': 128 },//revisado todo correcto
      'gal (UK)': { 'ml': 4546.09, 'dl': 454.609, 'L': 4.54609, 'mm3': 4546090.8, 'cm3': 4546.09, 'dm3': 4.54609, 'm3': 0.00454609, 'in3': 277.419, 'ft3': 0.160544, 'yd3': 0.00594606, 'gal (US)': 1.20095, 'gal (UK)': 1, 'qt (US)': 4.80379, 'pt (US)': 9.60757, 'fl oz (US)': 153.722 },//revisado todo correcto
      'qt (US)': { 'ml': 946.353, 'dl': 94.6353, 'L': 0.946353, 'mm3': 946353.3, 'cm3': 946.353, 'dm3': 0.946353, 'm3': 0.000946353, 'in3': 57.75, 'ft3': 0.0334201, 'yd3': 0.00123783, 'gal (US)': 0.25, 'gal (UK)': 0.208171, 'qt (US)': 1, 'pt (US)': 2, 'fl oz (US)': 32 },//revisado todo correcto
      'pt (US)': { 'ml': 473.176, 'dl': 47.3176, 'L': 0.473176, 'mm3': 473176.6, 'cm3': 473.176, 'dm3': 0.473176, 'm3': 0.000473176, 'in3': 28.875, 'ft3': 0.0167101, 'yd3': 0.000618919, 'gal (US)': 0.125, 'gal (UK)': 0.104086, 'qt (US)': 0.5, 'pt (US)': 1, 'fl oz (US)': 16 },//revisado todo correcto
      'fl oz (US)': { 'ml': 29.5735, 'dl': 2.95735, 'L': 0.0295735, 'mm3': 29573.5, 'cm3': 29.5735, 'dm3': 0.0295735, 'm3': 0.0000295735, 'in3': 1.80469, 'ft3': 0.00104438, 'yd3': 0.0000386807, 'gal (US)': 0.0078125, 'gal (UK)': 0.00650527, 'qt (US)': 0.03125, 'pt (US)': 0.0625, 'fl oz (US)': 1 },//revisado todo correcto
    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
