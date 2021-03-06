import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    nickName: 'paulosalvatore',
    name: 'Paulo Salvatore',
    password: 'Abcd@1234',
    image: 'https://avatars.githubusercontent.com/u/7906171',
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: { nickName: obj.nickName },
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
      },
    });
  }
};
