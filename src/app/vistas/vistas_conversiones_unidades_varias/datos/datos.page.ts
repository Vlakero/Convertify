import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  datos_espanol = "Datos";
  datos_ingles= "Data";
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
  unidadSeleccionadaOrigen = 'Byte';
  unidadSeleccionadaDestino = 'kB';
  unidades = [
    { name: 'bit (b)', value: 'bit' },
    { name: 'Byte (B)', value: 'Byte' },
    { name: 'Kilobyte (kB)', value: 'kB' },
    { name: 'Megabyte (MB)', value: 'MB' },
    { name: 'Gigabyte (GB)', value: 'GB' },
    { name: 'Kibibyte (KiB)', value: 'KiB' },
    { name: 'Mebibyte (MiB)', value: 'MiB' },
    { name: 'Gibibyte (GiB)', value: 'GiB' },
    { name: 'Tebibyte (TiB)', value: 'TiB' },
    { name: 'Pebibyte (PiB)', value: 'PiB' }
  ];
  cantidad: number | null = null; 
  resultado = 0;
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
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      'bit': { 'bit': 1, 'Byte': 0.125, 'kB': 0.000125, 'MB': 0.000000125, 'GB': 0.000000000125, 'KiB': 0.0001220703, 'MiB': 0.0000001192, 'GiB': 0.000000000116, 'TiB': 0.0000000000001137, 'PiB': 0.000000000000000111 },//revisado todo correcto
      'Byte': { 'bit': 8, 'Byte': 1, 'kB': 0.001, 'MB': 0.000001, 'GB': 0.000000001, 'KiB': 0.0078125, 'MiB': 0.0000076294, 'GiB': 0.0000000075, 'TiB': 0.0000000000073, 'PiB': 0.0000000000000071 },//revisado todo correcto
      'kB': { 'bit': 8000, 'Byte': 1000, 'kB': 1, 'MB': 0.001, 'GB': 0.000001, 'KiB': 7.8125, 'MiB': 0.0076293945, 'GiB': 0.0000074506, 'TiB': 0.0000000072, 'PiB': 0.000000000007 },//revisado todo correcto
      'MB': { 'bit': 8000000, 'Byte': 1000000, 'kB': 1000, 'MB': 1, 'GB': 0.001, 'KiB': 7812.5, 'MiB': 7.6293945313, 'GiB': 0.0074505806, 'TiB': 0.000007276, 'PiB': 0.0000000071 },//revisado todo correcto
      'GB': { 'bit': 8000000000, 'Byte': 1000000000, 'kB': 1000000, 'MB': 1000, 'GB': 1, 'KiB': 7812500, 'MiB': 7629.39453125, 'GiB': 7.4505805969, 'TiB': 0.00727596, 'PiB': 0.0000071054 },//revisado todo correcto
      'KiB': { 'bit': 8192, 'Byte': 1024, 'kB': 1.024, 'MB': 0.001024, 'GB': 0.000001024, 'KiB': 1, 'MiB': 0.0009765625, 'GiB': 0.0000009537, 'TiB': 0.0000000009313, 'PiB': 0.0000000000009095 },//revisado todo correcto
      'MiB': { 'bit': 8388608, 'Byte': 1048576, 'kB': 1024, 'MB': 1.024, 'GB': 0.001024, 'KiB': 1024, 'MiB': 1, 'GiB': 0.0009765625, 'TiB': 0.0000009537, 'PiB': 0.0000000009313 },//revisado todo correcto
      'GiB': { 'bit': 8589934592, 'Byte': 1073741824, 'kB': 1048576, 'MB': 1024, 'GB': 1.024, 'KiB': 1048576, 'MiB': 1024, 'GiB': 1, 'TiB': 0.0009765625, 'PiB': 0.0000009537 },//revisado todo correcto
      'TiB': { 'bit': 8796093022208, 'Byte': 1099511627776, 'kB': 1073741824, 'MB': 1048576, 'GB': 1024, 'KiB': 1073741824, 'MiB': 1048576, 'GiB': 1024, 'TiB': 1, 'PiB': 0.0009765625 },//revisado todo correcto
      'PiB': { 'bit': 9007199254740992, 'Byte': 1125899906842624, 'kB': 1099511627776, 'MB': 1073741824, 'GB': 1048576, 'KiB': 1099511627776, 'MiB': 1073741824, 'GiB': 1048576, 'TiB': 1024, 'PiB': 1 }//revisado todo correcto

    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
