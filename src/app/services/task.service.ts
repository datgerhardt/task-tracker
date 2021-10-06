import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import { TaskInterface } from '../Task';
import {catchError} from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':'appliication/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string  = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getTasks(): Observable <TaskInterface[]>{
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

 
  updateTaskReminder(task: TaskInterface): Observable<TaskInterface>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  addTask(task: TaskInterface):Observable<TaskInterface>{
    return this.http.post<TaskInterface>(this.apiUrl, task)
    .pipe(
      catchError(this.handleError)
    ); 
   }
}
