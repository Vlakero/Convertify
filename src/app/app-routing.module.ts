import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'menu-conversiones-unidades-basicas',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/menu-conversiones-unidades-basicas/menu-conversiones-unidades-basicas.module').then( m => m.MenuConversionesUnidadesBasicasPageModule)
  },
  {
    path: 'area',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/area/area.module').then( m => m.AreaPageModule)
  },
  {
    path: 'longitud',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/longitud/longitud.module').then( m => m.LongitudPageModule)
  },
  {
    path: 'peso',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/peso/peso.module').then( m => m.PesoPageModule)
  },
  {
    path: 'volumen',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/volumen/volumen.module').then( m => m.VolumenPageModule)
  },
 // {
   // path: 'calculos-fotovoltaicos',
    //loadChildren: () => import('./vistas/vistas_calculos_fotovoltaicos/calculos-fotovoltaicos/calculos-fotovoltaicos.module').then( m => m.CalculosFotovoltaicosPageModule)
 // },
  {
    path: 'configuracion',
    loadChildren: () => import('./vistas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./vistas/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'conversiones-divisas',
    loadChildren: () => import('./vistas/conversiones-divisas/conversiones-divisas.module').then( m => m.ConversionesDivisasPageModule)
  },
  {
    path: 'menu-conversiones-unidades-hogar',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/menu-conversiones-unidades-hogar/menu-conversiones-unidades-hogar.module').then( m => m.MenuConversionesUnidadesHogarPageModule)
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/temperatura/temperatura.module').then( m => m.TemperaturaPageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/tiempo/tiempo.module').then( m => m.TiempoPageModule)
  },
  {
    path: 'velocidad',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/velocidad/velocidad.module').then( m => m.VelocidadPageModule)
  },
  {
    path: 'menu-conversiones-ciencia',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/menu-conversiones-ciencia/menu-conversiones-ciencia.module').then( m => m.MenuConversionesCienciaPageModule)
  },
  {
    path: 'fuerza',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/fuerza/fuerza.module').then( m => m.FuerzaPageModule)
  },
  {
    path: 'potencia',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/potencia/potencia.module').then( m => m.PotenciaPageModule)
  },
  {
    path: 'presion',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/presion/presion.module').then( m => m.PresionPageModule)
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  {
    path: 'menu-conversiones-varias',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_varias/menu-conversiones-varias/menu-conversiones-varias.module').then( m => m.MenuConversionesVariasPageModule)
  },
  {
    path: 'angulos',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_varias/angulos/angulos.module').then( m => m.AngulosPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_varias/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'menu-calculos-electricos',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/menu-calculos-electricos/menu-calculos-electricos.module').then( m => m.MenuCalculosElectricosPageModule)
  },
  {
    path: 'caida-tension',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/caida-tension/caida-tension.module').then( m => m.CaidaTensionPageModule)
  },
  {
    path: 'calculo-de-corriente',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/calculo-de-corriente/calculo-de-corriente.module').then( m => m.CalculoDeCorrientePageModule)
  },
  //{
    //path: 'calculo-de-corriente-maxima',
   // loadChildren: () => import('./vistas/vistas_calculos_electricos/calculo-de-corriente-maxima/calculo-de-corriente-maxima.module').then( m => m.CalculoDeCorrienteMaximaPageModule)
  //},
  {
    path: 'calibre-del-cable',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/calibre-del-cable/calibre-del-cable.module').then( m => m.CalibreDelCablePageModule)
  },
  {
    path: 'medida-y-peso-cable',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/medida-y-peso-cable/medida-y-peso-cable.module').then( m => m.MedidaYPesoCablePageModule)
  },
  {
    path: 'menu-calculos-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/menu-calculos-motor/menu-calculos-motor.module').then( m => m.MenuCalculosMotorPageModule)
  },
  {
    path: 'corriente-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/corriente-del-motor/corriente-del-motor.module').then( m => m.CorrienteDelMotorPageModule)
  },
  {
    path: 'potencia-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/potencia-del-motor/potencia-del-motor.module').then( m => m.PotenciaDelMotorPageModule)
  },
  {
    path: 'tension-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/tension-del-motor/tension-del-motor.module').then( m => m.TensionDelMotorPageModule)
  },
  {
    path: 'factor-potencia-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/factor-potencia-motor/factor-potencia-motor.module').then( m => m.FactorPotenciaMotorPageModule)
  },
  {
    path: 'eficiencia-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/eficiencia-del-motor/eficiencia-del-motor.module').then( m => m.EficienciaDelMotorPageModule)
  },
  {
    path: 'menu-calculos-fotovoltaicos',
    loadChildren: () => import('./vistas/vistas_calculos_fotovoltaicoss/menu-calculos-fotovoltaicos/menu-calculos-fotovoltaicos.module').then( m => m.MenuCalculosfotoPageModule)
  },
  {
    path: 'calculos-foto',
    loadChildren: () => import('./vistas/vistas_calculos_fotovoltaicoss/calculos-fotovoltaicos/calculos-fotovoltaicos.module').then( m => m.CalculosFotovoltaicosPageModule)
  },
  {
    path: 'corrientemax',
    loadChildren: () => import('./vistas/vistas_calculos_fotovoltaicoss/calculo-de-corriente-maxima/calculo-de-corriente-maxima.module').then( m => m.CalculoDeCorrienteMaximaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
