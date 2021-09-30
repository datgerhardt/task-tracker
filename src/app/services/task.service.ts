import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs'

import { Tasks, TaskInterface } from '../mock-task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string  = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks(): Observable <TaskInterface[]>{

    return this.http.get<TaskInterface[]>(this.apiUrl);
  }
  
}
