import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

//import { error } from 'jquery';

@Component({
  selector: 'app-conversiones-divisas',
  templateUrl: './conversiones-divisas.page.html',
  styleUrls: ['./conversiones-divisas.page.scss'],
})
export class ConversionesDivisasPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  monedaOrigen: string = 'USD'; // Valor inicial para Dólares Americanos
  monedaDestino: string = 'MXN'; // Valor inicial para Pesos Mexicanos
  cantidad: number | null = null; 
  resultado: number = 0; // Valor inicial
  cotizaciones: any = {}; // Asignar valor inicial
  isMenuOpen: boolean = false;
  convertir_de_espanol = "Convertir:";
  convertir_de_ingles = "Convert:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount to convert:";
  a_espanol = "a:   $";
  a_ingles = "a:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  divisas_espanol = "Divisas";
  divisas_ingles = "Currencies";
  dolares_americanos_español = "Dólares americanos";
  dolares_americanos_ingles = "American dollars";
  not_conection_espanol = "No hay conexión a internet. Usando últimos datos conocidos.";
  not_conection_ingles = "there is no Internet conection. Using latest known data.";
  public folder!: string;
  idiomaSeleccionado = "";


  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado


  constructor(private navCtrl: NavController, private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {

  }

  ngOnInit() {
    this.obtenerCotizaciones();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 10000,
      position: 'middle',
    });
    toast.present();
  }


  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }

  obtenerCotizaciones() {
    const apiKey = 'c64d997e74f7dd3476e09f4b';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    this.http.get(url).subscribe((data: any) => {
      // Transformar la estructura de la respuesta al formato deseado
      const transformedCotizaciones = this.transformarCotizaciones(data.conversion_rates);
      this.cotizaciones = transformedCotizaciones;
      localStorage.setItem('cotizaciones', JSON.stringify(transformedCotizaciones));
    }, async (error) => {
      const mensaje = this.idiomaSeleccionado === 'es' ? 'No hay conexión a internet. Usando últimos datos conocidos.' : 'No internet connection. Using last known data.';
      await this.mostrarToast(mensaje);
      //window.location.reload();

      // Intentar recuperar las cotizaciones del almacenamiento local
      const cotizacionesGuardadas = localStorage.getItem('cotizaciones');
      if (cotizacionesGuardadas) {
        this.cotizaciones = JSON.parse(cotizacionesGuardadas);
      } else {
        // Si no hay datos guardados, leer los datos del archivo JSON local
        this.http.get('assets/data/cotizaciones.json').subscribe((data: any) => {
          this.cotizaciones = data;
        });
      }
    });
  }

  // Método auxiliar para transformar las cotizaciones al formato deseado
  transformarCotizaciones(rates: any): any {
    let cotizaciones: any = {
      "USD": {},
      "EUR": {},
      "MXN": {},
      "CAD": {}
      // Añadir más monedas según sea necesario
    };

    // Aquí iría la lógica para transformar las cotizaciones
    // Esto es un ejemplo, necesitarías implementar la lógica basada en cómo deseas transformarlas
    for (let moneda in cotizaciones) {
      if (rates[moneda]) {
        cotizaciones[moneda] = rates; // Esto es solo un ejemplo simplificado
      }
    }

    return cotizaciones;
  }

  convertir() {
    // Limpiar mensaje de error anterior
    this.mensajeError = '';

    if (this.monedaOrigen && this.monedaDestino) {
      if (this.cantidad === null || this.cantidad <= 0) {
        // Establecer mensaje de error si la cantidad es 0 o negativa
        this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La cantidad debe ser mayor a 0' : 'Amount must be greater than 0';
      } else {
        // Asumiendo que `cotizaciones` ya está en el formato correcto
        const factorOrigen = this.cotizaciones[this.monedaOrigen][this.monedaDestino];
        if (factorOrigen) {
          this.resultado = this.cantidad * factorOrigen;

          this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        } else {
          this.mensajeError = this.idiomaSeleccionado === 'es' ? 'Error en la conversión.' : 'Conversion error.';
        }
      }
    }
  }





}
