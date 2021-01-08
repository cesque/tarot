<template>
    <div class="about">
        <div class="content prose">
            <h2>What &amp; Why?</h2>

            <p>
                I realised that I wanted a deck-agnostic tarot site where I
                could look up meanings very quickly. With so many different
                and wildly varying decks available, I wanted to not force one
                specific type of artwork, and instead let the user spend more
                time looking at their own deck!
            </p>

            <p>
                The goal is to allow for full, customisable tarot spreads
                alongside a powerful learning tool for looking up and learning
                card meanings. I'm also aiming to add customisation options for
                the site, including fonts and colours.
            </p>

            <p>
                If you have any ideas for what could make this site better,
                please send me a message on 
                <a href="https://twitter.com/cesque">twitter</a>, or
                <a href="mailto:euqsec@gmail.com">email me</a>. If you find the
                site useful, consider sending me a tip on <a href="https://ko-fi.com/cesque">ko-fi</a>!
            </p>

            <h2>Who?</h2>

            <p>
                I'm <a href="https://cesque.com">cesque</a>, a front-end web
                developer from Birmingham, UK. You can follow me on
                <a href="https://twitter.com/cesque">twitter</a>,
                or listen to my music on <a href="https://open.spotify.com/artist/7t0L8hVXCaAbv5AiCoCrD5?si=RlCuljRgQW24nlZmHd0ThQ">Spotify</a>.
            </p>

        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

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
    .prose {
        a {
            color: var(--color-mid);
        }
    }
</style>