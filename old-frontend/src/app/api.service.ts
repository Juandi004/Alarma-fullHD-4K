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

  getAll<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/fridges`);
  }
  
  getById<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/fridges/${id}`);
  }
  
  create<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/fridges`, item);
  }
  
  update<T>(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.url}/fridges/${id}`, item);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/fridges/${id}`);
  }
}