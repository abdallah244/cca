import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrivacyModalComponent } from '../privacy-modal/privacy-modal';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, PrivacyModalComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer{
  currentYear = new Date().getFullYear();
  showPrivacyModal = false;

  openPrivacyModal() {
    this.showPrivacyModal = true;
  }

  closePrivacyModal() {
    this.showPrivacyModal = false;
  }
}
