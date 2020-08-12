<template>
    <div class="meanings">
        <div class="meanings__page">
            <div class="meanings__header">
                <input type="text" class="search" v-model="searchText" v-on:input="searchTextChanged" placeholder="search...">
            </div>
            
            <div class="meanings__inner">
                <div class="meanings__card">
                    <tarot-card
                        v-bind:card="card"
                        v-bind:reversed="isReversed"
                        size="large"
                        v-on:reverse="reverse"
                    ></tarot-card>
                    <div class="meanings__reverse-instruction">click card to reverse</div>
                </div>

                <div class="search-instructions" v-if="!card">
                    <p>start by typing the name of your card in the search bar above.</p>     
                </div>

                <div class="card-details" v-if="card">
                    <h2 class="card-details__title">
                        {{ card.name }} <span class="card-details__reversed" v-if="isReversed">(reversed)</span>
                    </h2>
                    <p class="card-details__meaning" v-for="meaning in meanings">{{ meaning }}</p>
                </div>
            </div>

            <div class="meanings__next" v-if="card">
                <icon name="chevron-down"></icon>
            </div>
        </div>
        <div class="meanings__page meanings__page--information" v-if="card">
            <div class="information" v-if="card.elemental">
                <div class="information__header">Elemental</div>
                <div class="information__text">{{ card.elemental }}</div>
            </div> 
            <div class="information" v-if="card.archetype">
                <div class="information__header">Archetype</div>
                <div class="information__text">{{ card.archetype }}</div>
            </div> 
            <div class="information" v-if="card.affirmation">
                <div class="information__header">Affirmation</div>
                <div class="information__text">{{ card.affirmation }}</div>
            </div> 
            <div class="information" v-if="card.hebrewAlphabet">
                <div class="information__header">Hebrew Alphabet</div>
                <div class="information__text">{{ card.hebrewAlphabet }}</div>
            </div> 
            <div class="information" v-if="card.numerology">
                <div class="information__header">Numerology</div>
                <div class="information__text">{{ card.numerology }}</div>
            </div> 
            <div class="information" v-if="card.questions">
                <div class="information__header">Questions</div>
                <div class="information__list">
                    <div class="information__text information__text--question" v-for="question in card.questions">{{ question }}</div>
                </div>
            </div> 
            <div class="spacer"></div>
            <div class="information" v-if="card">
                <div class="information__header">Links</div>
                <a v-bind:href="labyrinthosLink" class="information__text information__text--link" target="_blank">{{ labyrinthosLink }}</a>
            </div> 
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Fuse from 'fuse.js'

    import TarotCard from '../components/TarotCard.vue'
    import Icon from '../components/Icon.vue'

    export default Vue.extend({
        data() {
            return {
                searchText: '',
                card: null,
                isReversed: false,
                suggestions: [],
            }
        },
        methods: {
            searchTextChanged: function(event) {
                const options = {
                    ignoreLocation: true,
                    useExtendedSearch: true,
                    keys: [
                        'searchKey'
                    ]
                }

                const fuse = new Fuse(this.$store.state.cards, options)

                this.suggestions = fuse.search(this.searchText)

                if(this.suggestions.length) {
                    this.card = this.suggestions[0].item
                }
            },
            reverse: function() {
                this.isReversed = !this.isReversed
            }
        },
        computed: {
            meanings: function() {
                return this.card.meanings.new[this.isReversed ? 'reversed' : 'upright']
            },
            labyrinthosLink: function() {
                // might rewrite link behaviour
                let slug = this.card.name.toLowerCase().split(/\s+/).join('-')
                
                return `https://labyrinthos.co/blogs/tarot-card-meanings-list/${slug}-meaning-${this.card.isMajorArcana ? 'major-arcana-' : ''}tarot-card-meanings`
            }
        },
        components: {
            TarotCard,
            Icon,
        }
    })
</script>

<style lang="scss">
    .meanings {
        display: flex;
        flex-direction: column;
    }

    .meanings__page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;

        &.meanings__page--information {
            padding: 50px;
        }
    }

    .meanings__inner {
        display: flex;
        align-items: center;
        flex-direction: column;

        @media (min-width: $breakpoint-sm) {
            flex-direction: row;
        }
    }

    .meanings__card {
        padding: 10px;

        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: $breakpoint-sm) {
            padding-left: 50px;
        }

        @media (min-width: $breakpoint-lg) {
            padding-left: 125px;
        }

        @media (min-width: $breakpoint-xl) {
            padding-left: 300px;
        }
    }

    .meanings__reverse-instruction {
        position: absolute;
        bottom: -10px;
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--color-mid);

        @media (min-width: $breakpoint-lg) {
            bottom: 15px;
        }

        @media (min-width: $breakpoint-xl) {
            bottom: 30px;
        }
    }

    .card-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        @media (min-width: $breakpoint-sm) {
            align-items: flex-start;
        }

        .card-details__reversed {
            color: var(--color-mid);
        }

        .card-details__meaning {
            margin: 5px 0;
        }
    }

    .search-instructions {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        @media (min-width: $breakpoint-sm) {
            align-items: flex-start;
        }
    }

    .meanings__header {
        padding: 20px;
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
        // position: sticky;
        // top: 0;
        border-bottom: 1px solid var(--color-fg);
        z-index: 10;

        @media (min-width: $breakpoint-lg) {
            flex-direction: row;
            justify-content: flex-end;
            border-bottom: none;
        }
    }

    .search {
        // position: fixed;
        // top: 10px;
        // right: 10px;
        padding: 2px 20px;
        padding-top: 5px;
        font-size: 1rem;
        font-family: $font-mono;
        border: 1px solid var(--color-fg);
        background: transparent;
        outline: none;
        color: var(--color-fg);

        &::placeholder {
            text-align: center;
            color: var(--color-mid);
        }
    }

    .meanings__next {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
        display: none;

        .icon {
            color: var(--color-mid);
        }

        @media (min-width: $breakpoint-sm) {
            display: block;
        }
    }

    .information {
        padding: 40px 0;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;

        .information__header {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
            color: var(--color-mid);
            margin-bottom: 10px;
        }

        .information__text {
            font-size: 1.1rem;
            // text-transform: lowercase;
        }

        .information__list {
            display: flex;  
            flex-direction: column;
        }

        .information__text--question {
            padding: 10px 0;
            padding-top: 15px;

            border-top: 1px solid var(--color-mid);

            &:first-of-type {
                border-top: none;
            }
        }

        .information__text--link {
            color: var(--color-fg);
            text-decoration: underline;
            word-break: break-all;
        }
    }

    .spacer {
        flex-grow: 1;
    }
</style>