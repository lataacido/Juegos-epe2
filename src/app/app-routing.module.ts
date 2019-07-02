import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'catalinarios', loadChildren: './catalinarios/catalinarios.module#CatalinariosPageModule' },
  { path: 'estebanterrones', loadChildren: './estebanterrones/estebanterrones.module#EstebanterronesPageModule' },
  { path: 'felipe', loadChildren: './felipe/felipe.module#FelipePageModule' },
  { path: 'edgardhenriquez', loadChildren: './edgardhenriquez/edgardhenriquez.module#EdgardhenriquezPageModule' },
  { path: 'paginas', loadChildren: './paginas/paginas.module#PaginasPageModule' },
  { path: 'pagame', loadChildren: './pagame/pagame.module#PagamePageModule' },
  { path: 'metroid', loadChildren: './metroid/metroid.module#MetroidPageModule' },
  { path: 'federacion', loadChildren: './federacion/federacion.module#FederacionPageModule' },
  { path: 'samus', loadChildren: './samus/samus.module#SamusPageModule' },
  { path: 'titulos', loadChildren: './titulos/titulos.module#TitulosPageModule' },
  { path: 'monstros', loadChildren: './monstros/monstros.module#MonstrosPageModule' },
  { path: 'conexfirebase', loadChildren: './conexfirebase/conexfirebase.module#ConexfirebasePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'Harolds', loadChildren: './Harolds/Harolds.module#HaroldsPageModule' },
  { path: 'humanos', loadChildren: './Harolds/Razas/humanos/humanos.module#HumanosPageModule' },
  { path: 'nomuertos', loadChildren: './Harolds/Razas/nomuertos/nomuertos.module#NomuertosPageModule' },
  { path: 'orcos', loadChildren: './Harolds/Razas/orcos/orcos.module#OrcosPageModule' },
  { path: 'nelf', loadChildren: './Harolds/Razas/nelf/nelf.module#NelfPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
