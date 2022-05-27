import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTableDto } from './create-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {
  @ApiProperty({
    description: 'O novo número da mesa.',
    example: 100,
  })
  number: number;
}
