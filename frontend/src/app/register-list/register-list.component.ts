import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { ApiService } from '../../services/api.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzColDirective } from 'ng-zorro-antd/grid';

@Component({
  standalone: true,
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css'],
  imports: [
    NzFormControlComponent,
    NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NzTableModule,
    NzSpinModule
  ]
})
export class RegisterListComponent implements OnInit {
  registers: Register[] = [];
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadRegisters();
  }

  loadRegisters(): void {
    this.isLoading = true;
    this.apiService.getAllRegisters<Register>().subscribe(
      (data) => {
        this.registers = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading registers:', error);
        this.isLoading = false;
      }
    );
  }
}
