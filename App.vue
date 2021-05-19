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
            if(this.$store.state.temporaryConfig) {
                return {
                    '--color-bg': this.$store.state.temporaryConfig.colors.bg,
                    '--color-mid': this.$store.state.temporaryConfig.colors.mid,
                    '--color-fg': this.$store.state.temporaryConfig.colors.fg,
                    '--font-mono': this.$store.state.temporaryConfig.fonts.mono,
                }
            } else {
                return {
                    '--color-bg': this.$store.state.config.colors.bg,
                    '--color-mid': this.$store.state.config.colors.mid,
                    '--color-fg': this.$store.state.config.colors.fg,
                    '--font-mono': this.$store.state.config.fonts.mono,
                }
            }

        }
    },
    components: {
        GlobalHeader
    },
    created: function() {
        if(this.$store.state.config.useColoredFavicon) {
            window['setFavicon'](this.$store.state.config.colors.bg, this.$store.state.config.colors.fg)
        }
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

        transition: background 0.2s ease-in-out;

        min-height: 100vh;

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