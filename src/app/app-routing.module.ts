import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent, children: [
      { path: '', component: TaskListComponent },
      { path: 'create', component: TaskCreateComponent},
      { path: 'detail/:id', component: TaskDetailComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
