import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-velocidad',
  templateUrl: './velocidad.page.html',
  styleUrls: ['./velocidad.page.scss'],
})
export class VelocidadPage implements OnInit {
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
  velocidad_espanol = "Velocidad";
velocidad_ingles = "Speed";
idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
public folder!: string;
resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado

  //logica para las conversiones
  unidadSeleccionadaOrigen = 'milla_hr';
  unidadSeleccionadaDestino = 'km_hr';
  unidades = [
    { name: 'Milla por hora', value: 'milla_hr' },
    { name: 'Milla por minuto', value: 'milla_min' },
    { name: 'Pies por segundo', value: 'ft_seg' },
    { name: 'Metros por segundo', value: 'mtr_seg' },
    { name: 'Kilometros por hora', value: 'km_hr' },
    { name: 'Nudo', value: 'nudo' }
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
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      milla_hr: { milla_hr: 1, milla_min: 0.0166667, ft_seg: 1.46667, mtr_seg: 0.44704, km_hr: 1.60934, nudo: 0.868976 },// todo correcto
      milla_min: { milla_hr: 60, milla_min: 1, ft_seg: 88, mtr_seg: 26.8224, km_hr: 96.5606, nudo: 51.9386 },// todo correcto
      ft_seg: { milla_hr: 0.681818, milla_min: 0.0113636, ft_seg: 1, mtr_seg: 0.3048, km_hr: 1.09728, nudo: 0.592484 },// todo correcto
      mtr_seg: { milla_hr: 2.23694, milla_min: 0.0372823, ft_seg: 3.28084, mtr_seg: 1, km_hr: 3.6, nudo: 1.94384 },// todo correcto
      km_hr: { milla_hr: 0.621371, milla_min: 0.0103555, ft_seg: 0.911344, mtr_seg: 0.277778, km_hr: 1, nudo: 0.539957 },// todo correcto
      nudo: { milla_hr: 1.15078, milla_min: 0.0191797, ft_seg: 1.68781, mtr_seg: 0.514444, km_hr: 1.852, nudo: 1 },// todo correcto
    };
    return factoresConversion[unidadOrigen][unidadDestino];
}
}
