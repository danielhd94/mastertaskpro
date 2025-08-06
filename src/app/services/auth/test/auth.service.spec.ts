import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { AppStateService } from '../../app/app-state.service';

describe('AuthService', () => {
  let service: AuthService;
  let appStateService: AppStateService;

  beforeEach(() => {
    const AppStateServiceSpy = jasmine.createSpyObj('AppStateService', [
      'setIsAuthenticated',
      'setUsername',
    ]);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { 
        provide: AppStateService, 
            useValue: AppStateServiceSpy 
        },
      ],
    });

    service = TestBed.inject(AuthService);
    appStateService = TestBed.inject(
      AppStateService
    ) as jasmine.SpyObj<AppStateService>;

  });

  it('Servicio de autenticacion creado', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('deberia iniciar sesion correctamente', () => {
      // Arrange: Iniciar sesion - Preparar datos de prueba
      const username = 'admin';
      const password = '123456';

      // Act: Iniciar sesion - Ejecutar la funcion
      const result = service.login(username, password);

      // Assert: Verificar el resultado - Verificar el estado de la autenticacion
      expect(result).toBe(true);
      expect(appStateService.setIsAuthenticated).toHaveBeenCalledWith(true);
    });
  });

  describe('logout', () => {
    it('deberia cerrar sesion correctamente', () => {
      // Arrange: Iniciar sesion - Preparar datos de prueba
      service.login('admin', '123456');
      expect(service.isAuthenticated()).toBe(true);

      // Act: Cerrar sesion - Ejecutar la funcion
      service.logout();

      // Assert: Verificar el resultado - Verificar el estado de la autenticacion
      expect(service.isAuthenticated()).toBe(false);
    });
  });

  describe('isLoggedIn', () => {
    it('deberia retornar true si el usuario esta autenticado', () => {
      // Arrange: Iniciar sesion - Preparar datos de prueba
      service.login('admin', '123456');
      
      // Act: Verificar si el usuario esta autenticado - Ejecutar la funcion
      const result = service.isLoggedIn();

      // Assert: Verificar el resultado - Verificar el estado de la autenticacion
      expect(result).toBe(true);
    });
  });

});
