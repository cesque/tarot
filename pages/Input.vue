<template>
    <div class="about">
        <div class="content">
            <div class="card-info" v-for="card of cards">
                <h4>{{ card.name }}</h4>
                <input type="text" v-model="card.upright">
                <input type="text" v-model="card.reversed">
            </div>
            <button type="button" v-on:click="output">output</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                cards: []
            }
        },
        methods: {
            output: function() {
                console.log(this.cards)
            }
        },
        components: {

        },
        created: function() {
            let cards = this.$store.state.cards
            for(let card of cards) {
                if(!card.upright) {
                    card.upright = ""
                    card.reversed = ""
                }
            }

            this.cards = cards
        }
    })
</script>

<style lang="scss">
    .card-info {
        display: flex;
        flex-direction: column;
    }

    button {
        position: fixed;
        top: 50px;
        right: 50px;
    }
</style>