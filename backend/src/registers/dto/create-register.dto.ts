import { IsAlphanumeric, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRegisterDto {
    @ApiProperty()
    @IsNumber()
    id?: number;

    @ApiProperty()
    @IsAlphanumeric()
    sensor_id: number;

    @ApiProperty()
    @IsAlphanumeric()
    room_id: number;
    
    @ApiProperty()
    @IsAlphanumeric()
    location: string;
}