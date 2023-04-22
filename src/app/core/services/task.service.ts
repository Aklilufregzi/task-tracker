import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Do buisness with Angular',
      description: 'Description 1',
      status: false,
      project: 1,
      dueDate: new Date('2021-09-01')
    },

    {
      id: 2,
      title: 'push ocde to ',
      description: 'Description 2',
      status: true,
      project: 1,
      dueDate: new Date('2021-09-01')
    },
  ]

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): any {
    if (!this.tasks.find(task => task.id === id)) return 'Task not found';
    else {
      return this.tasks.find(task => task.id === id);

    }
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[index] = task;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


}
