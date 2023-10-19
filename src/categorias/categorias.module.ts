import { Module } from '@nestjs/common';

import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';

import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService],
  imports: [PrismaModule],
})

export class CategoriasModule {}
