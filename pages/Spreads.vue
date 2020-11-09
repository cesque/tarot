<template>
    <div class="spreads">
        <div class="content">
            <h2>Spreads</h2>

            <p>here are some tarot spreads you can use to focus your readings. this functionality is in <span class="hl">beta</span>, so there's more spreads to come!</p>

            <ul class="spreads-list">
                <li class="spread" v-for="spread in $store.state.spreads">
                   <router-link class="spread-link" v-bind:to="'/spread/' + spread.id">{{ spread.name }}</router-link> 
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    import { Spread, SpreadCard } from '../models/spread'

    export default Vue.extend({
        data() {
            return {
                
            }
        },
        methods: {

        },
        components: {

        }
    })
</script>

<style lang="scss">
    .spreads-list {

    }

    .spread {
        margin-bottom: 5px;
    }

    .spread-link {
        text-decoration: none;
        color: var(--color-fg);
        font-weight: bold;

        &:hover {
            color: var(--color-mid);
        }
    }

    .hl {
        color: var(--color-mid);
        font-weight: bold;
    }
</style>