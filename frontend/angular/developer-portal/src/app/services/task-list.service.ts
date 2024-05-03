import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  filter,
  from,
  map,
  max,
  mergeMap,
} from 'rxjs';
import { Task } from '@components/task-list/task';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  tasks$: Observable<Task[]>;
  private _tasks: BehaviorSubject<Task[]>;
  private dataStore: { tasks: Task[] };

  constructor() {
    this.dataStore = { tasks: [] };
    this._tasks = new BehaviorSubject<Task[]>([]);
    this.tasks$ = this._tasks.asObservable();
  }

  loadTasks() {
    const initialTasks: Task[] = [
      { id: 0, label: 'Meet Frodo', completed: false },
      { id: 1, label: 'Guide Fellowship', completed: false },
      { id: 2, label: 'Confront Saruman', completed: false },
      { id: 3, label: 'Fight Balrog', completed: false },
      { id: 4, label: 'Resurrect', completed: false },
      { id: 5, label: 'Smoke Pipe', completed: false },
    ];
    this.dataStore.tasks = initialTasks;
    this._tasks.next(this.dataStore.tasks);
  }

  getOpenTasks$(): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => !Boolean(task?.completed)))
    );
  }

  getCompletedTasks$(): Observable<Task[]> {
    return this.tasks$.pipe(
      map((tasks) => tasks.filter((task) => Boolean(task?.completed)))
    );
  }

  getMaxId(): number {
    return Math.max(...this.dataStore.tasks.map((task) => task.id));
  }

  addTask(label: string): void {
    // const index = this.tasks().findIndex(task => task.id === id)
    const nextId = this.getMaxId() + 1;
    console.log(`Add task with ID: ${nextId}`);
    const newTask: Task = { id: nextId, label: label, completed: false };
    this.dataStore.tasks.push(newTask);
    this._tasks.next(this.dataStore.tasks);
  }

  removeTask(id: number): void {
    console.log(`Delete task with ID: ${id}`);
    this.dataStore.tasks = this.dataStore.tasks.filter(
      (task) => task.id !== id
    );
    this._tasks.next(this.dataStore.tasks);
  }

  completeTask(id: number): void {
    // const index = this.tasks().findIndex(task => task.id === id)
    console.log(`Complete task with ID: ${id}`);
    this.dataStore.tasks = this.dataStore.tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    this._tasks.next(this.dataStore.tasks);
  }
}
