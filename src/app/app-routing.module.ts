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
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./paginas/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'polizas',
    loadChildren: () => import('./paginas/polizas/polizas.module').then( m => m.PolizasPageModule)
  },
  {
    path: 'trasnferencias',
    loadChildren: () => import('./paginas/trasnferencias/trasnferencias.module').then( m => m.TrasnferenciasPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./paginas/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
