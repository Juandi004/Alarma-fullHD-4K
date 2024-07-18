import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateFridgeDto {

    @ApiProperty()
    @IsString()
    model: string;

    @ApiProperty()
    @IsNumber()
    capacity: number;
    
    @ApiProperty()
    @IsNumber()
    year: number;
    
    @ApiProperty({required: false, default: false})
    @IsBoolean()
    isDiscontinued?: boolean;
    
    @ApiProperty()
    @IsNumber()
    price: number;
    
    @ApiProperty({required: false})
    @IsString()
    description?: string;

}
