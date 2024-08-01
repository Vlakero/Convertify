import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medida-y-peso-cable',
  templateUrl: './medida-y-peso-cable.page.html',
  styleUrls: ['./medida-y-peso-cable.page.scss'],
})
export class MedidaYPesoCablePage implements OnInit {
  conversion_cable_espanol = "Conversión de cable";
  conversion_cable_ingles = "Cable conversion";
  calibre_del_cable_espanol = "Calibre del cable:";
  calibre_del_cable_ingles = "Cable gauge:";
  calibre_cable_espanol = "Calibre del cable:";
  calibre_cable_ingles = "Cable gauge";
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
  boton_calcular_espanol = "Calcular";
  boton_calcular_ingles = "Calculate";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  
  calibres = [
    { name: 'Calibre 14', value: 19, conversion: 52.97 },
    { name: 'Calibre 12', value: 18, conversion: 33.34 },
    { name: 'Calibre 10', value: 17, conversion: 20.96 },
    { name: 'Calibre 8', value: 16, conversion: 13.18 },
    { name: 'Calibre 6', value: 15, conversion: 8.29 },
    { name: 'Calibre 4', value: 14, conversion: 5.21 },
    { name: 'Calibre 2', value: 13, conversion: 3.28 },
    { name: 'Calibre 1', value: 12, conversion: 2.65 },
    { name: 'Calibre 1/0', value: 11, conversion: 2.06 },
    { name: 'Calibre 2/0', value: 10, conversion: 1.64 },
    { name: 'Calibre 3/0', value: 9, conversion: 1.30 },
    { name: 'Calibre 4/0', value: 8, conversion: 1.03 },
    { name: 'Calibre 250', value: 7, conversion: 0.87 },
    { name: 'Calibre 300', value: 6, conversion: 0.73 },
    { name: 'Calibre 350', value: 5, conversion: 0.62 },
    { name: 'Calibre 400', value: 4, conversion: 0.54 },
    { name: 'Calibre 500', value: 3, conversion: 0.44 },
    { name: 'Calibre 600', value: 2, conversion: 0.36 },
    { name: 'Calibre 750', value: 1, conversion: 0.33 },
    { name: 'Calibre 1000', value: 0, conversion: 0.31 },
  ];

  unidadSeleccionadaCalibre = 17;
  unidadSeleccionadaOrigen = 'kg';
  unidadSeleccionadaDestino = 'm';

  unidades = [
    { name: 'Kilogramos', value: 'kg' },
    { name: 'Metros', value: 'm' }
  ];
  
  cantidad = 0;
  resultado: number | null = null;

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }

  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }

  convertir() {
    if (this.unidadSeleccionadaOrigen === this.unidadSeleccionadaDestino) {
      this.resultado = 0;
      return;
    }
    if (this.unidadSeleccionadaOrigen === 'kg' && this.unidadSeleccionadaDestino === 'm') {
      const calibre = this.calibres.find(item => item.value === this.unidadSeleccionadaCalibre);
      if (calibre) {
        this.resultado = parseFloat((this.cantidad * calibre.conversion).toFixed(2));
      } else {
        this.resultado = 0;
      }
    } else if (this.unidadSeleccionadaOrigen === 'm' && this.unidadSeleccionadaDestino === 'kg') {
      const calibre = this.calibres.find(item => item.value === this.unidadSeleccionadaCalibre);
      if (calibre) {
        this.resultado = parseFloat((this.cantidad / calibre.conversion).toFixed(2));
      } else {
        this.resultado = 0;
      }
    }
  }
  

  validarUnidades() {
    if (this.unidadSeleccionadaOrigen === this.unidadSeleccionadaDestino) {
      this.unidadSeleccionadaDestino = this.unidades.find(u => u.value !== this.unidadSeleccionadaOrigen)?.value || '';
    }
  }
}
