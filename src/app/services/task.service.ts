import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'
import { TaskInterface } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'appliication/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string  = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable <TaskInterface[]>{
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface): Observable<TaskInterface>{

    const url = `${this.apiUrl}/${task.id}`;
    console.log("UPDATE FUNC: ",task) // TODO: Fix the update bug
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

}
