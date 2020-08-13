import { Card } from "./card"

class SpreadCard {
    position: {
        x: number,
        y: number
    }
    rotation: number
    layer: number
    number: number
    name: string
    description: string
    card: Card
}

class Spread {
    cards: SpreadCard[]
    name: string
    description: string
}