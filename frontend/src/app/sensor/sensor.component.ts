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
  sensorForm: FormGroup;

  constructor(
    private apiService: ApiService, 
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.sensorForm = this.fb.group({
      id: [null],
      model: ['', Validators.required],
      make: ['', Validators.required],
      type: ['', Validators.required],
      year_of_production: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

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

  onSubmit(): void {
    if (this.sensorForm.valid) {
      const sensorFormValues = this.sensorForm.value;
      const sensor: Sensor = {
        ...sensorFormValues,
        year_of_production: parseInt(sensorFormValues.year_of_production, 10) // Convert year_of_production to integer
      };

      if (sensor.id) {
        this.apiService.patchSensor(sensor.id, sensor).subscribe(
          response => {
            this.message.success('Sensor updated successfully');
            this.loadSensors();
            this.sensorForm.reset();
          },
          error => {
            this.message.error('Error updating sensor');
            console.error('Error updating sensor:', error);
          }
        );
      } else {
        const { id, ...sensorData } = sensor;
        this.apiService.createSensor(sensorData).subscribe(
          response => {
            this.message.success('Sensor created successfully');
            this.loadSensors();
            this.sensorForm.reset();
          },
          error => {
            this.message.error('Error creating sensor');
            console.error('Error creating sensor:', error);
          }
        );
      }
    }
  }

  onDelete(id: number): void {
    this.apiService.deleteSensor(id).subscribe(
      response => {
        this.message.success('Sensor deleted successfully');
        this.loadSensors();
      },
      error => {
        this.message.error('Error deleting sensor');
        console.error('Error deleting sensor:', error);
      }
    );
  }

  onEdit(sensor: Sensor): void {
    this.sensorForm.patchValue(sensor);
  }
}
