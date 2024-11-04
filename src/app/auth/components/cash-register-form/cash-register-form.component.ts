import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

import { CashService } from '../../services/cash.service';
import { Caja } from '../../model/caja.interface';

@Component({
  selector: 'cash-register-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './cash-register-form.component.html',
  styleUrl: './cash-register-form.component.css',
})
export class CashRegisterFormComponent implements OnInit {
  form: FormGroup;
  defaultValues = {
    numero: [''],
    password: [''],
    estado: true,
  };
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private cashService: CashService
  ) {
    this.form = this.fb.group(this.defaultValues);
  }

  ngOnInit(): void {
    this.cashService.cash$.subscribe((cash) => {
      if (cash) {
        this.isEditing = true;
        this.form.patchValue(cash);
      }
    });
  }

  onCancel() {
    this.reset();
  }

  reset() {
    this.isEditing = false;
    this.form = this.fb.group(this.defaultValues);
  }

  onSubmit() {
    if (this.isEditing)
      this.cashService.editarCaja(this.form.value).subscribe(this.showMessage);
    else
      this.cashService.crearCaja(this.form.value).subscribe(this.showMessage);
    this.reset();
  }

  showMessage = (cash: Caja) => {
    this.messageService.add({
      severity: 'success',
      summary: `Caja ${this.isEditing ? 'actualizada' : 'creada'} con éxito`,
      detail: cash.numero,
    });
  };
}
