<template>
    <div class="spreads">
        <div class="content">
            <h2>Spreads</h2>

            <!-- <p>
                Choose a spread below to draw a reading.
            </p> -->

            <div class="spreads-group" v-for="group in groups">
                <div class="spreads-group__header">
                    <h3 class="spreads-group__title">{{ group.name }}</h3>
                    <div class="spreads-group__separator"></div>
                </div>
                <ul class="spreads-list">
                    <spread-item v-for="spread in group.spreads" v-bind:spread="spread"></spread-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import SpreadItem from '../components/SpreadItem.vue'

    import { Spread, SpreadCard } from '../models/spread'

    export default Vue.extend({
        data() {
            return {
                
            }
        },
        computed: {
            groups: function() {
                let groups = {}

                for(let spread of this.$store.state.spreads) {
                    let groupName = spread.group || spread.cards.length

                    if(!groups[groupName]) {
                        groups[groupName] = {
                            name: spread.group || `${spread.cards.length} card${spread.cards.length > 1 ? 's' : ''}`,
                            spreads: [],
                        }
                    }

                    groups[groupName].spreads.push(spread)

                }

                return groups
            }
        },
        methods: {

        },
        components: {
            SpreadItem,
        }
    })
</script>

<style lang="scss">
    .spreads-group {
        margin-top: 70px;
    }

    .spreads-group__header {
        display: flex;
        align-items: center;
    }

    .spreads-group__title {   
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: var(--color-mid);
    }

    .spreads-group__separator {
        background: var(--color-mid);
        height: 1px;
        flex-grow: 1;
        margin-left: 20px;
    }

    .spreads-list {
        margin: 0;
        margin-bottom: 40px;

        padding: 0;

        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;

        @media (min-width: $breakpoint-sm) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: $breakpoint-lg) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    // .spread {
    //     margin-bottom: 5px;
    //     list-style: none;
    // }

    // .spread-link {
    //     text-decoration: none;
    //     color: var(--color-fg);
    //     font-weight: bold;

    //     &:hover {
    //         color: var(--color-mid);
    //     }
    // }

    // .hl {
    //     color: var(--color-mid);
    //     font-weight: bold;
    // }
</style>