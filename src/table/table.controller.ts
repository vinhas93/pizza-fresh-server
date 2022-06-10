import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.tdo';
import { Table } from './entities/table.entity';
import { TableService } from './table.service';

@ApiTags('table')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar nova mesa.',
  })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas.',
  })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma mesa pelo ID.',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar uma mesa pelo ID.',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover uma mesa pelo ID.',
  })
  delete(@Param('id') id: string) {
    return this.tableService.delete(id);
  }
}
