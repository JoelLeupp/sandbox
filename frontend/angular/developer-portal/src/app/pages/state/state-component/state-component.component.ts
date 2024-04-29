import {
  Component,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Task } from '@components/task-list/task';
import { TaskListComponent } from '@components/task-list/task-list.component';

@Component({
  selector: 'app-state-component',
  standalone: true,
  templateUrl: './state-component.component.html',
  styleUrl: './state-component.component.scss',
  imports: [TaskListComponent],
})
export class StateComponentComponent {
  title = 'State Component';

  tasks: WritableSignal<Task[]> = signal([
    { id: 0, label: 'sleep', completed: false },
    { id: 1, label: 'eat', completed: false },
    { id: 2, label: 'work', completed: false },
    { id: 3, label: 'relax', completed: false },
  ]);

  openTasks: Signal<Task[]> = computed(() =>
    this.tasks().filter((t) => !Boolean(t?.completed))
  );

  completedTasks: Signal<Task[]> = computed(() =>
    this.tasks().filter((t) => Boolean(t?.completed))
  );

  maxId: Signal<number> = computed(() =>
    Math.max(...this.tasks().map((task) => task.id))
  );

  removeTask(id: number): void {
    console.log(`Delete task with ID: ${id}`);
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  completeTask(id: number): void {
    // const index = this.tasks().findIndex(task => task.id === id)
    console.log(`Complete task with ID: ${id}`);
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  addTask(label: string): void {
    // const index = this.tasks().findIndex(task => task.id === id)
    const nextId = this.maxId() + 1;
    console.log(`Add task with ID: ${nextId}`);
    this.tasks.update((tasks) => [
      ...tasks,
      { id: nextId, label: label, completed: false },
    ]);
  }
}
