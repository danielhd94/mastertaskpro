import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { User, UserResponse } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<UserResponse> {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) => {
          if (users.length > 0) {
            return {
              success: true,
              data: users,
              message: 'Users fetched successfully',
              code: 200,
            };
          } else {
            return {
              success: false,
              data: [],
              message: 'No users found',
              code: 404,
            };
          }
        })
      );
  }
}
