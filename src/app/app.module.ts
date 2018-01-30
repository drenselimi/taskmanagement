import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { AccordionModule, BreadcrumbModule, AutoCompleteModule, ButtonModule, DataTableModule, CalendarModule, DropdownModule } from 'primeng/primeng';
import { TasksComponent } from './tasks/tasks.component';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from './pipes/date.pipe';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskDetailComponent,
    TasksComponent,
    DatePipe,
    TaskEditComponent,
    StatusPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AppRoutingModule,
    FormsModule,
    HttpModule,
    AccordionModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    BreadcrumbModule,
    ButtonModule,
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }