import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { MyLibComponent } from './my-lib.component';
import { TranslocoRootModule } from './transloco-root.module';

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
    TranslocoRootModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
