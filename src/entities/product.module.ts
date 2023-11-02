import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  imports: [DatabaseModule],
  providers: [...productProviders, ProductService],
  exports: [ProductService, ...productProviders],
})
export class ProductModule {}
