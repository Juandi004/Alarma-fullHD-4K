import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsInt()
  foundedYear: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  stadium?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  coach?: string;
}
