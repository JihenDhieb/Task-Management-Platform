import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  status: string;
  dueDate: string;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports:[FormsModule,CommonModule],
templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  tasks: Task[] = [
    { name: 'HIIII', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 2', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 3', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 4', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 5', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 6', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 7', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'Task 8', status: 'In Progress', dueDate: '2024-10-01' },
    { name: 'byeeeeee', status: 'Completed', dueDate: '2024-09-30' }
  ];

  displayedTasks: Task[] = [];
  allTasksShown = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.displayedTasks = this.tasks.slice(0, 5); // Affiche les 5 premières tâches
  }

  showAllTasks(): void {
    this.displayedTasks = this.tasks; // Affiche toutes les tâches
    this.allTasksShown = true; // Cache le bouton "Voir tout"
  }

  toggleForm() {
    const form = document.getElementById('task-form');
    if (form) {
      const displayStyle = form.style.display;
      this.renderer.setStyle(form, 'display', displayStyle === 'none' || displayStyle === '' ? 'block' : 'none');
    }
  }
}
