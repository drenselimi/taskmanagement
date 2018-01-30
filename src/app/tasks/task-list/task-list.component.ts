import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Response } from "@angular/http";
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
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
    this.taskService.getAll()
    .subscribe((res: Task[]) => {
      console.log(res);
      this.taskList = res;
    });
  }

  onCreate() {
    this.router.navigate(['/tasks/create']);
  }

  onDetail(event) {
    this.router.navigate(['/tasks/detail/' + event._id]);
  }

  onEdit(event) {
    this.router.navigate(['/tasks/edit/' + event._id]);
  }

  onDelete(event) {
    this.taskService.deleteTask(event._id)
      .subscribe(() => {
        this.getAllTasks();
      });
  }

}
