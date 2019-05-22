import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'catalinarios', loadChildren: './catalinarios/catalinarios.module#CatalinariosPageModule' },
  { path: 'estebanterrones', loadChildren: './estebanterrones/estebanterrones.module#EstebanterronesPageModule' },
  { path: 'felipe', loadChildren: './felipe/felipe.module#FelipePageModule' },
  { path: 'edgardhenriquez', loadChildren: './edgardhenriquez/edgardhenriquez.module#EdgardhenriquezPageModule' },
  { path: 'paginas', loadChildren: './paginas/paginas.module#PaginasPageModule' },
  { path: 'pagame', loadChildren: './pagame/pagame.module#PagamePageModule' },
  { path: 'metroid', loadChildren: './metroid/metroid.module#MetroidPageModule' },
  { path: 'federacion', loadChildren: './federacion/federacion.module#FederacionPageModule' },
  { path: 'samus', loadChildren: './samus/samus.module#SamusPageModule' },
  { path: 'titulos', loadChildren: './titulos/titulos.module#TitulosPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
