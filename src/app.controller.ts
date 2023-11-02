import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductService } from './entities/product.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  getHello(): any {
    return this.productService.findAll();
  }

  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}
