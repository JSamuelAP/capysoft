import { Component, Input } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { Product } from '../../model/product.interface';

@Component({
  selector: 'delete-product-button',
  standalone: true,
  imports: [ButtonModule, ConfirmDialogModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './delete-product-button.component.html',
  styleUrl: './delete-product-button.component.css',
})
export class DeleteProductButtonComponent {
  @Input()
  producto!: Product;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `¿Estás seguro de querer eliminar el producto ${this.producto.nombreProducto}?`,
      header: 'Eliminar',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: `Producto ${this.producto.idProducto} eliminado`,
          detail: this.producto.nombreProducto,
        });
      },
    });
  }
}
