import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { Caja } from '../../model/caja.interface';

@Component({
  selector: 'delete-button',
  standalone: true,
  imports: [ButtonModule, ConfirmDialogModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css',
})
export class DeleteButtonComponent {
  @Input()
  caja!: Caja;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de querer eliminar la caja ${this.caja.numero}?`,
      header: 'Eliminar',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Caja eliminada',
          detail: this.caja.numero,
        });
      },
    });
  }
}
