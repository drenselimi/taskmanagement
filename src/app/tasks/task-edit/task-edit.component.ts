import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent implements OnInit {

  task: Task;

  list: SelectItem[];

  selectedStatus: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
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

    let taskId = this.route.snapshot.params['id'];

    this.taskService.getById(taskId)
      .subscribe((res: Task) => {
        this.selectedStatus = res.status;
        this.task = res;
      });

  }

  onSave() {
    this.taskService.updateTask(this.task)
      .subscribe((res: Task) => {
        this.router.navigate(['/tasks']);
      });
  }

  onBack() {
    this.router.navigate(['/tasks']);
  }

}
