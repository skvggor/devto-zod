import { Injectable } from '@nestjs/common';

import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class VendasService {
  constructor(private prisma: PrismaService) {}

  create(createVendaDto: CreateVendaDto) {
    return 'This action adds a new venda';
  }

  findAll() {
    return this.prisma.venda.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} venda`;
  }

  update(id: number, updateVendaDto: UpdateVendaDto) {
    return `This action updates a #${id} venda`;
  }

  remove(id: number) {
    return `This action removes a #${id} venda`;
  }
}
