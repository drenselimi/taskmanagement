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

  getById(id: string): Observable<Task> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => {
        let result = res.json() as Task;
        if (result.startDate) {
          result.startDate = new Date(result.startDate);
        }
        if (result.endDate) {
          result.endDate = new Date(result.endDate);
        }
        return result;
      });
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post(this.url, task)
      .map((res: Response) => {
        return res.json() as Task;
      });
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put(this.url+ '/' + task._id, task)
      .map((res: Response) => {
        return res.json() as Task;
      });
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete(this.url + '/' + id)
      .map((res: Response) => {
        return;
      }); 
  }

}
