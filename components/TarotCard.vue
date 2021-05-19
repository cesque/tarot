<template>
    <div class="tarot-card__container">
        <div class="tarot-card" v-bind:class="{ 
            reversed,
            'tarot-card--small': sizeValue == Size.Small,
            'tarot-card--medium': sizeValue == Size.Medium,
            'tarot-card--large': sizeValue == Size.Large,
        }" v-on:click="reverse">
            <div class="tarot-card__inner" v-if="card">
                <div class="tarot-card__top" v-bind:class="{ active: reversed }">
                    <div class="tarot-card__name" v-if="reversed">{{ card.name }}</div>
                </div>

                <div class="tarot-card__middle">
                    <div class="tarot-card__symbol">
                        <div class="tarot-card__suit" v-if="!card.isMajorArcana()">
                            <icon v-bind:name="suitSymbol"></icon>
                        </div>
                        <div class="tarot-card__number" v-if="!card.isMajorArcana()">{{ card.number }}</div>

                        <div class="tarot-card__number" v-if="card.isMajorArcana()">{{ majorArcanaRomanNumeral }}</div>
                    </div>
                    <div class="tarot-card__reversed" v-if="reversed">reversed</div>
                </div>

                <div class="tarot-card__bottom" v-bind:class="{ active: !reversed }">
                    <div class="tarot-card__name" v-if="!reversed">{{ card.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Size } from '../models/size'
    import { Suit } from '../models/card'
    import Icon from '../components/Icon.vue'

    export default Vue.extend({
        props: {
            card: Object,
            reversed: Boolean,
            size: {
                type: Number,
                default: 1
            },
        },
        data() {
            return {
                isReversed: this.reversed,

                Size
            }
        },
        computed: {
            suitSymbol: function() {
                return ['swords', 'wands', 'cups', 'pentacles'][this.card.suit - 1]
            },
            majorArcanaRomanNumeral: function() {
                return this.$store.getters.romanNumeral(this.card.number)
            },
            sizeValue: function() {
                return this.size as Size
            }
        },
        methods: {
            reverse: function() {
                this.$emit('reverse')
            }
        },
        created: function() {

        },
        components: {
            Icon,
        },
    })
</script>

<style lang="scss">
    .tarot-card__container {
        padding: 10px;

        @media (min-width: $breakpoint-sm) {
            padding: 25px;
        }

        @media (min-width: $breakpoint-lg) { 
            padding: 50px;
        }
    }

    .tarot-card {
        border: 1px solid var(--color-fg);
        border-radius: 5px;
        padding-bottom: 172%;
        position: relative;
        font-family: $font-mono;
        width: 100vw;
        cursor: pointer;
        max-width: 130px;

        &.tarot-card--medium {
            @media (min-width: $breakpoint-sm) {
                max-width: 200px;
            }
        }

        &.tarot-card--large {
            @media (min-width: $breakpoint-sm) {
                max-width: 200px;
            }

            @media (min-width: $breakpoint-lg) { 
                max-width: 350px;
            }
        }

        &:hover {
            background: choose-contrast-color(var(--color-bg));
        }
    }

    .tarot-card__inner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
    }

    .tarot-card__bottom, .tarot-card__top {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        letter-spacing: -0.05rem;
        min-height: 24px;

        .tarot-card--medium & {
            @media (min-width: $breakpoint-sm) {
                font-size: 1rem;
                min-height: 30px;
            }
        }

        .tarot-card--large & {
            @media (min-width: $breakpoint-sm) {
                font-size: 1rem;
                min-height: 30px;
            }

            @media (min-width: $breakpoint-lg) { 
                font-size: 1.1rem;
                min-height: 40px;
            }
        }
    }

    .tarot-card__middle {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tarot-card__bottom.active {
        padding-top: 5px;
        border-top: 1px solid var(--color-fg);
    }

    .tarot-card__top.active {
        padding-bottom: 5px;
        border-bottom: 1px solid var(--color-fg);

        .tarot-card__name {
            transform: rotate(180deg);
        }
    }


    .tarot-card__symbol {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.6rem;

        .tarot-card--medium & {
            @media (min-width: $breakpoint-sm) {
                font-size: 2rem;
            }
        }

        .tarot-card--large & {
            @media (min-width: $breakpoint-sm) {
                font-size: 2rem;
            }

            @media (min-width: $breakpoint-lg) {
                font-size: 3rem;
            }
        }
    }

    .tarot-card__suit {
        flex-shrink: 0;

        .icon {
            display: flex;
            align-items: center;
            width: auto;
            height: 70px;
        }
    }

    .tarot-card__number {
        padding-top: 10px;
    }

    .tarot-card__reversed {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--color-mid);
    }
</style>