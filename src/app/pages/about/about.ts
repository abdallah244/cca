import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  founder = {
    name: 'Eng.Abdallah Hany',
    title: 'Founder & CEO',
    image: 'dadd.jpeg',
    story: `Founder and CEO of CodeCraft Academy, serving as a Full-Stack Web Development Instructor.Experienced in web programming and passionate about tech education, with over 2 years of experience in teaching programming and helping students build real-world skills.`,
    achievements: [
      'Graduated from ADA Academy as the top student in the class with the highest honors.',
      'Over two years of experience in web development, both front-end and back-end.',
      'Successfully contributed to over 11 real-world web development projects, delivering high-quality solutions.',
      'Over a year of experience in teaching programming with a focus on practical, project-based learning.'
    ]
  };

  reasons = [
    {
      icon: '🎯',
      title: 'Industry-Relevant Curriculum',
      description: 'Our courses are constantly updated to match current industry demands and technologies.'
    },
    {
      icon: '👨‍💻',
      title: 'Hands-On Projects',
      description: 'Build real-world applications that you can showcase in your portfolio.'
    },
    {
      icon: '🤝',
      title: 'Career Support',
      description: 'Get personalized career guidance, interview prep, and job placement assistance.'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'Join a network of developers and alumni from around the world.'
    }
  ];

  platforms = [
    {
      name: 'Facebook',
      icon: '💬',
      followers: '50K+',
      link: '#',
      description: 'Join our learning community and stay updated with CodeCraft Academy’s latest news & events'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      followers: '10K+',
      link: '#',
      description: 'Follow CodeCraft Academy for tech insights, updates, and coding inspiration every single day.'
    },
    {
      name: 'Instagram',
      icon: '📸',
      followers: '5K+',
      link: '#',
      description: 'Discover our creative journey — student projects, bootcamps, and coding moments at CodeCraft.'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      followers: '20K+',
      link: '#',
      description: 'Connect with CodeCraft Academy’s professional network and explore real-world coding excellence.'
    }
  ];
}
