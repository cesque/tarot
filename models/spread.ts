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

    static fromObject(object: any) {
        let card = new SpreadCard()
        card.position.x = object.position.x
        card.position.y = object.position.y
        card.rotation = object.rotation || 0

        let sizes = {
            small: Size.Small,
            medium: Size.Medium,
            large: Size.Large
        }

        card.size = object.size ? sizes[object.size] : Size.Medium

        card.layer = object.layer || 0
        card.number = object.number || 1
        card.name = object.name
        card.description = object.description
        card.card = null

        return card
    }
}

export class Spread {
    cards: SpreadCard[]
    name: string
    description: string

    static fromObject(object: any) {
        let spread = new Spread()

        spread.cards = []
        for(let card of object.cards) {
            spread.cards.push(SpreadCard.fromObject(card))
        }

        spread.name = object.name
        spread.description = object.description
    }
}