import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'; 
import { Sensor } from '../models/register.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzTableModule,
    NzSpinModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SensorComponent implements OnInit {
  sensors: Sensor[] = [];
  isLoading = false;

  constructor(
    private apiService: ApiService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.loadSensors();
  }

  loadSensors(): void {
    this.isLoading = true;
    this.apiService.getAllSensors<Sensor>().subscribe(
      (data) => {
        this.sensors = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading sensors:', error);
        this.isLoading = false;
      }
    );
  }
}
