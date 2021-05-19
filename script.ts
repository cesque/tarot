import packageJSON from "./package.json"

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Tarot from './tarot'
import DefaultSpreads from './defaultSpreads'
import ColorThemes from './colorThemes'

import App from './App.vue'
import Meanings from './pages/Meanings.vue'
import About from './pages/About.vue'
import Input from './pages/Input.vue'
import Spreads from './pages/Spreads.vue'
import Spread from './pages/Spread.vue'
import Settings from './pages/Settings.vue'

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

let defaults = {
    useColoredFavicon: false,
    fonts: {
        mono: "'Overpass Mono', monospace"
    },
    colors: {
        bg: '#ffffff',
        mid: '#ff0033',
        fg: '#000000',
    },
}

let loadedConfig = JSON.parse(localStorage.getItem('config'))

// let config = {
//     useColoredFavicon: loadedConfig?.useColoredFavicon,
//     fonts: {
//         mono: loadedConfig?.fonts?.mono ?? defaults.fonts.mono
//     },
//     colors: {
//         bg: loadedConfig?.colors?.bg ?? defaults.colors.bg,
//         mid: loadedConfig?.colors?.mid ?? defaults.colors.mid,
//         fg: loadedConfig?.colors?.fg ?? defaults.colors.fg,
//     },
// }

// this line is a way better version of the above
let config = { ...defaults, ...loadedConfig }

document.addEventListener('DOMContentLoaded', () => {
    const store = new Vuex.Store({
        state: {
            cards: cards,
            spreads: DefaultSpreads,
            siteVersion: packageJSON.version,
            colorThemes: ColorThemes,
            config: {
                useColoredFavicon: config.useColoredFavicon,
                fonts: {
                    mono: config.fonts.mono
                },
                colors: {
                    bg: config.colors.bg,
                    mid: config.colors.mid,
                    fg: config.colors.fg,
                },
            },
            defaults: {
                useColoredFavicon: config.useColoredFavicon,
                fonts: {
                    mono: config.fonts.mono
                },
                colors: {
                    bg: config.colors.bg,
                    mid: config.colors.mid,
                    fg: config.colors.fg,
                },
            },
            temporaryConfig: null
        },
        mutations: {
            saveConfig: (state, config) => {
                console.log(config)
                state.config.useColoredFavicon = config.useColoredFavicon

                for(let key in config.colors) {
                    state.config.colors[key] = config.colors[key]
                }

                if(config.fonts.mono) {
                    state.config.fonts.mono = config.fonts.mono
                }
            },
            setTemporaryConfig: (state, config) => {
                state.temporaryConfig = config
            },
            clearTemporaryConfig: state => {
                state.temporaryConfig = null
            }
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
        },
        actions: {
            saveConfig (context, config) {
                context.commit('saveConfig', config)
                try {
                    localStorage.setItem('config', JSON.stringify(context.state.config))
                    return true
                } catch(e) {
                    console.error('failed to save config to localstorage!')
                    console.error(e)
                    return false
                }
            }
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
                path: '/settings',
                component: Settings,
                meta: {
                    title: makePageTitle('settings')
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