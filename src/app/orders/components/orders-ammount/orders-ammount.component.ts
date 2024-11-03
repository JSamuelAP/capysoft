import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'orders-ammount',
  standalone: true,
  imports: [],
  templateUrl: './orders-ammount.component.html',
  styleUrl: './orders-ammount.component.css',
})
export class OrdersAmmountComponent {
  @Input() ammount!: number;
  @Input() id!: number;
  @Input() precio!: number;
  subtotal: number = 0;
  @Output() subtotalChange = new EventEmitter<{ id: number, subtotal: number }>();

  ngOnInit() {
    this.actualizarSubtotal();
  }

  increment = () => {
    this.ammount += 1;
    this.actualizarSubtotal();
  }

  decrement = () => {
    if (this.ammount > 0) {
      this.ammount -= 1;
      this.actualizarSubtotal();
    }
  }

  actualizarSubtotal = () => {
    this.subtotal = this.ammount * this.precio;
    this.subtotalChange.emit({ id: this.id, subtotal: this.subtotal });
  }
}
