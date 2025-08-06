import { DashboardComponent } from "./dashboard.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Describir el componente DashboardComponent
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            DashboardComponent,
            HttpClientTestingModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear el componente', ()=> {
    expect(component).toBeTruthy();
  })

});