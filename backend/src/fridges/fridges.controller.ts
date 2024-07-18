/* import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { FridgesService } from './fridges.service';
import { CreateFridgeDto } from './dto/create-fridge.dto';
import { UpdateFridgeDto } from './dto/update-fridge.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('fridges')
@ApiTags('fridges')
export class FridgesController {
  constructor(private readonly fridgesService: FridgesService) {}

  @Post()
  create(@Body() createFridgeDto: CreateFridgeDto) {
    return this.fridgesService.create(createFridgeDto);
  }

  @Get()
  findAll() {
    return this.fridgesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fridgesService.findOne(+id);
  }

 /*  @Get('discontinued')
  findAllDiscontinued() {
    return this.fridgesService.findAllDiscontinued();
  }
    
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFridgeDto: UpdateFridgeDto) {
    return this.fridgesService.update(+id, updateFridgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fridgesService.remove(+id);
  }
}
 */