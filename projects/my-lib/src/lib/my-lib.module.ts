import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { MyLibComponent } from './my-lib.component';

@NgModule({
  declarations: [
    MyLibComponent
  ],
  providers: [{    
    provide: TRANSLOCO_SCOPE,    
    useValue: 'core'  
  }],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
