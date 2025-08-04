import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { AuthService } from '../services/auth.service';
import { AppStateService } from '../services/app-state.service';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Interfaz simple para las tareas
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  phone: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true, // ← Componente Standalone
  imports: [TasksComponent, CommonModule], // ← Imports directos
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private appStateService = inject(AppStateService);
  private userService = inject(UserService);

  public isAuthenticated = this.appStateService.isAuthenticated();
  public username = this.appStateService.username();

  // Lista simple de tareas
  tasks: Task[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Hacer ejercicios', completed: true },
    { id: 3, title: 'Crear proyecto', completed: false },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Método para cerrar sesión con navegación programática
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Comunicación con componente hijo - recibir nueva tarea
  onTaskAdded(taskTitle: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: taskTitle,
      completed: false,
    };
    this.tasks = [...this.tasks, newTask];
  }

  // Comunicación con componente hijo - cambiar estado de tarea
  onTaskToggled(taskId: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
  }

  getUsers(): Observable<User[]> {
    return this.userService.getUsers().pipe(map((response) => response.data));
  }
}
