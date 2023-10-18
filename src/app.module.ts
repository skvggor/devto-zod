import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProdutosModule, CategoriasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
