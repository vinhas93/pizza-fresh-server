import { User } from '../../user/entities/user.entity';
import { Table } from '../../table/entities/table.entity';
import { Product } from '../../product/entities/product.entity';

export class Order {
  id?: string;
  userId?: User;
  tableId?: Table;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}
