import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = 'http://localhost:3000/'; 

  constructor(private http: HttpClient) { }

  getAllRegisters<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/registers`);
  }

  getRegister<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/registers/${id}`);
  }
}
