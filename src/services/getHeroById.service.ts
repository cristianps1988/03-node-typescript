import { heroes, Hero } from "../data/hero.data"

export const getHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id)
}