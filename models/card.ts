export enum Arcana {
    Major,
    Minor,
}

export enum Suit {
    Trump,
    Swords,
    Wands,
    Cups,
    Pentacles,
}

export class Card {
    id: string
    name: string
    number: number
    arcana: Arcana
    suit: Suit
    // reversed: boolean
    meanings: {
        upright: string[],
        reversed: string[],
    }
    searchKey: string
    questions: string[]
    fortunes: string[]
    archetype: string | null
    element: string | null
    hebrewAlphabet: string | null
    spiritual: string | null
    numerology: string | null
    affirmation: string | null

    isMajorArcana() {
        return this.arcana == Arcana.Major
    }

    suitName() {
        return Suit[+this.suit]
    }

    static fromObject(object: any) {
        let card: Card = new Card()
        card.id = object.id
        card.name = object.name
        card.number = object.number
        // card.reversed = false
        card.meanings = {
            upright: object.meanings.new.upright,
            reversed: object.meanings.new.reversed,
        },

        card.arcana = object.arcana == 'Major Arcana' ? Arcana.Major : Arcana.Minor

        let suits = {
            Trump: Suit.Trump,
            Swords: Suit.Swords,
            Wands: Suit.Wands,
            Cups: Suit.Cups,
            Pentacles: Suit.Pentacles,
        }

        card.suit = suits[object.suit]

        card.searchKey = object.searchKey
        card.questions = object.questions
        card.fortunes = object.fortuneTelling
        card.archetype = object.archetype
        card.element = object.elemental
        card.hebrewAlphabet = object.hebrewAlphabet
        card.spiritual = object.spiritual
        card.numerology = object.numerology
        card.affirmation = object.affirmation

        return card
    }
}