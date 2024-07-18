import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('registers')
@ApiTags('Registers')
export class RegistersController {
  constructor(private readonly registersService: RegistersService) {}

  @Post()
  async create(@Body() createRegisterDto: CreateRegisterDto) {
    return this.registersService.create(createRegisterDto);
  }

  @Get()
  async findAll() {
    return this.registersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.registersService.findOne(+id);
  }

  @Get('from-room/:room_id')
  async findAllRoom(@Param('room_id') room_id: string) {
    const roomIdNumber = parseInt(room_id, 10);
    if (isNaN(roomIdNumber)) {
      throw new Error('Invalid room_id');
    }
    return this.registersService.findAllRoom(roomIdNumber);
  }
  // @Get(':room_id')
  // findMany(@Param('room_id') id: number)

/*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto) {
    return this.registersService.update(+id, updateRegisterDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registersService.remove(+id);
  }
}
