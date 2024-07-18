import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRoomDto: CreateRoomDto) {
    return this.prismaService.room.create({data: createRoomDto});
  }

  findAll() {
    return this.prismaService.room.findMany();
  }

  findOne(id: number) {
    return this.prismaService.room.findUnique({where: {id}});
  }

  findByName(name: string) {
    return this.prismaService.room.findUnique({where: {name}});
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prismaService.room.update({where: {id}, data: updateRoomDto});
  }

  remove(id: number) {
    return this.prismaService.room.delete({where: {id}});
  }
}
