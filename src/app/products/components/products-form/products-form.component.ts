import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FileSelectEvent,
  FileUpload,
  FileUploadModule,
} from 'primeng/fileupload';

import { Categoria } from '../../model/categoria.interface';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.interface';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
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
    idProducto: [''],
    nombreProducto: [''],
    precioProducto: [''],
    categoriaProducto: [null],
    foto: [null],
  };
  isEditing: boolean = false;
  @ViewChild('fileUpload') fileUpload!: FileUpload;

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
            (category) => category.nombre === product.categoriaProducto
          ),
        });
      }
    });
  }

  onSelect(event: FileSelectEvent) {
    if (event.currentFiles.length > 0) {
      const file = event.currentFiles[0];
      if (file.type.includes('image')) {
        this.form.patchValue({
          foto: file,
        });
      }
    }
  }

  onCancel() {
    this.reset();
  }

  reset() {
    this.isEditing = false;
    this.form = this.fb.group(this.defaultValues);
    this.fileUpload.clear();
  }

  onSubmit() {
    if (this.isEditing)
      this.productService
        .editProduct(this.form.value)
        .subscribe(this.showMessage);
    else
      this.productService
        .createProduct({
          ...this.form.value,
          categoriaProducto: this.form.value.categoriaProducto.nombre,
        })
        .subscribe(this.showMessage);
    this.reset();
  }

  showMessage = (producto: Product) => {
    console.log(producto);
    this.messageService.add({
      severity: 'success',
      summary: `Producto ${
        this.isEditing ? 'actualizado' : 'creado'
      } con éxito`,
      detail: producto.nombreProducto,
    });
  };
}
