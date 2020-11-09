<template>
    <div class="global-header">
        <div class="global-nav">
            <div class="global-nav__item" v-for="element of computedNav">
                <div v-if="element.empty"></div>

                <router-link v-else v-bind:to="element.link" >
                    <icon v-bind:name="element.icon"></icon>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Icon from './Icon.vue'

    export default Vue.extend({
        props: {
            
        },
        data() {
            return {
                nav: {
                    top: [
                        { link: '/meanings', icon: 'book', title: 'meanings' },
                        { link: '/spreads', icon: 'spread', title: 'spreads' },
                    ],
                    middle: { link: '/', icon: 'site-logo', title: 'home' },
                    bottom: [
                        // { link: '/about', icon: 'about', title: 'about' },
                    ]
                }
            }
        },
        computed: {
            computedNav: function() {
                let elements = []

                let max = Math.max(this.nav.top.length, this.nav.bottom.length)

                elements.push(...this.nav.top)
                for(let i = 0; i < max - this.nav.top.length; i++) {
                    elements.push({ empty: true })
                }

                elements.push(this.nav.middle)

                elements.push(...this.nav.bottom)
                for(let i = 0; i < max - this.nav.bottom.length; i++) {
                    elements.push({ empty: true })
                }

                return elements
            }
        },
        methods: {

        },
        created: function() {

        },
        components: {
            Icon
        }
    })
</script>

<style lang="scss">
    .global-header {
        display: flex;
        flex-direction: column;
        padding: 10px 50px;
        border-bottom: 1px solid var(--color-fg);
        height: auto;
        width: 100vw;

        @media (min-width: $breakpoint-lg) {
            flex-direction: row;
            height: 100vh;
            width: auto;
            padding: 150px 20px;
            border: none;
            border-right: 1px solid var(--color-fg);
        }
    }

    .global-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @media (min-width: $breakpoint-lg) {
            flex-direction: column;
        }
    }

    .global-nav__item {
        width: 35px;
        height: 35px;

        @media (min-width: $breakpoint-sm) {           
            width: 35px;
            height: 35px;
        }

        @media (min-width: $breakpoint-lg) {
            width: 50px;
            height: 50px;
        }
    }

</style>