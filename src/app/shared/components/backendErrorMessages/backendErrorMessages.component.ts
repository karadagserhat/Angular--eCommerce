import { Component, Input } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { CommonModule } from '@angular/common';
import { UpgradeTextPipe } from '../../pipes/upgradeText.pipe';

@Component({
  selector: 'eCommerce-backend-error-messages',
  standalone: true,
  imports: [CommonModule, UpgradeTextPipe],
  templateUrl: './backendErrorMessages.component.html',
})
export class BackendErrorMessages {
  @Input() backendErrors: BackendErrorsInterface = {};
}
