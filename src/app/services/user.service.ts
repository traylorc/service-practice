import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)
   {

   }

   list(): Observable<any>
   {
     return this.http.get(`http://localhost:45153/api/users`) as Observable<any>;
   }
}
