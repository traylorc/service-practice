import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.class';


const baseurl = `http://localhost:45153/api/users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)
   {

   }

   list(): Observable<User[]>
   {
     return this.http.get(`${baseurl}`) as Observable<User[]>;
   }

   getByPk(id: number): Observable<User>
   {
     return this.http.get(`${baseurl}/${id}`) as Observable<User>;
   }

   create(user:User): Observable<User>
   {
     return this.http.post(`${baseurl}`, user) as Observable<User>;
   }

   change(user: User): Observable<any>
   {
      return this.http.put(`${baseurl}/${user.id}`, user) as Observable<User>;
   }

   remove(id:number): Observable<User>
   {
     return this.http.delete(`${baseurl}/${id}`) as Observable<User>;
   }

   login(username: string, password: string): Observable<User>
   {
      return this.http.get(`${baseurl}/${username}/${password}`) as Observable<User>;
   }
}
