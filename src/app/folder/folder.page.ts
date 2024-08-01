import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdMob } from '@capacitor-community/admob';
import { BannerAdOptions,
  BannerAdPluginEvents,
  BannerAdPosition,
  BannerAdSize
} from '@capacitor-community/admob';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  

  

  async showBanner(){
    try{
      AdMob.initialize({
        requestTrackingAuthorization: true,
        initializeForTesting: false
      });
      const options: BannerAdOptions= {
        adId: 'ca-app-pub-5655935156518611/5309713879',
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false,
      };

      await AdMob.showBanner(options).then(() => {
        console.log('banner ok')
      });
      AdMob.addListener(BannerAdPluginEvents.FailedToLoad,(error)=> {
        console.log(error.code);
        console.log(error.message);
      })
    } catch(e){
      console.log('error',e);
    }
  }

  //Traduccion menu principal
  inicio_espanol = "Menú de Conversores";
  inicio_ingles = "Converter Menu";
  bienvenido_espanol = "Bienvenido";
  bienvenido_ingles = "Welcome";
  conver_uni_basi_espanol = "Conversión básicas";
  conver_uni_basi_ingles = "Base units conversion";
  conver_divisas_espanol = "Conversión divisas";
  conver_divisas_ingles = "Currency conversion";
  conver_unidades_hogar_espanol ="Conversión hogar";
  conver_unidades_hogar_ingles ="Household Unit Conversion";
  conver_unidades_ciencia_espanol ="Conversión ciencia";
  conver_unidades_ciencia_ingles ="Science unit conversion";
  conver_unidades_varias_espanol ="Conversión varias";
  conver_unidades_varias_ingles ="Conversion of various units";
  calculos_electricos_espanol ="Cálculos eléctricos";
  calculos_electricos_ingles ="Electrical calculations";
  calculos_motor_espanol ="Cálculos de motor";
  calculos_motor_ingles ="Engine calculations";
  calculos_fotovoltaicos_espanol ="Cálculos fotovoltaicos";
  calculos_fotovoltaicos_ingles ="Photovoltaic calculations";

  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  constructor( private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
    this.showBanner();
  }
}
