import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SensorsService {
  constructor (private prisma: PrismaService) {}
  create(createSensorDto: CreateSensorDto) {
    return this.prisma.sensor.create({data: createSensorDto});
  }

  findAll() {
    return this.prisma.sensor.findMany();
  }

  findOne(id: number) {
    return this.prisma.sensor.findUnique({where: {id}});
  }

  findMany(type: string) {
    return this.prisma.sensor.findMany({where: {type}});
  }

  update(id: number, updateSensorDto: UpdateSensorDto) {
    return this.prisma.sensor.update({
      where: {id},
      data: updateSensorDto
    });
  }

  remove(id: number) {
    return this.prisma.sensor.delete({
      where: {id}
    });
  }
}
