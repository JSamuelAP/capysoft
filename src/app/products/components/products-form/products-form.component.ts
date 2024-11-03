import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

import { Categoria } from '../../model/categoria.interface';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.interface';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'products-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    FileUploadModule,
    InputNumberModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css',
})
export class ProductsFormComponent implements OnInit {
  categorias: Categoria[] | undefined;
  selectedCategoria: Categoria | undefined;
  form: FormGroup;
  defaultValues = {
    id: [''],
    nombre: [''],
    precio: [''],
    categoria: [null],
  };
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private productService: ProductService
  ) {
    this.form = this.fb.group(this.defaultValues);
  }

  ngOnInit(): void {
    this.categorias = [
      { nombre: 'bebida', id: 1 },
      { nombre: 'postre', id: 2 },
      { nombre: 'comida', id: 3 },
    ];

    this.productService.product$.subscribe((product) => {
      if (product) {
        this.isEditing = true;
        this.form.patchValue({
          ...product,
          categoria: this.categorias?.find(
            (category) => category.nombre === product.categoria
          ),
        });
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
      this.productService
        .editProduct(this.form.value)
        .subscribe(this.showMessage);
    else
      this.productService
        .createProduct(this.form.value)
        .subscribe(this.showMessage);
    this.reset();
  }

  showMessage = (producto: Product) => {
    this.messageService.add({
      severity: 'success',
      summary: `Producto ${
        this.isEditing ? 'actualizado' : 'creado'
      } con éxito`,
      detail: producto.nombre,
    });
  };
}
