import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateTableDto } from './dto/update-table.tdo';
import { handleError } from 'src/utils/handle-error.util';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data }).catch(handleError);
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findOne(id: string): Promise<Table> {
    return await this.findById(id);
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);

    const data: Partial<Table> = { ...dto };

    return this.prisma.table
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.table.delete({ where: { id } });
    throw new HttpException('', 204);
  }

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o Id '${id}' não encontrado. `);
    }

    return record;
  }
}
