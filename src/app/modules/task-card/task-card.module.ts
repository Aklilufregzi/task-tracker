import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { FormsModule } from '@angular/forms';
import { BirrPipe } from 'src/app/core/birr.pipe';



@NgModule({
  declarations: [
    TaskCardComponent,
    BirrPipe

  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    TaskCardComponent
  ]
})
export class TaskCardModule { }
