import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-modal.html',
  styleUrl: './privacy-modal.scss'
})
export class PrivacyModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.onClose();
    }
  }
}
