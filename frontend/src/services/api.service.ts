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

//  CRUD endpoints for registers API, do not use either POST or PATCH as it is not intended to be used via frontend
//  except by Arduino devices. DELETE is implemented in the service but not used in the frontend. Use it with caution.

  getAllRegisters<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/registers`);
  }
//
 // getRegistersByRoom<T>(room_id: number): Observable<T> {
 //   return this.http.get<T>(`${this.url}/registers/from-room/${room_id}`);
 // }
//
 // getRegistersById<T>(id: number): Observable<T> {
 //   return this.http.get<T>(`${this.url}/registers/${id}`);
 // }
//
//  createRegister<T>(item: T): Observable<T> {
//    return this.http.post<T>(`${this.url}/registers`, item);
//  }

  //deleteRegister(id: number): Observable<void> {
  //  return this.http.delete<void>(`${this.url}/registers/${id}`);
  //}

  //  CRUD endpoints for rooms

  getAllRooms<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/rooms`);
  }
  getRoom<T>(id: number): Observable<T> {
    return this.http.get<T>(`${this.url}/rooms/${id}`);
  }
  createRoom<T>(item: T): Observable<T> {
    return this.http.post<T>(`${this.url}/rooms`, item);
  }
  patchRoom<T>(id: number, item: T): Observable<T> {
    return this.http.patch<T>(`${this.url}/rooms/${id}`, item);
  }
  deleteRoom<T>(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/rooms/${id}`);
  }

  //  CRUD endpoints for sensors

  

/*
  getAllRegisters<T>(): Observable<T[]> {
    return this.http.get<T[]>(`${this.url}/registers`);
  }
*/

}
