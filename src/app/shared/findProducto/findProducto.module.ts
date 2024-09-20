import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FindProductoComponent } from './findProducto.component';



@NgModule({
  declarations: [
    FindProductoComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    FormsModule,
    DynamicDialogModule,
    InputTextModule,
    ButtonModule,
    RippleModule
  ],
  exports: [
    FindProductoComponent
  ]
})
export class FindProductoModule { }