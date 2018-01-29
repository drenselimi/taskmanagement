import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, Response, HttpModule } from "@angular/http";
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TaskService {

  url: string = 'http://abc-kosovo.cleverapps.io/ae355c5624ec/tasks';

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Task[]> {
    return this.http.get(this.url)
      .map((res: Response) => {
        return res.json() as Task[];
      });
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post(this.url, JSON.stringify(task))
      .map((res: Response) => {
        return res.json() as Task;
      });
  }

}
