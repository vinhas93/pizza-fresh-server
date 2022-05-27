import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductDto): Promise<Product> {
    const data: Product = {...dto }
    return this.prisma.
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string, dto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  delete(id: string) {
    return `This action removes a #${id} product`;
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('/n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum erro ocorreu ao executar a operação.',
    );
  }
}
