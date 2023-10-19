import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';

@Module({
  controllers: [VendasController],
  providers: [VendasService],
})
export class VendasModule {}
