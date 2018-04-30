import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';

import { VizceralComponent } from './vizceral.component';
import { VizceralDirective } from './vizceral.directive';

@NgModule({
  declarations: [ VizceralComponent, VizceralDirective ],
  imports: [ CommonModule ],
  exports: [ CommonModule, VizceralComponent, VizceralDirective ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VizceralModule {
}
