import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(c => c.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(c => c.About) },
  { path: 'courses', loadComponent: () => import('./pages/courses/courses').then(c => c.Courses) },
  { path: 'studentprojects', loadComponent: () => import('./pages/student-projects/student-projects').then(c => c.StudentProjects) },
  { path: '**', redirectTo: '' }
];
