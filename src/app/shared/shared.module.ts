import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './component/drop-down/drop-down.component';



@NgModule({
  declarations: [
    DropDownComponent
  ],
  exports: [
    DropDownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
