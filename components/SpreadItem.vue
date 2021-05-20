<template>
    <div class="spread">
        <router-link class="spread-link" v-bind:to="'/spread/' + spread.id">
            <h4 class="spread-name" v-if="spread.name">{{ spread.name }}</h4>
            <ul class="spread-cards">
                <li class="spread-cards__card" v-for="card in spread.cards">
                    {{ card.name }}
                </li>
            </ul>
        </router-link> 
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Spread } from '../models/spread'

    export default Vue.extend({
        props: {
            spread: Spread,
        },
        created: function() {
            
        }
    })
</script>

<style lang="scss">
    .spread {
        list-style: none;
    }

    .spread-link {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        text-decoration: none;
        color: var(--color-fg);
        font-weight: bold;
        border: 1px solid var(--color-mid);

        &:hover {
            color: var(--color-mid);
        }
    }

    .spread-name, .spread-type {
        margin: 0;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: var(--color-mid);
    }

    .spread-cards {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    .spread-cards__card {
        list-style: none;
        margin-bottom: 12px;
        line-height: 1;

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>