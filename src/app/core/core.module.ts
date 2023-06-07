import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BaselineCreationOrComponent } from './baseline-creation-or/baseline-creation-or.component';


@NgModule({
  declarations: [
    BaselineCreationOrComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ,	QuickUiModule,
]
})
export class CoreModule { }
