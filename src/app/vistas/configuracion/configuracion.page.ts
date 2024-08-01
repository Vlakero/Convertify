import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})








export class ConfiguracionPage implements OnInit {
  //Cambio de idioma vista menu principal
  lenguaje_espanol="Idioma";
  lenguaje_ingles="Language";
  brillo_espanol="Brillo";
  brillo_ingles="Brightness";
  apariencia_ingles="Appearance";
  apariencia_espanol="Apariencia";  
  inicio_espanol = "";
  inicio_ingles = "";
  conver_uni_basi_espanol = "";
  conver_uni_basi_ingles = "";
  conver_divisas_espanol = "";
  conver_divisas_ingles = "";
  conver_unidades_hogar_espanol ="";
  conver_unidades_hogar_ingles ="";
  conver_unidades_ciencia_espanol ="";
  conver_unidades_ciencia_ingles ="";
  conver_unidades_varias_espanol ="";
  conver_unidades_varias_ingles ="";

  calculos_electricos_espanol ="";
  calculos_electricos_ingles ="";
  calculos_motor_espanol ="";
  calculos_motor_ingles ="";
  calculos_fotovoltaicos_espanol ="";
  calculos_fotovoltaicos_ingles ="";
//Traduccion del menu despegable
  configuracion_espanol = "Configuración";
  configuracion_ingles = "Settings";
  acerca_espanol = "";
  acerca_ingles = "";
  //Traduccion vista unidades basicas
conversiones_espanol = " ";
conversiones_ingles = " ";
longitud_espanol = "";
longitud_ingles = "";
area_espanol = "";
area_ingles = "";
peso_espanol = "";
peso_ingles = "";
volumen_espanol = "";
volumen_ingles = "";
//Traduccion de la mayoria de aaprtados
convertir_de_espanol = "";
convertir_de_ingles = " ";
cantidad_espanol = "";
cantidad_ingles = "";
a_espanol = "";
a_ingles = "";
resultado_espanol = "";
resultado_ingles = "";
boton_convertir_espanol = "";
boton_convertir_ingles = "";
boton_calcular_espanol = "";
boton_calcular_ingles = "";
//unidades a conversión apartado longitud
milimetros_espanol = "";
milimetros_ingles = "";
centimetros_espanol = "";
centrimetros_ingles = "";
decimetros_espanol = "";
decimetros_ingles = "";
metros_espanol = "";
metros_ingles = "";
pulgadas_espanol = "";
pulgadas_ingles = "";
pies_espanol = "";
pies_ingles = "";
yardas_espanol = "";
yardas_ingles = "";
millas_espanol = "";
millas_ingles = "";
kilometros_espanol = "";
kilometros_ingles = "";
//traduccion apartado divisas
divisas_espanol = "";
divisas_ingles = "";
dolares_americanos_español = "";
  dolares_americanos_ingles  = "";
//traduccion menu conversion de unidades del hogar
temperatura_espanol = "";
temperatura_ingles = "";
tiempo_espanol = "";
tiempo_ingles = "";
velocidad_espanol = "";
velocidad_ingles = "";
//traduccion menu conversiones de unidades de ciencia
fuerza_espanol = "";
fuerza_ingles = "";
potencia_espanol = "";
potencia_ingles = "";
presion_espanol = "";
presion_ingles = "";
energia_espanol = "";
energia_ingles = "";
//traduccion menu conversion de unidades varias
angulos_espanol = "";
angulos_ingles = "";
datos_espanol = "";
datos_ingles= "";

//traduccion menu calculos electricos
caida_tension_espanol = "";
caida_tension_ingles = "";
calculo_corriente_espanol = "";
calculo_corriente_ingles = "";
calculo_corriente_max_espanol = "";
calculo_corriente_max_ingles = "";
calibre_cable_espanol = "";
calibre_cable_ingles = "";
medida_peso_cable_espanol = "";
medida_peso_cable_ingles = "";
calculos_espanol ="";
calculos_ingles = "";
//traduccion para menu caida de tensión
calibre_conductor_espanol = "";
calibre_conductor_ingles = "";
amperaje_español ="";
amperaje_ingles ="";
distancia_metros_español ="";
distancia_metros_ingles ="";
factor_potencia_espanol ="";
factor_potencia_ingles ="";
fases_espanol ="";
fases_ingles ="";
vln_espanol ="";
vln_ingles ="";
resistencia_espanol =" ";
resistencia_ingles ="";
impedancia_espanol = "";
impedancia_ingles = "";
porcentaje_caida_tension_espanol ="";
porcentaje_caida_tension_ingles="";
//traduccion apartado corriente maxima
corriente_espanol= "";
corriente_ingles= "";
corriente_max_espanol= "";
corriente_max_ingles= "";
//traduccion calibre del cable
longitud_linea_espanol ="";
longitud_linea_ingles ="";
caida_tension_permitida_espanol ="";
caida_tension_permitida_ingles ="";
tipo_aislamiento_espanol ="";
tipo_aislamiento_ingles ="";
continua_espanol ="";
continua_ingles ="";
monofasica_espanol ="";
monofasica_ingles ="";
bifasica_espanol ="";
bifasica_ingles ="";
trifasica_espanol = "";
trifasica_ingles ="";
temperatura_ambiente_espanol ="";
temperatura_ambiente_ingles ="";
tipo_corriente_espanol ="";
tipo_corriente_ingles ="";
tension_espanol ="";
tension_ingles ="";
carga_espanol = "";
carga_ingles = "";
voltaje_motor_espanol = "";
voltaje_motor_ingles = "";
//traduccion aaprtado converison del cable
conversion_cable_espanol ="";
conversion_cable_ingles ="";
calibre_del_cable_espanol = "";
calibre_del_cable_ingles = "";

//traduccion menu calculos de motor
corriente_motor_espanol = "";
corriente_motor_ingles = "";
potencia_motor_espanol = "";
potencia_motor_ingles = "";
tension_motor_espanol = "";
tension_motor_ingles = "";
//traduccion  motor
  eficiencia_motor_espanol = "";
  eficiencia_motor_ingles = "";
  tension_l_l_espanol = "";
  tension_l_l_ingles = "";
//traduccion apartado calculos fotovoltaicos
 tipo_facturacion_espanol = "";
 tipo_facturacion_ingles = "";
 consumo_total_espanol = "";
 consumo_total_ingles = "";
 energia_requerida_espanol = "";
 energia_requerida_ingles= "";
 horas_sol_espanol = "";
 horas_sol_ingles = "";
 factor_perdida_espanol = "";
 factor_perdida_ingles = "";
 potencia_pico_espanol = "";
 potencia_pico_ingles = "";
 modulos_necesarios_espanol ="";
 modulos_necesarios_ingles ="";
//traduccion apartado acerca de
acerca_de_espanol = "";
acerca_de_ingles= "";
acerca_de_la_espanol = "";
acerca_de_la_ingles= "";
descripcion_espanol = "";
descripcion_ingles = "";
descripcion_texto_espanol = "";
descripcion_texto_ingles = "";
funciones_espanol = "";
funciones_ingles = "";
conver_texto_uni_basi_espanol = "";
conver_texto_uni_basi_ingles = "";
conver_divisas_texto_espanol = "";
conver_divisas_texto_ingles = "";
conver_unidades_hogar_texto_espanol ="";
conver_unidades_hogar_texto_ingles ="";
conver_unidades_ciencia_texto_espanol ="";
conver_unidades_ciencia_texto_ingles ="";
conver_unidades_varias_texto_espanol ="";
conver_unidades_varias_texto_ingles ="";
caida_tension_texto_espanol = "";
caida_tension_texto_ingles = "";
calculo_corriente_texto_espanol = "";
 calculo_corriente_texto_ingles = "";
 calculo_corriente_max_texto_espanol = "";
 calculo_corriente_max_texto_ingles = "";
 medida_peso_cable_texto_espanol = "";
 medida_peso_cable_texto_ingles = "";
 corriente_motor_texto_espanol = "";
 corriente_motor_texto_ingles = "";
 tension_motor_texto_espanol = "";
 tension_motor_texto_ingles = "";
 calculos_fotovoltaicos_texto_espanol ="";
 calculos_fotovoltaicos_texto_ingles ="";
 acerca_de_app_espanol = "";
 acerca_de_app_ingles = "";
 acerca_de_app_texto_espanol = "";
 acerca_de_app_texto_ingles= "";
 nota_espanol = "";
 nota_ingles = "";
 nota_texto_espanol = "";
 nota_texto_ingles = "";

idiomaSeleccionado = ""; // Variable para almacenar el idioma seleccionado

  constructor(private navCtrl: NavController, private toastController: ToastController) {
    // Recuperar el idioma seleccionado del localStorage al cargar la página
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }




  themeToggle = false;

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark:any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev:any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd:any) {
    document.body.classList.toggle('dark', shouldAdd);
  }


  goToMainMenu() {
    // Redirigir a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Navegar hacia atrás en la pila de navegación
    this.navCtrl.back();
  }

  async cambiarIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;

    let x = "";
    if (idioma == "en"){
      x = "Selected Language: English"
    }
    if (idioma == "es"){
      x = "Lenguaje Seleccionado: Español"
    }
    // Mostramos el Toast de confirmación de selección
    const toast = await this.toastController.create({
      message: x,
      duration: 4500,
      position: 'middle',
      icon:'earth-outline',
    });

    await toast.present();
  
    // Guardar el idioma seleccionado en el localStorage
    localStorage.setItem('idiomaSeleccionado', this.idiomaSeleccionado);
  }
}
