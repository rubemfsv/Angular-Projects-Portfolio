import { Routes } from '@angular/router';

import { ListTasksComponent, RegisterTaskComponent } from './';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list',
  },
  {
    path: 'tasks/list',
    component: ListTasksComponent,
  },
  {
    path: 'tasks/register',
    component: RegisterTaskComponent,
  },
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent,
  },
];
