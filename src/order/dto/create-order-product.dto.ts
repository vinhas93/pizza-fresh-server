import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do produto',
    example: 'uuid',
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
