import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { VendedoresModule } from './vendedores/vendedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { VendasModule } from './vendas/vendas.module';

import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ProdutosModule,
    CategoriasModule,
    VendedoresModule,
    ClientesModule,
    PedidosModule,
    VendasModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
