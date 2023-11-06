import { getHeroById } from "./services/getHeroById.service"

const hero = getHeroById(1)
console.log(hero?.name ?? 'Hero not found')