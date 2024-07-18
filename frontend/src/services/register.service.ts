// register.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../app/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getAllRegisters(): Observable<Register[]> {
    return this.http.get<Register[]>(`${this.apiUrl}/registers`);
  }
}
