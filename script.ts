import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Tarot from './tarot'
import DefaultSpreads from './defaultSpreads'

console.log(DefaultSpreads)

import App from './App.vue'
import Meanings from './pages/Meanings.vue'
import About from './pages/About.vue'
import Input from './pages/Input.vue'
import Spreads from './pages/Spreads.vue'
import Spread from './pages/Spread.vue'

import { Card } from './models/card'

Vue.use(VueRouter)
Vue.use(Vuex)

let cards: Card[] = Tarot.cards.map(card => Card.fromObject(card))

function makePageTitle(name) {
    let siteName = 'hierophant.app'
    if (!name) {
        return siteName
    }

    return siteName + ' | ' + name
}

document.addEventListener('DOMContentLoaded', () => {
    const store = new Vuex.Store({
        state: {
            cards: cards,
            spreads: DefaultSpreads,
            fonts: {
                mono: "'Overpass Mono', monospace"
            },
            colors: {
                bg: '#0a3d62',
                mid: '#f6b93b',
                fg: '#b8e994',
                // bg: '#fff',
                // mid: '#ED4C67',
                // fg: '#000',
            }
        },
        mutations: {
            doSomething: (state, param) => {
                // state.test = param
            },
        },
        getters: {
            test: state => param => {
                return param
            },
            romanNumeral: state => n => {
                if (n == 0) {
                    return '0'
                }

                const lookup = [
                    { symbol: 'X', number: 10 },
                    { symbol: 'IX', number: 9 },
                    { symbol: 'V', number: 5 },
                    { symbol: 'IV', number: 4 },
                    { symbol: 'I', number: 1 },
                ]

                let roman = ''
                for (let pair of lookup) {
                    while (n >= pair.number) {
                        roman += pair.symbol
                        n -= pair.number
                    }
                }
                return roman
            },
            pageTitle: state => makePageTitle,
        }
    })

    let router = new VueRouter({
        // mode: 'history',
        routes: [
            {
                path: '/',
                component: Meanings,
                meta: {
                    title: makePageTitle('home')
                }
            },
            {
                path: '/meanings/',
                component: Meanings,
                meta: {
                    title: makePageTitle('card meanings')
                }
            },
            {
                path: '/meanings/:id',
                component: Meanings,
                meta: {
                    title: makePageTitle('card meanings')
                }
            },
            {
                path: '/spreads',
                component: Spreads,
                meta: {
                    title: makePageTitle('spreads')
                }
            },
            {
                path: '/spread/:id',
                component: Spread,
                meta: {
                    title: makePageTitle('spread')
                }
            },
            {
                path: '/about',
                component: About,
                meta: {
                    title: makePageTitle('about')
                }
            },
            {
                path: '/input',
                component: Input,
            }
        ]
    })

    router.beforeEach((to, from, next) => {
        document.title = to.meta.title

        next()
    })

    new Vue({
        el: '#app',
        store,
        router,
        render: h => h(App)
    })
})