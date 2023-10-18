import { Injectable } from '@nestjs/common';

import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
