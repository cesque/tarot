import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Tarot from './tarot'

import App from './App.vue'
import Meanings from './pages/Meanings.vue'
import About from './pages/About.vue'
import Input from './pages/Input.vue'
import Spreads from './pages/Spreads.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

// for(let card of Tarot.cards) {

//     // card.searchKey = card.number + ' ' + card.name
//     // card.isMajorArcana = card.arcana == 'Major Arcana'
//     // card.number = +card.number
//     let meanings = card.meanings

//     card.meanings = {
//         old: {
//             upright: meanings.light.map(x => x.trim().toLowerCase()),
//             reversed: meanings.shadow.map(x => x.trim().toLowerCase()),
//         },
//         new: {
//             upright: card.upright.split(',').map(x => x.trim().toLowerCase()),
//             reversed: card.reversed.split(',').map(x => x.trim().toLowerCase()),
//         }
//     }

//     card.affirmation = card['Affirmation']
//     card.astrology = card['Astrology']
//     card.archetype = card['Archetype']
//     card.elemental = card['Elemental']
//     card.hebrewAlphabet = card['Hebrew Alphabet']
//     card.spiritual = card['Mythical/Spiritual']
//     card.numerology = card['Numerology']
//     card.questions = card['Questions to Ask']
//     card.fortuneTelling = card['fortune_telling']

//     delete card['Affirmation']
//     delete card['Astrology']
//     delete card['Archetype']
//     delete card['Elemental']
//     delete card['Hebrew Alphabet']
//     delete card['Mythical/Spiritual']
//     delete card['Numerology']
//     delete card['Questions to Ask']
//     delete card['fortune_telling']
//     delete card.upright
//     delete card.reversed
// }

console.log(Tarot.cards)

function makePageTitle(name) {
    let siteName = 'tarot'
    if (!name) {
        return siteName
    }

    return siteName + ' | ' + name
}

document.addEventListener('DOMContentLoaded', () => {
    const store = new Vuex.Store({
        state: {
            cards: Tarot.cards,
            colors: {
                bg: '#8a5a44',
                mid: '#d69f7e',
                fg: '#edc4b3',
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
            }
        }
    })

    let router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Meanings,
                meta: {
                    title: makePageTitle('home')
                }
            },
            {
                path: '/meanings',
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