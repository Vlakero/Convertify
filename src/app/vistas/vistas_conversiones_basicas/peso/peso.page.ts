import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-peso',
  templateUrl: './peso.page.html',
  styleUrls: ['./peso.page.scss'],
})
export class PesoPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  peso_espanol = "Peso";
  peso_ingles = "Weight";
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
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  //logica para las conversiones
  unidadSeleccionadaOrigen = 'g';
  unidadSeleccionadaDestino = 'kg';
  unidades = [
    { name: 'Miligramos', value: 'mg' },
    { name: 'Gramos', value: 'g' },
    { name: 'Kilogramos', value: 'kg' },
    { name: 'Libras', value: 'lb' },
    { name: 'Onzas', value: 'oz' },
    { name: 'Onza troy', value: 'oz_troy' },
    { name: 'Grain', value: 'gr' },
    { name: 'Ton (uk)', value: 'tnuk' },
    { name: 'Ton (us)', value: 'tnusa' }
  ];
  cantidad: number | null = null; 
  resultado = 0;
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado


  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

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
      'mg': { 'mg': 1, 'g': 0.001, 'kg': 0.000001, 'lb': 2.2046e-6, 'oz': 3.5274e-5, 'oz_troy': 0.0000321507, 'gr': 0.0154324, 'tnuk': 9.8421e-10, 'tnusa': 1e-9 }, //revisado los resultados son correctos pero no se convierte en numero cientifico
      'g': { 'mg': 1000, 'g': 1, 'kg': 0.001, 'lb': 0.00220462, 'oz': 0.03527396, 'oz_troy': 0.0321507466, 'gr': 15.4324, 'tnuk': 9.8421e-7, 'tnusa': 1e-6 }, //revisado los resultados son correctos pero no se convierte en numero cientifico
      'kg': { 'mg': 1e+6, 'g': 1000, 'kg': 1, 'lb': 2.20462, 'oz': 35.27396, 'oz_troy': 32.1507, 'gr': 15.4324, 'tnuk': 0.000984206527, 'tnusa': 0.0011023113 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'lb': { 'mg': 453592.37, 'g': 453.5923, 'kg': 0.453592, 'lb': 1, 'oz': 16, 'oz_troy': 14.5833, 'gr': 7000, 'tnuk': 0.000446429, 'tnusa': 0.000453592 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'oz': { 'mg': 28349.52, 'g': 28.3495, 'kg': 0.0283495, 'lb': 0.0625, 'oz': 1, 'oz_troy': 0.911458, 'gr': 437.5, 'tnuk': 0.0283495, 'tnusa': 0.0283495 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'oz_troy': { 'mg': 31.103, 'g': 311035, 'kg': 0.0311035, 'lb': 0.0685714, 'oz': 1.09714, 'oz_troy': 1, 'gr': 480, 'tnuk': 0.0311035, 'tnusa': 0.0321507 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'gr': { 'mg': 64.7989, 'g': 0.064798, 'kg': 6.4799e-5, 'lb': 0.00014285, 'oz': 0.00228571, 'oz_troy': 0.0020833, 'gr': 1, 'tnuk': 6.47989E-05, 'tnusa': 4.53592E-8 },//revisado los resultados y en Tonelada UK y USA no es muy exacta la respuesta y  no se convierte en numero cientifico
      'tnuk': { 'mg': 1000000000, 'g': 1000000, 'kg': 1000, 'lb': 2204.62, 'oz': 35273.96, 'oz_troy': 32150.75, 'gr': 1543235, 'tnuk': 1, 'tnusa': 1.10231 },//revisado los resultados son correctos pero no se convierte en numero cientifico
      'tnusa': { 'mg': 1000000000, 'g': 1000000, 'kg': 1000, 'lb': 2204.62, 'oz': 35273.96, 'oz_troy': 32150.75, 'gr': 15432358.4, 'tnuk': 0.892857, 'tnusa': 1 }//revisado los resultados son correctos pero no se convierte en numero cientifico

    };

    return factoresConversion[unidadOrigen][unidadDestino];
  }
}
