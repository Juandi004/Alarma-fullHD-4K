
export interface Register {
    id: number;
    sensor_id: number;
    room_id: number;
    location: string;
    createdAt: Date;
    sensor: Sensor;
    room: Room;
  }
  
  export interface Sensor {
    id: number;
    model: string;
    make: string;
    type: string;
    year_of_production: number;
  }
  
  export interface Room {
    id: number;
    name: string;
    size: string;
  }
  