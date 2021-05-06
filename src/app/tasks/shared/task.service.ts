import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  listAllTasks(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  register(task: Task): void {
    const tasks = this.listAllTasks();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findById(id: number): Task {
    const tasks: Task[] = this.listAllTasks();
    return tasks.find((task) => task.id === id);
  }

  refresh(task: Task): void {
    const tasks: Task[] = this.listAllTasks();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  remove(id: number): void {
    let tasks: Task[] = this.listAllTasks();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks: Task[] = this.listAllTasks();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].finished = !obj.finished;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }
}
