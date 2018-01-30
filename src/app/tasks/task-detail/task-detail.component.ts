import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html'
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.task = new Task();
    let taskId = this.route.snapshot.params['id'];

    this.taskService.getById(taskId)
      .subscribe((res: Task) => {
        this.task = res;
      })

  }

  onBack() {
    this.router.navigate(['/tasks']);
  }

}
