import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-calculos-fotovoltaicos',
  templateUrl: './calculos-fotovoltaicos.page.html',
  styleUrls: ['./calculos-fotovoltaicos.page.scss'],
})
export class CalculosFotovoltaicosPage implements OnInit {
  public folder!: string;
  tipoFacturacion: string = 'MENSUAL';
  consumoPorHora: number = 0;
  consumoMensual: number[] = Array(12).fill(0);
  consumoTotal: number = 0;
  energiaTotalRequerida: number = 0;
  diasDelAnio: number = 365;
  eficienciaModulo: number = 0.15; // 15%
  radiacionSolarDiaria: number = 5; // kWh/m²
  horasSol: number = 0;
  factorPerdida: number = .77;
  calculosRealizados: boolean = false;
  StringEnergiaTotalRequerida: string = '0.00';
  StringCalcularPotenciaPicoFV: string = '00';
  idiomaSeleccionado = "";

  calculos_fotovoltaicos_espanol ="Fotovoltaicos";
  calculos_fotovoltaicos_ingles ="Photovoltaic";
  tipo_facturacion_espanol = "Tipo de facturación:";
  tipo_facturacion_ingles = "Billing type:";
  consumo_total_espanol = "Consumo total (KWh):";
  consumo_total_ingles = "Total consumption (KWh):";
  energia_requerida_espanol = "Energía total requerida:";
  energia_requerida_ingles= "Total energy required:";
  horas_sol_espanol = "HSP:";
  horas_sol_ingles = "Hours of sun:";
  factor_perdida_espanol = "Factor de pérdida:";
  factor_perdida_ingles = "Loss factor:";
  potencia_pico_espanol = "Potencia pico FV:";
  potencia_pico_ingles = "PV peak power:";
  modulos_necesarios_espanol ="Módulos necesarios:";
  modulos_necesarios_ingles ="Modules needed:";
  boton_convertir_espanol = "Calcular";
  boton_convertir_ingles = "Calculate";
  
  constructor( private navCtrl: NavController,private activatedRoute: ActivatedRoute) {}

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

  calcularEnergiaTotal() {
    if (this.tipoFacturacion === 'MENSUAL') {
      this.energiaTotalRequerida = this.consumoMensual.reduce((a, b) => a + b, 0) / this.diasDelAnio;
    } else {
      this.energiaTotalRequerida = this.consumoTotal;
    }
    // Format the value as '1.2-2'
    this.StringEnergiaTotalRequerida = this.energiaTotalRequerida.toFixed(2);
    this.calculosRealizados = true;
  }

  obtenerNombreMes(mes: number): string {
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return nombresMeses[mes - 1];
  }

  CalcularPotenciaPicoFV(): number {

    return this.energiaTotalRequerida / (this.horasSol * this.factorPerdida);
  }

  calcularModulosNecesarios(potenciaModulo: number): number {
    const potenciaPicoFV = this.CalcularPotenciaPicoFV();
    this.StringCalcularPotenciaPicoFV = potenciaPicoFV.toFixed(2);
    return Math.ceil(potenciaPicoFV / potenciaModulo);
  }
} 