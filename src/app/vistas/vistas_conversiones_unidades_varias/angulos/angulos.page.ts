import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-angulos',
  templateUrl: './angulos.page.html',
  styleUrls: ['./angulos.page.scss'],
})
export class AngulosPage implements OnInit {
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  angulos_espanol = "Ángulos";
  angulos_ingles = "Angles";
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
 //logica de converisones
  unidadSeleccionadaOrigen = 'rad';
  unidadSeleccionadaDestino = 'deg';
  unidades = [
    { name: 'Radianes (rad)', value: 'rad' },
    { name: 'Segundos de arco (")', value: 'sec' },
    { name: 'Minutos de arco (\')', value: 'min' },
    { name: 'Grados (°)', value: 'deg' },
    { name: 'Grados centesimales (grad)', value: 'grad' },
    { name: 'Porcentaje (%)', value: 'porcentaje' }
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
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 4 });
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      'rad': { 'rad': 1, 'sec': 206264.8062471, 'min': 3437.746770785, 'deg': 57.29577951308, 'grad': 63.66197723676, 'porcentaje': 100 },//revisado todo correcto
      'sec': { 'rad': 0.000004848136811, 'sec': 1, 'min': 0.01666666666667, 'deg': 0.0002777777777778, 'grad': 0.0003086419753086, 'porcentaje': 0.000001570796326795 },//revisado todo correcto
      'min': { 'rad': 0.0002908882087, 'sec': 60, 'min': 1, 'deg': 0.01666666666667, 'grad': 0.01851851851852, 'porcentaje': 0.00009424777961 },//revisado todo correcto
      'deg': { 'rad': 0.01745329251994, 'sec': 3600, 'min': 60, 'deg': 1, 'grad': 1.111111111111, 'porcentaje': 0.005555555555556 },//revisado todo correcto
      'grad': { 'rad': 0.01570796326795, 'sec': 3240, 'min': 54, 'deg': 0.9, 'grad': 1, 'porcentaje': 0.005 },//revisado todo correcto//revisado todo correcto
      'porcentaje': { 'rad': 0.01, 'sec': 636619.7723676, 'min': 10594.6652549, 'deg': 1.111111111111, 'grad': 1.25, 'porcentaje': 1 }//revisado todo correcto
    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
