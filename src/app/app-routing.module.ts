import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pages/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3/:datos',
    loadChildren: () => import('./pages/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'pagina4/:valor',
    loadChildren: () => import('./pages/pagina4/pagina4.module').then( m => m.Pagina4PageModule)
  },
  {
    path: 'pagina5',
    loadChildren: () => import('./pages/pagina5/pagina5.module').then( m => m.Pagina5PageModule)
  },
  {
    path: 'pagina6',
    loadChildren: () => import('./pages/pagina6/pagina6.module').then( m => m.Pagina6PageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./pages/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/p404/p404.module').then( m => m.P404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
