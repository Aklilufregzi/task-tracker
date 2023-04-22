import { Component, Input, inject } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  status: any;
  @Input() task: any;

  taskService = inject(TaskService);

  onChange(event: any) {
    console.log(event.target.checked)
    // this.task.status = event.target.checked;
    this.taskService.updateTask(this.task);

  }



}
