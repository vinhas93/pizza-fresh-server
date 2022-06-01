import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do produto',
    example: '1e0e7827-327f-429a-8298-b244803ef8a8',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens no pedido',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Sem cebola',
  })
  description: string;
}
