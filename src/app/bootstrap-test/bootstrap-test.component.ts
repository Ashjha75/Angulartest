import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootstrap-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootstrap-test.component.html',
  styleUrl: './bootstrap-test.component.css'
})
export class BootstrapTestComponent {
  alertMessage = 'Bootstrap has been successfully integrated into your Angular 17 project!';
  alertType = 'success';
  
  changeAlert(type: string) {
    this.alertType = type;
    switch(type) {
      case 'success':
        this.alertMessage = 'Success! Bootstrap is working correctly.';
        break;
      case 'warning':
        this.alertMessage = 'Warning! This is a test alert.';
        break;
      case 'danger':
        this.alertMessage = 'Danger! This is a test alert.';
        break;
      case 'info':
        this.alertMessage = 'Info! This is a test alert.';
        break;
      default:
        this.alertMessage = 'Bootstrap has been successfully integrated into your Angular 17 project!';
    }
  }
}
