import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from '../utils/handle-error.util';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateOrderDto) {
    const data: Prisma.OrderCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      table: {
        connect: {
          number: dto.tableNumber,
        },
      },
      products: {
        createMany: {
          data: dto.products.map((createOrderProduct) => ({
            productId: createOrderProduct.productId,
            quantity: createOrderProduct.quantity,
            description: createOrderProduct.description,
          })),
        },
      },
    };
    return this.prisma.order
      .create({
        data,
        select: {
          id: true,
          table: {
            select: {
              number: true,
            },
          },
          user: {
            select: {
              name: true,
            },
          },
          products: {
            select: {
              product: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        products: true,
        table: {
          select: {
            number: true,
          },
        },
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            products: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        table: {
          select: {
            number: true,
          },
        },
        products: {
          select: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                image: true,
                description: true,
              },
            },
          },
        },
      },
    });
  }
}
