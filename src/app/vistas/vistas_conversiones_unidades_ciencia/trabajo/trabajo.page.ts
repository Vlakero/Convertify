import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  energia_espanol = "Energía";
  energia_ingles = "Energy";
  convertir_de_espanol = "Convertir:";
  convertir_de_ingles = " Convert:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount :";
  a_espanol = "A:";
  a_ingles = "To:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado
  //logica de las conversiones
  unidadSeleccionadaOrigen = 'J';
  unidadSeleccionadaDestino = 'kJ';
  unidades = [
    { name: 'Julio (J)', value: 'J' },
    { name: 'Kilojulio (kJ)', value: 'kJ' },
    { name: 'Caloría (cal)', value: 'cal' },
    { name: 'Kilocaloría (kcal)', value: 'kcal' },
    { name: 'Kilovatio-hora (kW-h)', value: 'kW-h' },
    { name: 'Kilogramo-fuerza metro (kgf-m)', value: 'kgf-m' },
    { name: 'Pulgada-libra fuerza (in-lbf)', value: 'in-lbf' },
    { name: 'Pie-libra fuerza (ft-lbf)', value: 'ft-lbf' },
    { name: 'Unidad térmica británica (BTU)', value: 'BTU' }
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
      'J': { 'J': 1, 'kJ': 0.001, 'cal': 0.239005736, 'kcal': 0.000239006, 'kW-h': 0.0000002778, 'kgf-m': 0.101971621, 'in-lbf': 8.850745793, 'ft-lbf': 0.737562149, 'BTU': 0.0009478171 },//revisado todo correcto
      'kJ': { 'J': 1000, 'kJ': 1, 'cal': 239.0057361, 'kcal': 0.2390057361, 'kW-h': 0.0002777778, 'kgf-m': 101.971621, 'in-lbf': 8850.745793, 'ft-lbf': 737.5621493, 'BTU': 0.9478171203 },//revisado todo correcto
      'cal': { 'J': 4.184, 'kJ': 0.004184, 'cal': 1, 'kcal': 0.001, 'kW-h': 0.0000011622, 'kgf-m': 0.4237760007, 'in-lbf': 37.306766001, 'ft-lbf': 3.1080638336, 'BTU': 0.0039656669 },//revisado todo correcto
      'kcal': { 'J': 4184, 'kJ': 4.184, 'cal': 1000, 'kcal': 1, 'kW-h': 0.0011622222, 'kgf-m': 423.7760007, 'in-lbf': 37208.983707, 'ft-lbf': 3086.0666466, 'BTU': 3.9656669264 },//revisado todo correcto
      'kW-h': { 'J': 3600000, 'kJ': 3600, 'cal': 860421, 'kcal': 860.421, 'kW-h': 1, 'kgf-m': 367097.83635, 'in-lbf': 32404722.139, 'ft-lbf': 2691907.7559, 'BTU': 3412.1416331 },//revisado todo correcto
      'kgf-m': { 'J': 9.80665, 'kJ': 0.00980665, 'cal': 2.3244426375, 'kcal': 0.0023244426, 'kW-h': 0.0000026845, 'kgf-m': 1, 'in-lbf': 88.249890764, 'ft-lbf': 7.3541575638, 'BTU': 0.009422621 },//revisado todo correcto
      'in-lbf': { 'J': 0.113, 'kJ': 0.000113, 'cal': 0.026885, 'kcal': 0.000026885, 'kW-h': 0.0000000311, 'kgf-m': 0.0115, 'in-lbf': 1, 'ft-lbf': 0.083333, 'BTU': 0.000106 },//revisado todo correcto
      'ft-lbf': { 'J': 1.35582, 'kJ': 0.00135582, 'cal': 0.323832, 'kcal': 0.000323832, 'kW-h': 0.0000003766, 'kgf-m': 0.138255, 'in-lbf': 12, 'ft-lbf': 1, 'BTU': 0.0012850675 },//revisado todo correcto
      'BTU': { 'J': 1055.05585, 'kJ': 1.05505585, 'cal': 251.99576111, 'kcal': 0.2519957611, 'kW-h': 0.0002930711, 'kgf-m': 107.58577025, 'in-lbf': 9448.9316389, 'ft-lbf': 787.8981599, 'BTU': 1 }//revisado todo correcto
    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
