import prisma from '../src/lib/prisma'
import { Prisma } from '@prisma/client';

import PokemonSeed from '~/db/mocks/pokemon-seed'

async function main() {
  console.log('Start seeding ...')
  const insertions = PokemonSeed.map((pokemon: Prisma.Pokemon) => (
    prisma.users.upsert({
      where: { id: pokemon.id },
      update: {},
      create: {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
      },
    })
  ))
  const response = await Promise.all(insertions)
  console.log('Finish seeding ...')
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
