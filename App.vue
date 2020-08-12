<template>
    <div class="container" v-bind:style="cssVariables">
        <global-header></global-header>
        <router-view class="page"></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import GlobalHeader from './components/GlobalHeader.vue'

export default Vue.extend({
    data() {
        return {
            
        }
    },
    computed: {
        cssVariables: function() {
            return {
                '--color-bg': this.$store.state.colors.bg,
                '--color-mid': this.$store.state.colors.mid,
                '--color-fg': this.$store.state.colors.fg,
            }
        }
    },
    components: {
        GlobalHeader
    }
})
</script>

<style lang="scss" scoped>
    .container {
        font-family: $font-mono;
        display: flex;
        flex-direction: column;
        width: 100vw;

        background: var(--color-bg);
        color: var(--color-fg);

        @media (min-width: $breakpoint-lg) {
            height: 100vh;
            flex-direction: row;
        }
    }

    .page {
        flex-grow: 1;
        overflow-y: auto;
    }
</style>