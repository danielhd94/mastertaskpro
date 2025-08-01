import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { AuthService } from '../services/auth.service';

// Interfaz simple para las tareas
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true, // ← Componente Standalone
  imports: [TasksComponent, CommonModule], // ← Imports directos
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // Lista simple de tareas
  tasks: Task[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Hacer ejercicios', completed: true },
    { id: 3, title: 'Crear proyecto', completed: false },
  ];

  constructor(private router: Router, private authService: AuthService) {}

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
}
