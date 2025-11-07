import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class Home implements OnInit {
  staffMembers = [
    {
      name: 'Eng.Abdallah Hany',
      role: 'Academy Director | CEO | Full-Stack Web Development Instructor',
      image: 'dadd.jpeg',
      description: 'Founder and CEO of CodeCraft Academy, serving as a Full-Stack Web Development Instructor.Experienced in web programming and passionate about tech education, with over 2 years of experience in teaching programming and helping students build real-world skills.'
    },
    {
      name: 'Eng.Mohamed Hamada',
      role: 'Programming Mentor | Technical Guide',
      image: 'hamada.png',
      description: 'Technical Mentor at CodeCraft Academy, providing guidance and support to students in web development and helping them apply technical concepts effectively in real-world projects.'
    },
    {
      name: 'Eng.Mohamed Hany',
      role: 'Programming Mentor | Technical Guide',
      image: 'moha.png',
      description: 'Technical Mentor at CodeCraft Academy, providing guidance and support to students in web development and helping them apply technical concepts effectively in real-world projects.'
    },
    {
      name: 'Eng.Mona Hossam',
      role: 'Student Affairs Officer | Academic Coordinator',
      image: 'mona.jpeg',
      description: 'Dedicated to supporting students throughout their academic journey by managing communication, attendance, and course coordination. Ensures smooth operations between instructors, mentors, and learners while maintaining a positive and organized learning environment.'
    },
    // {
    //   name: 'Eng.Ahmed Mohamed',
    //   role: 'Administrative Officer | Operations Coordinator',
    //   image: 'mona.jpeg',
    //   description: 'Responsible for overseeing daily operations and ensuring efficient workflow across all departments. Manages documentation, logistics, and internal coordination to maintain smooth business functions and support the academy’s overall goals.'
    // }
  ];

  features = [
    {
      icon: '🚀',
      title: 'Project-Based Learning',
      description: 'Learn by building real-world projects from day one'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Mentorship',
      description: '1-on-1 guidance from industry professionals'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Job placement assistance and career coaching'
    },
    {
      icon: '🔄',
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with lifetime access'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Join a network of passionate developers'
    },
    {
      icon: '📱',
      title: 'Modern Tech Stack',
      description: 'Learn the latest technologies and frameworks'
    }
  ];

  currentStaffIndex = 0;
  animatedStats = {
    students: 0,
    employment: 0,
    partners: 0,
    rating: 0
  };
  finalStats = {
    students: 1000,
    employment: 95,
    partners: 50,
    rating: 4.9
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateStats();
      this.startStaffCarousel();
    }
  }

  animateStats() {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(this.finalStats).forEach(stat => {
      const finalValue = this.finalStats[stat as keyof typeof this.finalStats];
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(finalValue * progress);

        this.animatedStats[stat as keyof typeof this.animatedStats] = stat === 'rating'
          ? Number((finalValue * progress).toFixed(1))
          : currentValue;

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }

  startStaffCarousel() {
    setInterval(() => {
      this.nextStaff();
    }, 5000);
  }

  nextStaff() {
    this.currentStaffIndex = (this.currentStaffIndex + 1) % this.staffMembers.length;
  }

  prevStaff() {
    this.currentStaffIndex = (this.currentStaffIndex - 1 + this.staffMembers.length) % this.staffMembers.length;
  }

  selectStaff(index: number) {
    this.currentStaffIndex = index;
  }

  getAriaLabel(index: number): string {
    return 'Go to slide ' + (index + 1);
  }
}
