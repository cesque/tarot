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

    suitSymbol() {
        return ['swords', 'wands', 'cups', 'pentacles'][this.suit - 1]
    }

    numberSymbol() {
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'P', 'N', 'Q', 'K'][this.number - 1]
    }
    
    majorArcanaRomanNumeral() {
        let n = this.number

        if (n == 0) {
            return '0'
        }

        const lookup = [
            { symbol: 'X', number: 10 },
            { symbol: 'IX', number: 9 },
            { symbol: 'V', number: 5 },
            { symbol: 'IV', number: 4 },
            { symbol: 'I', number: 1 },
        ]

        let roman = ''
        for (let pair of lookup) {
            while (n >= pair.number) {
                roman += pair.symbol
                n -= pair.number
            }
        }

        return roman
    }

    symbol() {
        if(this.isMajorArcana()) {
            return this.majorArcanaRomanNumeral()
        } else {
            return this.numberSymbol()
        }
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