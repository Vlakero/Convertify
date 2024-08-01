import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.page.html',
  styleUrls: ['./temperatura.page.scss'],
})
export class TemperaturaPage implements OnInit {
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
  temperatura_espanol = "Temperatura";
temperatura_ingles = "Temperature";
  public folder!: string;
  idiomaSeleccionado = "";
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado
  //logica para las conversiones
  unidadSeleccionadaOrigen = 'C';
  unidadSeleccionadaDestino = 'F';
  unidades = [
    { name: 'Celsius', value: 'C' },
    { name: 'Fahrenheit', value: 'F' },
    { name: 'Kelvin', value: 'K' }
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
    const resultado = this.convertirTemperatura(this.cantidad, this.unidadSeleccionadaOrigen, this.unidadSeleccionadaDestino);
    this.resultado = resultado;
    this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 6 });
  }
     //revisado todo correcto
  convertirTemperatura(valor: number, unidadOrigen: string, unidadDestino: string): number {
    if (unidadOrigen === 'C') {
      if (unidadDestino === 'F') {
        return (valor * 9/5) + 32; // Celsius a Fahrenheit
      } else if (unidadDestino === 'K') {
        return valor + 273.15; // Celsius a Kelvin
      }
    } else if (unidadOrigen === 'F') {
      if (unidadDestino === 'C') {
        return (valor - 32) * 5/9; // Fahrenheit a Celsius
      } else if (unidadDestino === 'K') {
        return (valor + 459.67) * 5/9; // Fahrenheit a Kelvin
      }
    } else if (unidadOrigen === 'K') {
      if (unidadDestino === 'C') {
        return valor - 273.15; // Kelvin a Celsius
      } else if (unidadDestino === 'F') {
        return (valor * 9/5) - 459.67; // Kelvin a Fahrenheit
      }
    }

    return valor; // Si las unidades son las mismas, no se realiza ninguna conversión
  }
}
