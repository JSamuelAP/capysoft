import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

import { Categoria } from '../../model/categoria.interface';

@Component({
  selector: 'products-form',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
  ],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css',
})
export class ProductsFormComponent implements OnInit {
  titulo: string = 'Dar de alta producto';
  categorias: Categoria[] | undefined;
  selectedCategoria: Categoria | undefined;

  ngOnInit(): void {
    this.categorias = [
      { nombre: 'Bebida', id: 1 },
      { nombre: 'Postre', id: 2 },
      { nombre: 'Comida', id: 3 },
    ];
  }
}
