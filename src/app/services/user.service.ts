import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserResponse {
  success: boolean;
  data: User[];
  message: string;
  code: number;
}

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
