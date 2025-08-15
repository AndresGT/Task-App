import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5132/api/Task'; // Ajusta el puerto según tu API .NET

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(title: string): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, { title });
  }

  completeTask(id: number): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, { isCompleted: true });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
