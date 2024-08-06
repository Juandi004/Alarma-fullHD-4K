import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.prismaService.team.create({
      data: {
        name: createTeamDto.name,
        city: createTeamDto.city,
        foundedYear: createTeamDto.foundedYear,
        stadium: createTeamDto.stadium,
        coach: createTeamDto.coach,
      },
    });
  }

  findAll() {
    return this.prismaService.team.findMany();
  }

  findOne(id: number) {
    return this.prismaService.team.findUnique({ where: { id } });
  }

  findByName(name: string) {
    return this.prismaService.team.findUnique({ where: { name } });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.prismaService.team.update({
      where: { id },
      data: {
        name: updateTeamDto.name,
        city: updateTeamDto.city,
        foundedYear: updateTeamDto.foundedYear,
        stadium: updateTeamDto.stadium,
        coach: updateTeamDto.coach,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.team.delete({ where: { id } });
  }
}
