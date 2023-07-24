import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./saude/saude.module').then( m => m.SaudePageModule)
  },
  {
    path: 'educacao',
    loadChildren: () => import('./educacao/educacao.module').then( m => m.EducacaoPageModule)
  },
  {
    path: 'essencial',
    loadChildren: () => import('./essencial/essencial.module').then( m => m.EssencialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
