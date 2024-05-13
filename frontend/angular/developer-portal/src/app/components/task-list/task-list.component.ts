import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task';
import { CommonModule } from '@angular/common';
import { UiLibraryAngularModule } from '@six-group/ui-library-angular';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, UiLibraryAngularModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() openTasks: Task[] = [];
  @Input() completedTasks: Task[] = [];
  @Output() removeTask = new EventEmitter<{ id: number }>();
  @Output() completeTask = new EventEmitter<{ id: number }>();
  @Output() addTask = new EventEmitter<{ label: string }>();
}
