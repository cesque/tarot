import { Card } from "./card"
import { Size } from "./size"

export class SpreadCard {
    position: {
        x: number,
        y: number
    }
    rotation: number
    size: Size
    layer: number
    number: number
    name: string
    description: string
    card: Card
}

export class Spread {
    cards: SpreadCard[]
    name: string
    description: string
}