import { Spread, SpreadCard } from './models/spread'

function slugify(text) {
    text = text.replace(/\s/g, '-')
    text = text.replace(/[^\w-]/g, '')
    text = text.toLowerCase()

    return text
}

function simple3CardSpreadGenerator(card1, card2, card3) {
    let spread = {
        id: slugify(`${card1} ${card2} ${card3}`),
        name: `${card1} | ${card2} | ${card3}`,
        cards: [
            {
                number: 1,
                name: card1,
                position: {
                    x: 1,
                    y: 1,
                },
            },
            {
                number: 2,
                name: card2,
                position: {
                    x: 2,
                    y: 1,
                },
            },
            {
                number: 3,
                name: card3,
                position: {
                    x: 3,
                    y: 1,
                },
            }
        ]
    }

    return spread
}

let threeCardSpreads = [
    ['Past', 'Present', 'Future'],
    ['Nature', 'Cause', 'Solution'],
    ['Current Situation', 'Obstacle', 'Advice'],
    ['Situation', 'Action', 'Outcome'],
    ['Context', 'Where To Focus', 'Outcome'],
    ['What I Think', 'What I Feel', 'What I Do'],
].map(a => simple3CardSpreadGenerator(...a))

let spreads = []
spreads.push(...threeCardSpreads)


let balanced =  {
    id: slugify(`mind body spirit`),
    name: `Mind | Body | Spirit`,
    cards: [
        {
            number: 1,
            name: 'Mind',
            position: {
                x: 2,
                y: 1,
            },
        },
        {
            number: 2,
            name: 'Body',
            rotation: 225,
            position: {
                x: 1,
                y: 2,
            },
        },
        {
            number: 3,
            name: 'Spirit',
            rotation: 135,
            position: {
                x: 3,
                y: 2,
            },
        }
    ]
}

spreads.push(balanced)

module.exports = spreads.map(spread => Spread.fromObject(spread))