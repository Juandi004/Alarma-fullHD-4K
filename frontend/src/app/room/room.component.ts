import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Room } from '../models/register.model';
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
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
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
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  isLoading = false;
  roomForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {
    this.roomForm = this.fb.group({
      id: [null], 
      name: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.isLoading = true;
    this.apiService.getAllRooms<Room>().subscribe(
      (data) => {
        this.rooms = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading rooms:', error);
        this.isLoading = false;
      }
    );
  }

  onSubmit(): void {
    if (this.roomForm.valid) {
      const room: Room = this.roomForm.value;
      if (room.id) {
        // Update existing room
        this.apiService.patchRoom(room.id, room).subscribe(
          response => {
            this.message.success('Room updated successfully');
            this.loadRooms();
            this.roomForm.reset();
          },
          error => {
            this.message.error('Error updating room');
            console.error('Error updating room:', error);
          }
        );
      } else {
       
        const { id, ...roomData } = room; 
        this.apiService.createRoom(roomData).subscribe(
          response => {
            this.message.success('Room created successfully');
            this.loadRooms();
            this.roomForm.reset();
          },
          error => {
            this.message.error('Error creating room');
            console.error('Error creating room:', error);
          }
        );
      }
    }
  }

  onDelete(id: number): void {
    this.apiService.deleteRoom(id).subscribe(
      response => {
        this.message.success('Room deleted successfully');
        this.loadRooms();
      },
      error => {
        this.message.error('Error deleting room');
        console.error('Error deleting room:', error);
      }
    );
  }

  onEdit(room: Room): void {
    this.roomForm.patchValue(room);
  }
}
