import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  showForm = false;
  icon = '+'
  taskService = inject(TaskService)

  tasks = this.taskService.getTasks();
  formBuilder = inject(FormBuilder)
  taskForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  })

  addTask() {
    this.showForm = !this.showForm;
    this.icon = this.showForm ? 'x' : '+';
  }

  submitTask() {
    console.log(this.taskForm.value)
    const task = this.taskForm.value;
    this.taskService.addTask(task);
    this.taskForm.reset();
    this.showForm = false;
    this.icon = '+';
  }

}
