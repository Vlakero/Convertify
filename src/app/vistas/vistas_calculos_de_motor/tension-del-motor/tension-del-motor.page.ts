import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tension-del-motor',
  templateUrl: './tension-del-motor.page.html',
  styleUrls: ['./tension-del-motor.page.scss'],
})
export class TensionDelMotorPage implements OnInit {
  public folder!: string;
  selectedCorriente ="continua";
  corriente: number | null = null;
  potencia: number | null = null;
  factorPotencia: number | null = null;
  tension: number | null = null;
  eficiencia: number | null = null;


  //traduccion
  calculos_electricos_espanol ="Tensión del motor";
  calculos_electricos_ingles ="Motor voltage";
  tipo_corriente_espanol ="Tipo de corriente:";
  tipo_corriente_ingles ="Current type:";
  corriente_espanol= "Corriente(A):";
  corriente_ingles= "Current(A):";
  potencia_motor_espanol = "Potencia(W) :";
  potencia_motor_ingles = "Power(W) :";
  eficiencia_motor_espanol = "Eficiencia(%) :";
  eficiencia_motor_ingles = "Efficiency(%) :";
  factor_potencia_espanol ="Factor de potencia :";
  factor_potencia_ingles ="Power factor :";
  tension_motor_espanol = "Voltaje(V):";
  tension_motor_ingles = "Strain(V):";
  boton_convertir_espanol = "Calcular";
  boton_convertir_ingles = "Calculate";
  idiomaSeleccionado = ""; // Variable para almacenar el idioma seleccionado

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}
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
  }//todo correcto
  calculateTension() {
    if (this.selectedCorriente === 'continua') {
      if (this.potencia && this.corriente  && this.eficiencia ) {
        this.tension = this.potencia / (this.corriente * this.eficiencia/100);
        this.tension = +this.tension.toFixed(3);
      }
    } else if (this.selectedCorriente === 'monofasica') {
      if (this.potencia && this.corriente && this.factorPotencia && this.eficiencia) {
        this.tension = this.potencia / (this.corriente * this.factorPotencia * this.eficiencia/100);
        this.tension = +this.tension.toFixed(3);
      }
    } else if (this.selectedCorriente === 'bifasica') {
      if (this.potencia && this.corriente && this.factorPotencia && this.eficiencia) {
        this.tension = this.potencia / (this.corriente  * this.factorPotencia * this.eficiencia/100);
        this.tension = +this.tension.toFixed(3);
      }//tiene un porcentaje de margen de error
    } else if (this.selectedCorriente === 'trifasica') {
      if (this.potencia && this.corriente && this.factorPotencia && this.eficiencia) {
        this.tension = this.potencia / (Math.sqrt(3) * this.corriente * this.factorPotencia * this.eficiencia/100);
        this.tension = +this.tension.toFixed(3);
      }
    }
  }
}
