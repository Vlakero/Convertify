import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-corriente-del-motor',
  templateUrl: './corriente-del-motor.page.html',
  styleUrls: ['./corriente-del-motor.page.scss'],
})
export class CorrienteDelMotorPage implements OnInit {
  public folder!: string;
  selectedCorriente = 'continua';
   potencia: number | null = null;
  tension: number | null = null;
  eficiencia: number | null = null;
  factor_potencia: number | null = null;
  corriente: number | null = null;

  //traducciones
  calculos_electricos_espanol = "Corriente del motor";
  calculos_electricos_ingles = "Motor current";
  potencia_motor_espanol = "Potencia(W) :";
  potencia_motor_ingles = "Power(W) :";
  tension_motor_espanol = "Voltaje(V): ";
  tension_motor_ingles = "Strain(V): ";
  eficiencia_motor_espanol = "Eficiencia(%) :";
  eficiencia_motor_ingles = "Efficiency(%) :";
  factor_potencia_espanol = "Factor de potencia :";
  factor_potencia_ingles = "Power factor :";
  tension_l_l_espanol = "Tensión (L-L)(V):";
  tension_l_l_ingles = " Voltage (L-L)(V):";
  corriente_espanol = "Corriente (A):";
  corriente_ingles = "Current (A):";
  tipo_corriente_espanol = "Tipo de corriente:";
  tipo_corriente_ingles = "Current type:";
  boton_convertir_espanol = "Calcular";
  boton_convertir_ingles = "Calculate"; 

  idiomaSeleccionado = ""; // Variable para almacenar el idioma seleccionado
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

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
  //revisado todo correcto
  calculateCorriente() {
    if (this.selectedCorriente === 'continua') {
      if (this.potencia && this.tension && this.eficiencia) {
        const i = this.potencia / (this.tension * ((this.eficiencia*.01))); //formula para realizar el calculo
        this.corriente = +i.toFixed(3);
      }
    } else if (this.selectedCorriente === 'bifasica' || this.selectedCorriente === 'monofasica') {
      if (this.potencia && this.tension && this.eficiencia && this.factor_potencia) {
        const i = (this.potencia / (this.tension * (this.eficiencia*.01) * this.factor_potencia)); // Fórmula para realizar el cálculo
        this.corriente = +i.toFixed(3);
      }
      } else if (this.selectedCorriente === 'trifasica') {
        if (this.potencia && this.tension && this.eficiencia && this.factor_potencia) {
          const i = (this.potencia /( 1.732*this.tension * (this.eficiencia*.01) * this.factor_potencia)); // Fórmula para realizar el cálculo
          this.corriente = +i.toFixed(3);
        }
      }
    }
  }

