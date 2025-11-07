import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-projects.html',
  styleUrl: './student-projects.scss'
})
export class StudentProjects {
  selectedProject: any = null;

  studentProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      course: 'Full Stack Web Development',
      studentName: 'Ahmed Mohamed',
      studentImage: '/students/ahmed.jpg',
      projectImage: '/projects/ecommerce.jpg',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      liveDemo: 'https://demo-ecommerce.cca.com',
      githubRepo: 'https://github.com/ahmedmohamed/ecommerce-platform',
      features: [
        'User registration & authentication',
        'Product search & filtering',
        'Shopping cart & wishlist',
        'Payment processing',
        'Order tracking',
        'Admin dashboard'
      ],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Health & Fitness Tracker',
      course: 'Mobile App Development',
      studentName: 'Sarah Ali',
      studentImage: '/students/sarah.jpg',
      projectImage: '/projects/fitness.jpg',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and health metrics with beautiful data visualizations.',
      technologies: ['React Native', 'Firebase', 'Chart.js', 'Redux'],
      liveDemo: 'https://demo-fitness.cca.com',
      githubRepo: 'https://github.com/sarahali/fitness-tracker',
      features: [
        'Workout planning & tracking',
        'Nutrition logging',
        'Progress analytics',
        'Social sharing',
        'Offline functionality',
        'Push notifications'
      ],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Data Analysis Dashboard',
      course: 'Data Science & Machine Learning',
      studentName: 'Omar Hassan',
      studentImage: '/students/omar.jpg',
      projectImage: '/projects/dashboard.jpg',
      description: 'An interactive dashboard for analyzing sales data with predictive analytics and machine learning insights.',
      technologies: ['Python', 'Pandas', 'Plotly', 'Scikit-learn', 'FastAPI'],
      liveDemo: 'https://demo-dashboard.cca.com',
      githubRepo: 'https://github.com/omarhassan/sales-dashboard',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Customer segmentation',
        'Sales forecasting',
        'Interactive charts',
        'Export functionality'
      ],
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'Task Management App',
      course: 'Full Stack Web Development',
      studentName: 'Lina Mahmoud',
      studentImage: '/students/lina.jpg',
      projectImage: '/projects/taskapp.jpg',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      liveDemo: 'https://demo-tasks.cca.com',
      githubRepo: 'https://github.com/linamahmoud/task-manager',
      features: [
        'Real-time collaboration',
        'Project boards',
        'Time tracking',
        'File attachments',
        'Team management',
        'Progress reporting'
      ],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      course: 'Mobile App Development',
      studentName: 'Karim Ahmed',
      studentImage: '/students/karim.jpg',
      projectImage: '/projects/weather.jpg',
      description: 'A beautiful weather application with detailed forecasts, maps, and severe weather alerts.',
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Google Maps'],
      liveDemo: 'https://demo-weather.cca.com',
      githubRepo: 'https://github.com/karimahmed/weather-app',
      features: [
        '7-day weather forecast',
        'Interactive maps',
        'Weather alerts',
        'Location-based services',
        'Dark/Light theme',
        'Offline caching'
      ],
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      course: 'UI/UX Design Mastery',
      studentName: 'Nour ElDin',
      studentImage: '/students/nour.jpg',
      projectImage: '/projects/portfolio.jpg',
      description: 'A stunning portfolio website showcasing design skills with smooth animations and responsive design.',
      technologies: ['HTML/CSS', 'JavaScript', 'GSAP', 'Figma'],
      liveDemo: 'https://demo-portfolio.cca.com',
      githubRepo: 'https://github.com/noureldin/portfolio',
      features: [
        'Responsive design',
        'Smooth animations',
        'Project showcase',
        'Contact form',
        'Blog section',
        'SEO optimized'
      ],
      status: 'Completed'
    }
  ];

  openProjectModal(project: any) {
    this.selectedProject = project;
  }

  closeProjectModal() {
    this.selectedProject = null;
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeProjectModal();
    }
  }
}
