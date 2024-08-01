import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-presion',
  templateUrl: './presion.page.html',
  styleUrls: ['./presion.page.scss'],
})
export class PresionPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  presion_espanol = "Presión";
  presion_ingles = "Pressure";
  convertir_de_espanol = "Convertir:";
  convertir_de_ingles = " Convert:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount :";
  a_espanol = "A  :";
  a_ingles = "To:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado

  //logica para la conversión
  unidadSeleccionadaOrigen = 'Pa';
  unidadSeleccionadaDestino = 'kPa';
  unidades = [
    { name: 'atm', value: 'atm' },
    { name: 'Pa', value: 'Pa' },
    { name: 'hPa (mbar)', value: 'hPa' },
    { name: 'kPa (kN/m2)', value: 'kPa' },
    { name: 'MPa', value: 'MPa' },
    { name: 'bar', value: 'bar' },
    { name: 'psi (lbf/in2)', value: 'psi' },
    { name: 'psf (lbf/ft2)', value: 'psf' },
    { name: 'kgf/cm2', value: 'kgf/cm2' },
    { name: 'kgf/m2', value: 'kgf/m2' },
    { name: 'mmHg (Torr)', value: 'mmHg' },
    { name: 'cmHg', value: 'cmHg' },
    { name: 'inchHg', value: 'inchHg' },
    { name: 'mmH2O', value: 'mmH2O' },
    { name: 'cmH2O', value: 'cmH2O' },
    { name: 'inchH2O', value: 'inchH2O' }
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
      'atm': { 'atm': 1, 'Pa': 101325, 'hPa': 1013.25, 'kPa': 101.325, 'MPa': 0.101325, 'bar': 1.01325, 'psi': 14.6959, 'psf': 2048.16, 'kgf/cm2': 1.03323, 'kgf/m2': 10332.3, 'mmHg': 760, 'cmHg': 76, 'inchHg': 29.9213, 'mmH2O': 10332.3, 'cmH2O': 1033.23, 'inchH2O': 406.793 },//revisado todo correcto
      'Pa': { 'atm': 0.00000986923, 'Pa': 1, 'hPa': 0.01, 'kPa': 0.001, 'MPa': 0.000001, 'bar': 0.00001, 'psi': 0.000145038, 'psf': 0.0208854, 'kgf/cm2': 0.0000101972, 'kgf/m2': 1, 'mmHg': 0.00750062, 'cmHg': 0.750062, 'inchHg': 0.2953, 'mmH2O': 0.101972, 'cmH2O': 10.1972, 'inchH2O': 0.401463 },//revisado todo correcto
      'hPa': { 'atm': 0.000986923, 'Pa': 100, 'hPa': 1, 'kPa': 0.1, 'MPa': 0.0001, 'bar': 0.001, 'psi': 0.0145038, 'psf': 2.08854, 'kgf/cm2': 0.00101972, 'kgf/m2': 100, 'mmHg': 0.750062, 'cmHg': 75.0062, 'inchHg': 29.53, 'mmH2O': 10.1972, 'cmH2O': 1019.72, 'inchH2O': 4.01463 },//revisado todo correcto
      'kPa': { 'atm': 0.00986923, 'Pa': 1000, 'hPa': 10, 'kPa': 1, 'MPa': 0.001, 'bar': 0.01, 'psi': 0.145038, 'psf': 20.8854, 'kgf/cm2': 0.0101972, 'kgf/m2': 1000, 'mmHg': 7.50062, 'cmHg': 750.062, 'inchHg': 295.3, 'mmH2O': 101.972, 'cmH2O': 10197.2, 'inchH2O': 40.1463 },//revisado todo correcto
      'MPa': { 'atm': 9.86923, 'Pa': 1000000, 'hPa': 10000, 'kPa': 1000, 'MPa': 1, 'bar': 10, 'psi': 145.038, 'psf': 2088.54, 'kgf/cm2': 10.1972, 'kgf/m2': 1000000, 'mmHg': 7500.62, 'cmHg': 750062, 'inchHg': 295300, 'mmH2O': 101972, 'cmH2O': 10197200, 'inchH2O': 4014.63 },//revisado todo correcto
      'bar': { 'atm': 0.986923, 'Pa': 100000, 'hPa': 1000, 'kPa': 100, 'MPa': 0.1, 'bar': 1, 'psi': 14.5038, 'psf': 2088.54, 'kgf/cm2': 1.01972, 'kgf/m2': 100000, 'mmHg': 750.062, 'cmHg': 75006.2, 'inchHg': 2953, 'mmH2O': 10197.2, 'cmH2O': 101972, 'inchH2O': 4014.63 },//revisado todo correcto
      'psi': { 'atm': 0.0680459, 'Pa': 6894.76, 'hPa': 68.9476, 'kPa': 6.89476, 'MPa': 0.00689476, 'bar': 0.0689476, 'psi': 1, 'psf': 144, 'kgf/cm2': 0.070307, 'kgf/m2': 6894.76, 'mmHg': 51.7149, 'cmHg': 5171.49, 'inchHg': 2036.76, 'mmH2O': 703.068, 'cmH2O': 70306.8, 'inchH2O': 27679.9 },//revisado todo correcto
      'psf': { 'atm': 0.000490066, 'Pa': 47.8803, 'hPa': 0.478803, 'kPa': 0.0478803, 'MPa': 0.0000478803, 'bar': 0.000478803, 'psi': 0.00694444, 'psf': 1, 'kgf/cm2': 0.000511822, 'kgf/m2': 47.8803, 'mmHg': 0.359131, 'cmHg': 35.9131, 'inchHg': 14.072, 'mmH2O': 48.8307, 'cmH2O': 4883.07, 'inchH2O': 1920 },//revisado todo correcto
      'kgf/cm2': { 'atm': 0.967841, 'Pa': 98066.5, 'hPa': 980.665, 'kPa': 98.0665, 'MPa': 0.0980665, 'bar': 0.980665, 'psi': 14.2233, 'psf': 2048.16, 'kgf/cm2': 1, 'kgf/m2': 98066.5, 'mmHg': 735.559, 'cmHg': 73555.9, 'inchHg': 2895.11, 'mmH2O': 10000, 'cmH2O': 1000000, 'inchH2O': 39370.1 },//revisado todo correcto
      'kgf/m2': { 'atm': 0.00000986923, 'Pa': 1, 'hPa': 0.01, 'kPa': 0.001, 'MPa': 0.000001, 'bar': 0.00001, 'psi': 0.000145038, 'psf': 0.0208854, 'kgf/cm2': 0.0000101972, 'kgf/m2': 1, 'mmHg': 0.00750062, 'cmHg': 0.750062, 'inchHg': 0.2953, 'mmH2O': 0.101972, 'cmH2O': 10.1972, 'inchH2O': 0.401463 },//revisado todo correcto
      'mmHg': { 'atm': 0.00131579, 'Pa': 133.322, 'hPa': 1.33322, 'kPa': 0.133322, 'MPa': 0.000133322, 'bar': 0.00133322, 'psi': 0.0193368, 'psf': 2.78449, 'kgf/cm2': 0.00135951, 'kgf/m2': 133.322, 'mmHg': 1, 'cmHg': 100, 'inchHg': 39.3701, 'mmH2O': 13.5951, 'cmH2O': 1359.51, 'inchH2O': 53.3789 },//revisado todo correcto
      'cmHg': { 'atm': 0.0131579, 'Pa': 1333.22, 'hPa': 13.3322, 'kPa': 1.33322, 'MPa': 0.00133322, 'bar': 0.0133322, 'psi': 0.193368, 'psf': 27.8449, 'kgf/cm2': 0.0135951, 'kgf/m2': 1333.22, 'mmHg': 10, 'cmHg': 1, 'inchHg': 393.701, 'mmH2O': 135.951, 'cmH2O': 13595.1, 'inchH2O': 533.789 },//revisado todo correcto
      'inchHg': { 'atm': 0.0334211, 'Pa': 3386.39, 'hPa': 33.8639, 'kPa': 3.38639, 'MPa': 0.00338639, 'bar': 0.0338639, 'psi': 0.491154, 'psf': 70.726, 'kgf/cm2': 0.0345316, 'kgf/m2': 3386.39, 'mmHg': 25.4, 'cmHg': 2.54, 'inchHg': 1, 'mmH2O': 345.316, 'cmH2O': 34531.6, 'inchH2O': 13595.1 },//revisado todo correcto
      'mmH2O': { 'atm': 0.00980665, 'Pa': 980.665, 'hPa': 9.80665, 'kPa': 0.980665, 'MPa': 0.000980665, 'bar': 0.00980665, 'psi': 0.142238, 'psf': 20.3862, 'kgf/cm2': 0.0101972, 'kgf/m2': 980.665, 'mmHg': 7.50062, 'cmHg': 750.062, 'inchHg': 295.3, 'mmH2O': 1, 'cmH2O': 100, 'inchH2O': 39.3701 },//revisado todo correcto
      'cmH2O': { 'atm': 0.0000980665, 'Pa': 9.80665, 'hPa': 0.0980665, 'kPa': 0.00980665, 'MPa': 0.00000980665, 'bar': 0.0000980665, 'psi': 0.00142234, 'psf': 0.204816, 'kgf/cm2': 0.000101972, 'kgf/m2': 9.80665, 'mmHg': 0.750062, 'cmHg': 75.0062, 'inchHg': 29.53, 'mmH2O': 0.01, 'cmH2O': 1, 'inchH2O': 0.393701 },//revisado todo correcto
      'inchH2O': { 'atm': 0.002491, 'Pa': 248.84, 'hPa': 2.4884, 'kPa': 0.24884, 'MPa': 0.00024884, 'bar': 0.0024884, 'psi': 0.0361273, 'psf': 5.20249, 'kgf/cm2': 0.0026457, 'kgf/m2': 248.84, 'mmHg': 1.86832, 'cmHg': 186.832, 'inchHg': 73.5559, 'mmH2O': 2.5401, 'cmH2O': 254.01, 'inchH2O': 1 }//revisado todo correcto
    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
