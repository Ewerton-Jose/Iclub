import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssencialPage } from './essencial.page';

const routes: Routes = [
  {
    path: '',
    component: EssencialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssencialPageRoutingModule {}
