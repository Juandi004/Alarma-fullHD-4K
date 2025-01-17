import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  })
  export class ApiService {
  private url = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  getAllRegisters<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/registers`);
  }

  getAllRooms<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/rooms`);
  }

  getRoom<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/rooms/${id}`);
  }

  createRoom<T>(item: Omit<T, 'id'>): Observable<T> { 
    return this.http.post<T>(`${this.url}/rooms`, item);
  }

  patchRoom<T>(id: number, item: T): Observable<T> {
    return this.http.patch<T>(`${this.url}/rooms/${id}`, item);
  }

  deleteRoom<T>(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/rooms/${id}`);
  }

  getAllSensors<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/sensors`);
  }

  createSensor<T>(item: Omit<T, 'id'>): Observable<T> { 
    return this.http.post<T>(`${this.url}/sensors`, item);
  }

  patchSensor<T>(id: number, item: T): Observable<T> {
    return this.http.patch<T>(`${this.url}/sensors/${id}`, item);
  }

  deleteSensor<T>(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/sensors/${id}`);
  }

}
