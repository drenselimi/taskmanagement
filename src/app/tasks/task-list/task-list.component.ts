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
    this.taskList = [];
    this.getAllTasks();
  }

  getAllTasks() {
    // let tempTask = new Task();
    // tempTask.Title = "test";
    // tempTask.Description = "test";
    // tempTask.EndDate = new Date('December 17, 1995 03:24:00');
    // tempTask.StartDate = new Date('December 17, 1995 03:24:00');
    // tempTask.Status = "New";
    // this.taskList.push(tempTask);
    this.taskService.getAll()
    .subscribe((res: Task[]) => {
      this.taskList = res;
      // this.loadingService.stop();
    });
  }

  onCreate() {
    this.router.navigate(['/tasks/create']);
  }

}
