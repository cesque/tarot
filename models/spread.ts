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
    card?: [Card, boolean]

    draw(deck) {
        let index = Math.floor(Math.random() * deck.length)

        let drawn = deck.splice(index, 1)[0]
        this.card = [drawn, Math.round(Math.random()) > 0.5]
    }

    static fromObject(object: any) {
        let card = new SpreadCard()

        card.position = {
            x: object.position.x,
            y: object.position.y,
        }
        
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
        card.description = object.description || ''
        card.card = undefined
        return card
    }
}

export class Spread {
    id: string
    cards: SpreadCard[]
    name: string
    description: string

    constructor(id, name?, description?) {
        this.id = id
        this.name = name || ''
        this.description = description || ''
        this.cards = []
    }

    addCard(card: SpreadCard) {
        this.cards.push(card)
    }

    draw(deck) {
        // just in case, we don't want to modify the base deck
        let deckCopy = deck.slice()

        for(let card of this.cards) {
            card.draw(deckCopy)
        }
    }

    static fromObject(object: any) {
        let spread = new Spread(object.id)

        spread.cards = []
        for(let card of object.cards) {
            spread.cards.push(SpreadCard.fromObject(card))
        }

        spread.name = object.name
        spread.description = object.description

        return spread
    }
}