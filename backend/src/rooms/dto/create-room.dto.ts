import { IsNumber, IsAlphanumeric } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty()
    @IsAlphanumeric()
    name: string;
    
    @ApiProperty()
    @IsAlphanumeric()
    size: string;
}
