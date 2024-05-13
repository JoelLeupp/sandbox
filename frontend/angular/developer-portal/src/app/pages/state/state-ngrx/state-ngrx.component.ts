import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable,map} from 'rxjs';
import { TaskListComponent } from '@components/task-list/task-list.component';
import { Task } from '@components/task-list/task';
import { TaskListActions } from 'src/app/stores/task-list/task-list.actions';
import { selectOpenTasks,selectCompletedTasks } from 'src/app/stores/task-list/task-list.selectors';

@Component({
  selector: 'app-state-ngrx',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './state-ngrx.component.html',
  styleUrl: './state-ngrx.component.scss',
})
export class StateNgrxComponent {
  openTasks:Task[] = [];
  completedTasks: Task[] = [];

  constructor(private store: Store<{ taskList: Task[] }>) {
  }

  ngOnInit(){
    this.store.select(selectOpenTasks).subscribe(tasks => this.openTasks = tasks)
    this.store.select(selectCompletedTasks).subscribe(tasks => this.completedTasks = tasks)
  }

  addTask(label: string): void {
    this.store.dispatch(TaskListActions.addTask({ label }));
  }

  removeTask(id: number): void {
    this.store.dispatch(TaskListActions.removeTask({ id }));
  }

  completeTask(id: number): void {
    this.store.dispatch(TaskListActions.completeTask({ id }));
  }
}
