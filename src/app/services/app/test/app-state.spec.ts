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

});