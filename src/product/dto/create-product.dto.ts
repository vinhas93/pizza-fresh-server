import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do Produto.',
    example: 'Pizza de Marguerita',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do  Produto.',
    example: 'Pizza de Marguerita da casa.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do Produto.',
    example: 25.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do Produto.',
    example:
      'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
  })
  image: string;
}
