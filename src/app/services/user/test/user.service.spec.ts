import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { mockUsers } from './mock-user';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Servicio de usuario creado', () => {
    expect(service).toBeTruthy();
  });

  describe('getUsers', () => {
    it('deberia retornar un array de usuarios', (done) => {
      service.getUsers().subscribe((response) => {
        expect(response.data).toEqual(mockUsers);
        expect(response.success).toBe(true);
        expect(response.message).toBe('Users fetched successfully');
        expect(response.code).toBe(200);
        done();
      });

      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
      expect(req.request.method).toBe('GET');
      req.flush(mockUsers);
    });
  });
});
