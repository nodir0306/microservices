import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from './entities';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('createProduct')
  async create(@Payload() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @MessagePattern('findAllProduct')
  async findAll() {
    return await this.productService.findAll();
  }

  @MessagePattern('findOneProduct')
  async findOne(@Payload() payload: { id: number }) {
    return await this.productService.findOne(payload.id);
  }

  @MessagePattern('findOneProductByCategoryId')
  async findProductByCategoryId(@Payload() payload: { id: number }): Promise<Product[] | null> {
    return await this.productService.findProductByCategoryId(payload.id);
  }

  @MessagePattern('updateProduct')
  async update(@Payload() updateProductDto: UpdateProductDto) {
    return await this.productService.update(updateProductDto);
  }

  @MessagePattern('removeProduct')
  async remove(@Payload() payload: { id: number }) {
    return await this.productService.remove(payload.id);
  }
}
