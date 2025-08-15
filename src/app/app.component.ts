// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from './app/models/task.model';
import { TaskService } from './app/services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle).subscribe(task => {
        this.tasks.push(task);
        this.newTaskTitle = '';
      });
    }
  }

  markAsCompleted(task: Task): void {
    this.taskService.completeTask(task.id).subscribe(updatedTask => {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
}