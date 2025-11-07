import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses {
  // Empty courses array since we're showing coming soon
  courses: any[] = [];

  // Notification form
  email = '';
  isSubscribed = false;

  subscribeToNotifications() {
    if (this.email && this.isValidEmail(this.email)) {
      // Simulate API call
      setTimeout(() => {
        this.isSubscribed = true;
        this.email = '';
      }, 1000);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
