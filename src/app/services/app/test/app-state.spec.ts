import { TestBed } from '@angular/core/testing';
import { AppStateService } from '../app-state.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService],
    });
    service = TestBed.inject(AppStateService);
  });

  it('Servicio de estado de la aplicacion creado', () => {
    expect(service).toBeTruthy();
  });


  describe('setUsername', () => {
    it('deberia establecer el nombre de usuario correctamente', () => {
      // Arrange: Iniciar sesion - Preparar datos de prueba
      const username = 'admin';

      // Act: Iniciar sesion - Ejecutar la funcion
      service.setUsername(username);

      // Assert: Verificar el resultado - Verificar el estado de la autenticacion
      expect(service.username()).toEqual(username);
    });
  });

  describe('reset', () => {
    it('deberia establecer el nombre de usuario correctamente', () => {
      // Arrange: Iniciar sesion - Preparar datos de prueba
      const loading = true;
      const error = 'Error de prueba';
      const username = 'admin';

      service.setLoading(loading);
      service.setError(error);
      service.setUsername(username);

      expect(service.isLoading()).toBe(loading);
      expect(service.error()).toBe(error);
      expect(service.username()).toBe(username);

      service.reset();

      expect(service.isLoading()).toBe(false);
      expect(service.error()).toBe(null);
      expect(service.username()).toBe(null)
    });
  });

});