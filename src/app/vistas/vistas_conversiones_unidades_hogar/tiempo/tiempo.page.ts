import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
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
  tiempo_espanol = "Tiempo";
  tiempo_ingles = "Time";
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado

  //logica para las conversiones
  unidadSeleccionadaOrigen = 's';
  unidadSeleccionadaDestino = 'min';
  unidades = [
    { name: 'Milisegundos', value: 'ms' },
    { name: 'Segundos', value: 's' },
    { name: 'Minutos', value: 'min' },
    { name: 'Horas', value: 'h' },
    { name: 'Días', value: 'd' },
    { name: 'Meses', value: 'mo' },
    { name: 'Años', value: 'y' },
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
    const factor = this.obtenerFactorConversion(
      this.unidadSeleccionadaOrigen,
      this.unidadSeleccionadaDestino
    );
    this.resultado = this.cantidad * factor;
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 4 });
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      ms: { ms: 1, s: 0.001, min: 0.000016667, h: 0.00000027778, d: 0.000000011574, wk: 0.0000000016534, mo: 0.00000000038026, y: 0.000000000031688 },//revisado todo correcto
      s: { ms: 1000, s: 1, min: 0.016667, h: 0.00027778, d: 0.000011574, wk: 0.0000016534, mo: 0.00000038026, y: 0.000000031688 },//revisado todo correcto
      min: { ms: 60000, s: 60, min: 1, h: 0.016667, d: 0.00069444, wk: 0.000099206, mo: 0.000022831, y: 0.0000019026 },//revisado todo correcto
      h: { ms: 3600000, s: 3600, min: 60, h: 1, d: 0.041667, wk: 0.0059524, mo: 0.0013699, y: 0.00011416 },//revisado todo correcto
      d: { ms: 86400000, s: 86400, min: 1440, h: 24, d: 1, wk: 0.14286, mo: 0.032854, y: 0.0027379 },//revisado todo correcto
      wk: { ms: 604800000, s: 604800, min: 10080, h: 168, d: 7, wk: 1, mo: 0.23014, y: 0.019178 },//revisado todo correcto
      mo: { ms: 2629800000, s: 2629800, min: 43830, h: 730.5, d: 30.4375, wk: 4.3482, mo: 1, y: 0.083333 },//revisado todo correcto
      y: { ms: 31536000000, s: 31536000, min: 525600, h: 8760, d: 365, wk: 52.1429, mo: 12, y: 1 },//revisado todo correcto
    };
    return factoresConversion[unidadOrigen][unidadDestino];
}
}
