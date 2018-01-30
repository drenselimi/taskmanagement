import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskStatusEnum } from '../../enums/task-status.enum';
import { TaskService } from '../../services/task.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html'
})
export class TaskCreateComponent implements OnInit {

  statusList: TaskStatusEnum[];
  selectedStatus: string;

  task: Task;

  list: SelectItem[];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.task = new Task();
    this.selectedStatus = "";
    this.list = [
      { label: 'Select', value: '0' },      
      { label: 'New', value: '1' },
      { label: 'Process', value: '2' },
      { label: 'Completed', value: '3' }
    ];

  }

  onCreate() {
    // this.task.status = this.selectedStatus;
    this.taskService.createTask(this.task)
      .subscribe((res: Task) => {
        console.log(res);
        this.router.navigate(['/tasks']);
      },
      error => {
        console.log(error);
      });
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }

}
