import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'catalinarios', loadChildren: './catalinarios/catalinarios.module#CatalinariosPageModule' },
  { path: 'estebanterrones', loadChildren: './estebanterrones/estebanterrones.module#EstebanterronesPageModule' },
  { path: 'felipe', loadChildren: './felipe/felipe.module#FelipePageModule' },
  { path: 'edgardhenriquez', loadChildren: './edgardhenriquez/edgardhenriquez.module#EdgardhenriquezPageModule' },
  { path: 'paginas', loadChildren: './paginas/paginas.module#PaginasPageModule' },
  { path: 'pagame', loadChildren: './pagame/pagame.module#PagamePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
