import { Component, OnInit } from '@angular/core';
import { Register } from '../models/register.model';
import { RegisterService } from '../../services/register.service';
import { FormsModule, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';
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
    NzTableModule
  ]
})
export class RegisterListComponent implements OnInit {
  registers: Register[] = []; 

  isLoading = false;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.loadRegisters();
  }

  loadRegisters(): void {
    this.isLoading = true;
    this.registerService.getAllRegisters().subscribe(
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
