import { Spread, SpreadCard } from './models/spread'

function slugify(text) {
    text = text.replace(/\s/g, '-')
    text = text.replace(/[^\w-]/g, '')
    text = text.toLowerCase()

    return text
}

function simpleNCardSpreadGenerator(cards, group) {
    let spread = {
        id: slugify(cards.join(' ')),
        group: group,
        // name: `${card1}, ${card2} &</i> ${card3}`,
        cards: cards.map((card, index) => {
            return {
                number: index + 1,
                name: card,
                position: {
                    x: index + 1,
                    y: 1,
                },
            }
        })
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
].map(a => simpleNCardSpreadGenerator(a))

let spreads = []

spreads.push(simpleNCardSpreadGenerator(['Past', 'Present', 'Future']))
spreads.push(simpleNCardSpreadGenerator(['Nature', 'Cause', 'Solution']))
spreads.push(simpleNCardSpreadGenerator(['Current Situation', 'Obstacle', 'Advice']))
spreads.push(simpleNCardSpreadGenerator(['Situation', 'Action', 'Outcome']))
spreads.push(simpleNCardSpreadGenerator(['Context', 'Where To Focus', 'Outcome']))
spreads.push(simpleNCardSpreadGenerator(['What I Think', 'What I Feel', 'What I Do']))

spreads.push(simpleNCardSpreadGenerator(['Where you stand now', 'What you aspire to', 'How to get there']))
spreads.push(simpleNCardSpreadGenerator(['What you aspire to', 'What is standing in your way', 'How you can overcome this']))
spreads.push(simpleNCardSpreadGenerator(['What will help you', 'What will hinder you', 'What is your unrealised potential']))

spreads.push(simpleNCardSpreadGenerator(['What you can change', 'What you can\'t change', 'What you may not be aware of']))
spreads.push(simpleNCardSpreadGenerator(['What worked well', 'What didn\'t work well', 'Key learnings']))

spreads.push(simpleNCardSpreadGenerator(['Strengths', 'Weaknesses', 'Advice']))
spreads.push(simpleNCardSpreadGenerator(['Opportunities', 'Challenges', 'Outcome']))
spreads.push(simpleNCardSpreadGenerator(['Option 1', 'Option 2', 'Option 3']))
spreads.push(simpleNCardSpreadGenerator(['Option 1', 'Option 2', 'What you need to know to make a decision']))
spreads.push(simpleNCardSpreadGenerator(['A solution', 'An alternate solution', 'How to choose']))

function simple3CardBalancedGenerator(card1, card2, card3) {
    return {
        id: slugify(`${card1} ${card2} ${card3}`),
        // name: `Balanced Spread`,
        group: 'Balanced',
        cards: [
            {
                number: 1,
                name: card1,
                position: {
                    x: 2,
                    y: 1,
                },
            },
            {
                number: 2,
                name: card2,
                rotation: 225,
                position: {
                    x: 1,
                    y: 2,
                },
            },
            {
                number: 3,
                name: card3,
                rotation: 135,
                position: {
                    x: 3,
                    y: 2,
                },
            }
        ]
    }
}

spreads.push(simple3CardBalancedGenerator('Mind', 'Body', 'Soul'))
spreads.push(simple3CardBalancedGenerator('Physical State', 'Emotional State', 'Spiritual State'))
spreads.push(simple3CardBalancedGenerator('Subconscious', 'Conscious', 'Super Conscious'))
spreads.push(simple3CardBalancedGenerator('Option 1', 'Option 2', 'Option 3'))
spreads.push(simple3CardBalancedGenerator('What I Think', 'What I Feel', 'What I Do'))

spreads.push({
    id: slugify(`single card reading`),
    name: `Draw a single card`,
    cards: [
        {
            number: 1,
            name: 'Card',
            position: {
                x: 1,
                y: 0,
            },
        }
    ]
})

function simple2CardCrossGenerator(card1, card2) {
    return {
        id: slugify(`situation challenge`),
        group: `Cross`,
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
                    x: 1,
                    y: 1,
                },
                rotation: 90,
                layer: 1,
            }
        ]
    }
}

spreads.push(simpleNCardSpreadGenerator(['Situation', 'Advice']))
spreads.push(simpleNCardSpreadGenerator(['Yes', 'No']))
spreads.push(simpleNCardSpreadGenerator(['Option 1', 'Option 2']))
spreads.push(simpleNCardSpreadGenerator(['Accept', 'Reject']))

spreads.push(simple2CardCrossGenerator('Situation', 'Challenge'))
spreads.push(simple2CardCrossGenerator('Aim', 'Blockage'))
spreads.push(simple2CardCrossGenerator('Blockage', 'Solution'))
spreads.push(simple2CardCrossGenerator('Ideal', 'Settling for'))
spreads.push(simple2CardCrossGenerator('Situation', 'Extra Info'))
spreads.push(simple2CardCrossGenerator('Querent', 'Adversary'))

spreads.push(simpleNCardSpreadGenerator(['Positive', 'Negative', 'Result', 'Advice']))

module.exports = spreads.map(spread => Spread.fromObject(spread))