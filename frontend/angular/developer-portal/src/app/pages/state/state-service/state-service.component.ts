import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskListService } from '@services/task-list.service';
import { TaskListComponent } from '@components/task-list/task-list.component';
import { Task } from '@components/task-list/task';

@Component({
  selector: 'app-state-service',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './state-service.component.html',
  styleUrl: './state-service.component.scss',
})
export class StateServiceComponent {
  constructor(private taskListService: TaskListService) {}

  openTasks: Task[] = [];
  completedTasks: Task[] = [];

  ngOnInit(): void {
    this.taskListService.loadTasks();
    this.getOpenTasks();
    this.getCompletedTasks();
  }
  getOpenTasks(): void {
    this.taskListService
      .getOpenTasks$()
      .subscribe((tasks) => (this.openTasks = tasks));
  }

  getCompletedTasks(): void {
    this.taskListService
      .getCompletedTasks$()
      .subscribe((tasks) => (this.completedTasks = tasks));
  }

  addTask(label: string): void {
    this.taskListService.addTask(label);
  }

  removeTask(id: number): void {
    this.taskListService.removeTask(id);
  }

  completeTask(id: number): void {
    this.taskListService.completeTask(id);
  }
}
