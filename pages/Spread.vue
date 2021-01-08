<template>
    <div class="spread">
        <div class="spread-page content">
            <h2 class="spread-header">
                <div class="spread-header__title">Spread</div>
                <div class="spread-header__name">{{ spread.name }}</div>
            </h2>

            <div class="spread-grid" v-bind:style="cssGrid">
                <div 
                    v-for="cell in grid"
                    v-bind:style="getCellCSS(cell)"
                    class="spread-cell"
                >
                    <div class="spread-card" v-for="(card, index) in cell.cards" v-bind:style="getCardCSS(cell, index, card)">
                        <div class="spread-card__inner" v-bind:style="getCardCounterRotationsCSS(card)">
                            <div class="spread-card__number">{{ $store.getters.romanNumeral(card.number) }}</div>
                            <div class="spread-card__name">{{ card.name }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="!hasDrawn" class="spread-button-container">
                <button type="button" class="spread-button" v-on:click="draw()">Draw Cards</button>
            </div>
        </div>
        <div class="spread-page spread-page--list">
            <p class="spread-description" v-if="spread.description">{{ spread.description }}</p>
            <div class="spread-list-header">Cards:</div>
            <ol class="spread-list">
                <li class="list-card" v-for="card in spread.cards">
                    <div class="list-card__header">
                        <div class="list-card__number">{{ $store.getters.romanNumeral(card.number) }}</div>
                        <div class="list-card__name">{{ card.name }}</div>
                        <div class="list-card__seperator"></div>
                        <div class="list-card__card-name" v-if="card.card">{{ card.card[0].name }}</div>
                        <div class="list-card__card-reversed" v-if="card.card && card.card[1]">Reversed</div>
                    </div>
                    <div class="list-card__content">
                        <div class="list-card__content-header" v-if="card.description">Description</div>
                        <div class="list-card__description" v-if="card.description">
                            {{ card.description }}
                        </div>
                        <div class="list-card__card-meaning" v-if="card.card">
                            <div class="list-card__content-header">Meaning</div>
                            <ul class="list-card__meanings">
                                <li class="list-card__meaning" v-for="meaning in card.card[0].meanings[card.card[1] ? 'upright' : 'reversed']">
                                    {{ meaning }}
                                </li>
                            </ul>
                            <router-link v-bind:to="'/meanings/' + getCardURL(card.card)" class="list-card__see-more">More information <icon name="chevron-right"></icon></a>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    import { Spread, SpreadCard } from '../models/spread'

    import Icon from '../components/Icon'

    let defaultSpread = new Spread('Past, Present & Future', 'this is a default spread')

    defaultSpread.addCard(SpreadCard.fromObject({
        number: 1,
        name: 'Past',
        description: "Things which happened in the past.",
        position: {
            x: 1,
            y: 1,
        },
    }))

    defaultSpread.addCard(SpreadCard.fromObject({
        number: 2,
        name: 'Present',
        position: {
            x: 3,
            y: 1,
        },
    }))

    defaultSpread.addCard(SpreadCard.fromObject({
        number: 3,
        name: 'Future',
        layer: 1,
        position: {
            x: 2,
            y: 2,
        },
    }))

    defaultSpread.addCard(SpreadCard.fromObject({
        number: 4,
        name: 'Future 2',
        layer: 2,
        rotation: 90,
        position: {
            x: 2,
            y: 2,
        },
    }))

    export default Vue.extend({
        data() {
            return {
                hasDrawn: false,
                spread: defaultSpread,
            }
        },
        computed: {
            width: function() {
                return Math.ceil(Math.max(...this.spread.cards.map(card => card.position.x)))
            },
            height: function() {
                return Math.ceil(Math.max(...this.spread.cards.map(card => card.position.y)))
            },
            cssGrid: function() {
                let width = this.width;
                let height = this.height;

                let css = {
                    'grid-template-columns': '1fr '.repeat(width),
                    'grid-template-rows': '1fr '.repeat(height),
                }

                return css
            },
            grid: function() {
                let grid = []

                for(let card of this.spread.cards) {
                    let x = card.position.x
                    let y = card.position.y

                    let cell = grid.find(cell => cell.x == x && cell.y == y)
                    if(cell) {
                        cell.cards.push(card)
                    } else {
                        grid.push({
                            x: x,
                            y: y,
                            cards: [card]
                        })
                    }
                }

                return grid
            }
        },
        methods: {
            getCellCSS: function(cell) {
                let css = {
                    'grid-column': `${cell.x} / span 1`,
                    'grid-row': `${cell.y} / span 1`,
                }

                return css
            },

            getCardCSS: function(cell, index, card) {
                let css = {}

                let offset = 0

                let nonRotatedCards = cell.cards.filter(card => !card.rotation)

                if(nonRotatedCards.length > 1) {
                    let maxOffset = 20
                    let step = (maxOffset * 2) / (nonRotatedCards.length - 1)

                    let offset = (step * index) - maxOffset

                    css['transform'] = `translate(${offset}px, ${-offset}px)`

                }

                if(card.layer) {
                    css['z-index'] = card.layer
                }

                if(card.rotation) {
                    // if card is rotated, we don't set translate, so we don't
                    // have to worry about overriding the previous transform
                    css['transform'] = `rotate(${card.rotation}deg)`
                }

                return css
            },

            getCardCounterRotationsCSS: function(card) {
                let css = {}
                if(card.rotation) {
                    css['transform'] = `rotate(${-card.rotation}deg)`
                }

                return css
            },

            getCardURL(card) {
                let cardObj = card[0]
                let isReversed = card[1]

                return cardObj.id + (isReversed ? '-r' : '')
            },

            draw: function() {
                this.hasDrawn = true;
                this.spread.draw(this.$store.state.cards);

                console.log(this.spread)
            }
        },
        created: function() {
            let params = this.$route.params

            if(params.id) {
                let spread = this.$store.state.spreads.find(x => x.id == params.id)

                if(spread) {
                    this.spread = spread
                } else {
                    this.$router.replace('/spreads')
                }
            } else {
                this.$router.replace('/spreads')
            }
        }
        components: {
            Icon,
        }
    })
</script>

<style lang="scss">
    .spread-page {
        display: flex;
        flex-direction: column;
    }

    .spread-header {
        margin-bottom: 70px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .spread-header__title {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);
        letter-spacing: 0.1rem;
        padding-bottom: 5px;
        font-weight: normal;
    }

    .spread-header__name {
        font-weight: bold;
    }

    .spread-grid {
        display: grid;
        grid-gap: 20px;
    }

    .spread-cell {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 100%;
        min-height: 150px;
    }

    .spread-card {
        position: absolute;
        border: 1px solid var(--color-fg);
        border-radius: 5px;
        font-family: $font-mono;
        width: 100vw;
        cursor: pointer;
        max-width: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 20px;
        text-align: center;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);
        background: var(--color-bg);

        &:hover {
            z-index: 9999 !important;
        }
    }

    .spread-card__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .spread-card__number {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);
        letter-spacing: 0.1rem;
    }



    .spread-button-container {
        margin-top: 100px;
        padding: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .spread-button {
        padding: 10px 50px;
        padding-top: 14px;
        border: 1px solid var(--color-mid);
        background: none;
        color: var(--color-mid);
        font-family: $font-mono;
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
            border: 1px dotted var(--color-mid);
        }

        &:focus {
            border: 1px dashed var(--color-mid);
            outline: none;
        }
    }



    .spread-page--list {
        margin-top: 100px;
        padding: 25px;
    }

    .spread-description {
        padding: 0 25px;
        margin-bottom: 50px;
    }

    .spread-list-header {
        padding: 0 25px;
        font-weight: bold;
        display: none;
    }

    .spread-list {
        padding: 0;
    }

    .list-card {
        list-style: none;
        margin-bottom: 70px;
    }

    .list-card__header {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }

    .list-card__number {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);
        letter-spacing: 0.1rem;
        margin-right: 10px;
        min-width: 40px;
        text-align: right;
    }

    .list-card__seperator {
        flex-grow: 1;
        height: 1px;
        background: var(--color-mid);
        align-self: center;
        margin: 0 20px;
    }

    .list-card__card-name {
        font-weight: bold;
    }

    .list-card__card-reversed {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);
        letter-spacing: 0.1rem;
        margin-left: 20px;
    }

    .list-card__content {
        margin: 20px 20px;

        @media (min-width: $breakpoint-sm) {
            margin: 20px 40px;
        }
    }

    .list-card__content-header {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);
        letter-spacing: 0.1rem;
    }


    .list-card__card-meaning {
        margin-top: 10px;
    }

    .list-card__meanings {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 10px;
    }

    .list-card__meaning {

    }

    .list-card__see-more {
        display: flex;
        // font-weight: bold;
        text-decoration: underline;
        color: var(--color-fg);

        .icon {
            width: 10px;
            height: 10px;
            margin-left: 5px;
            fill: var(--color-fg)
        }
    }

</style>