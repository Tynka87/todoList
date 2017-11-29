import {Injectable} from '@angular/core';
import {Task} from '../models/task';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TasksService {

  private TaskUrl = `http://${ environment.severUrl }:${ environment.severPort }/tasks`; // URL to web api

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TaskUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.TaskUrl, task, httpOptions);
  }

  deleteTask(task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.TaskUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.TaskUrl, task, httpOptions);
  }
}
