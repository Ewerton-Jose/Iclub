import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssencialPageRoutingModule } from './essencial-routing.module';

import { EssencialPage } from './essencial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssencialPageRoutingModule
  ],
  declarations: [EssencialPage]
})
export class EssencialPageModule {}
