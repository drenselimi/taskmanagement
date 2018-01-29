import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Response } from "@angular/http";
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Task[];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.getAllTasks();
  }

  getAllTasks() {
    // this.taskService.getAll()
    // .subscribe((res: Task[]) => {
    //   this.taskList = res;
    //   // this.loadingService.stop();
    // });
  }

  onCreate() {
    this.router.navigate(['/tasks/create']);
  }

}
