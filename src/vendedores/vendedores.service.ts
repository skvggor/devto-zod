import { Injectable } from '@nestjs/common';

import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class VendedoresService {
  constructor(private prisma: PrismaService) {}
  create(createVendedoreDto: CreateVendedorDto) {
    return 'This action adds a new vendedor';
  }

  findAll() {
    return this.prisma.vendedor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} vendedor`;
  }

  update(id: number, updateVendedoreDto: UpdateVendedorDto) {
    return `This action updates a #${id} vendedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendedor`;
  }
}
