import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.team.createMany({
    data: [
      {
        name: 'Team A',
        city: 'City A',
        foundedYear: 1900,
        stadium: 'Stadium A',
        coach: 'Coach A',
      },
      {
        name: 'Team B',
        city: 'City B',
        foundedYear: 1950,
        stadium: 'Stadium B',
        coach: 'Coach B',
      },
      {
        name: 'Team C',
        city: 'City C',
        foundedYear: 2000,
        stadium: 'Stadium C',
        coach: 'Coach C',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
