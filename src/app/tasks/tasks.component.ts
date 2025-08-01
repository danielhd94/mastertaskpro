import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-tasks',
  standalone: true, // ← Componente Standalone
  imports: [CommonModule, FormsModule], // ← Imports directos
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  // Comunicación entre componentes
  @Input() tasks: Task[] = []; // ← Recibe datos del padre
  @Output() taskAdded = new EventEmitter<string>(); // ← Envía eventos al padre
  @Output() taskToggled = new EventEmitter<number>(); // ← Envía eventos al padre

  // Propiedades simples para el formulario
  newTaskTitle = '';

  // Método para agregar tarea
  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskAdded.emit(this.newTaskTitle); // ← Emite evento al padre
      this.newTaskTitle = ''; // Limpia el formulario
    }
  }

  // Método para cambiar estado de tarea
  toggleTask(taskId: number) {
    this.taskToggled.emit(taskId); // ← Emite evento al padre
  }
}
