import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSensorDto {
    @ApiProperty()
    @IsString()
    model: string;

    @ApiProperty()
    @IsString()
    make: string;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNumber()
    year_of_production: number;
}
