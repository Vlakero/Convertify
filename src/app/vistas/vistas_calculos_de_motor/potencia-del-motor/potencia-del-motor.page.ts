import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-potencia-del-motor',
  templateUrl: './potencia-del-motor.page.html',
  styleUrls: ['./potencia-del-motor.page.scss'],
})
export class PotenciaDelMotorPage implements OnInit {
  public folder!: string;
  selectedCorriente = 'continua';
  corriente: number | null = null;
  tension: number | null = null;
  eficiencia: number | null = null;
  factorPotencia: number | null = null;
  voltaje: number | null = null;
  potencia: number | null = null;
  potenciass: number | null = null;
  potenciahp: number | null = null;
  //traducciones
  calculos_electricos_espanol ="Potencia del motor";
  calculos_electricos_ingles ="Engine power";
  voltaje_motor_espanol = "Voltaje(V):";
  voltaje_motor_ingles = "Voltage(V):";
  potencia_motor_espanol = "Potencia(W):";
  potencias_motor_espanol = "Potencia(Kw):";
  potencia_motor_ingles = "Power(W):";
  potencias_motor_ingles = "Power(W):";
  tension_motor_espanol = "Tension(V):";
  potenciahp_motor_espanol = "Potencia(Hp):";
  potenciahp_motor_ingles = "Power(Hp):";
  tension_motor_ingles = "Strain(V):";
  eficiencia_motor_espanol = "Eficiencia(%):";
  eficiencia_motor_ingles = "Efficiency(%):";
  factor_potencia_espanol ="Factor de potencia:";
  factor_potencia_ingles ="Power factor:";
  tension_l_l_espanol = "Tensión (L-L)(V):";
  tension_l_l_ingles = " Voltage (L-L)(V):";
  corriente_espanol= "Corriente (A):";
  corriente_ingles= "Current (A):";
  tipo_corriente_espanol ="Tipo de corriente:";
  tipo_corriente_ingles ="Current type:";
  boton_convertir_espanol = "Calcular";
  boton_convertir_ingles = "Calculate";
  unidadSeleccionada: string = 'W'; // Valor por defecto
  idiomaSeleccionado = ""; // Variable para almacenar el idioma seleccionado

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
//calculo de potneica de motor en continua todo correcto
  calculatePotencia() {
    if (this.selectedCorriente === 'continua') {
      if (this.corriente && this.voltaje && this.eficiencia) {
        this.potencia = this.voltaje * this.corriente * (this.eficiencia/100);
        this.potencia = +this.potencia.toFixed(3);
        this.potenciass = +this.potencia.toFixed(3) /1000;
        this.potenciahp = (+this.potencia.toFixed(3) /1000 )* 1.341;

      }

    } else if (this.selectedCorriente === 'monofasica') {
      if (this.corriente && this.voltaje && this.eficiencia && this.factorPotencia) {
        this.potencia = this.corriente *  this.voltaje * this.factorPotencia * (this.eficiencia/100);
        this.potencia = +this.potencia.toFixed(3);
        this.potenciass = +this.potencia.toFixed(3) /1000;
        this.potenciahp = (+this.potencia.toFixed(3) /1000 )* 1.341;

      }

    } else if (this.selectedCorriente === 'bifasica') {
      if (this.corriente && this.voltaje && this.eficiencia && this.factorPotencia) {
        this.potencia = this.corriente * this.voltaje * this.factorPotencia * (this.eficiencia/100);
        this.potencia = +this.potencia.toFixed(3);
        this.potenciass = +this.potencia.toFixed(3) /1000;
        this.potenciahp = (+this.potencia.toFixed(3) /1000 )* 1.341;

      }
    } else if (this.selectedCorriente === 'trifasica') {
      if (this.corriente && this.voltaje && this.eficiencia && this.factorPotencia) {
        this.potencia = Math.sqrt(3) * this.corriente * this.voltaje * this.factorPotencia * this.eficiencia / 100;
        this.potencia = +this.potencia.toFixed(3);
        this.potenciass = +this.potencia.toFixed(3) /1000;
        this.potenciahp = (+this.potencia.toFixed(3) /1000 )* 1.341;
      }
    }

  }
}
