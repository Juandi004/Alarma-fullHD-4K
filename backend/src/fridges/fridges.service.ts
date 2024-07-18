/* import { Injectable } from '@nestjs/common';
import { CreateFridgeDto } from './dto/create-fridge.dto';
import { UpdateFridgeDto } from './dto/update-fridge.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FridgesService {
  constructor(private prisma: PrismaService) {}

  create(createFridgeDto: CreateFridgeDto) {
    return this.prisma.fridge.create({data: createFridgeDto});
  }
  
  
  findOne(id: number) {
    return this.prisma.fridge.findUnique({
      where: { id },
    });
  }
  
  findAll() {
    return this.prisma.fridge.findMany();
  }
  
/*   findAllDiscontinued() {
    return this.prisma.fridge.findMany({where: {isDiscontinued: true}});
  }
 
  update(id: number, updateFridgeDto: UpdateFridgeDto) {
    return this.prisma.fridge.update({
      where: { id },
      data: updateFridgeDto,
    });
  }
  remove(id: number) {
    return this.prisma.fridge.delete({
      where: { id },
    });
  }

}
 */