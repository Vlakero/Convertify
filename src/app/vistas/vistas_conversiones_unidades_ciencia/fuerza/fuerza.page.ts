import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fuerza',
  templateUrl: './fuerza.page.html',
  styleUrls: ['./fuerza.page.scss'],
})
export class FuerzaPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  fuerza_espanol = "Fuerza";
  fuerza_ingles = "Force";
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
  unidadSeleccionadaOrigen = 'dyn';
  unidadSeleccionadaDestino = 'N';
  unidades = [
    { name: 'Dinas', value: 'dyn' },
    { name: 'Newton', value: 'N' },
    { name: 'Decanewton', value: 'daN' },
    { name: 'Kilonewton', value: 'kN' },
    { name: 'Kilogramo Fuerza', value: 'kgf' },
    { name: 'Libra Fuerza', value: 'lbf' },
    { name: 'Kip', value: 'kip' },
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
      dyn: { dyn: 1, N: 0.00001, daN: 0.000001, kN: 0.00000001, kgf: 0.0000010197, lbf: 0.0000022481, kip: 0.0000000022481 },//revisado todo correcto
      N: { dyn: 100000, N: 1, daN: 0.1, kN: 0.001, kgf: 0.10197, lbf: 0.22481, kip: 0.00022481 },//revisado todo correcto
      daN: { dyn: 1000000, N: 10, daN: 1, kN: 0.01, kgf: 1.0197, lbf: 2.2481, kip: 0.0022481 },//revisado todo correcto
      kN: { dyn: 100000000, N: 1000, daN: 100, kN: 1, kgf: 101.97, lbf: 224.81, kip: 0.22481 },//revisado todo correcto
      kgf: { dyn: 980665, N: 9.80665, daN: 0.980665, kN: 0.00980665, kgf: 1, lbf: 2.2046, kip: 0.0022046 },//revisado todo correcto
      lbf: { dyn: 444822.16, N: 4.44822, daN: 0.444822, kN: 0.00444822, kgf: 0.453592, lbf: 1, kip: 0.001 },//revisado todo correcto
      kip: { dyn: 444822160, N: 4448.22, daN: 444.822, kN: 4.44822, kgf: 453.592, lbf: 1000, kip: 1 },//revisado todo correcto
    };
    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
