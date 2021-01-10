<template>
    <div class="about">
        <div class="content prose">
            <h2>What?</h2>

            <p>
            <b>hierophant.app</b> is a tarot card meaning reference site, with 
            a clean, minimalist interface. You can also use the site to read
            full tarot spreads <span style="opacity: 0.5">(under construction!)</span>.
            There are also customisable styling options, with site color and
            fonts being editable in the settings menu.
            </p>

            <p>
                If you have any ideas for what could make this site better,
                please send me a message on 
                <a href="https://twitter.com/cesque">twitter</a>, or
                <a href="mailto:euqsec@gmail.com">email me</a>!
            </p>

            <h2>Why?</h2>

            <p>
                I realised that I wanted a deck-agnostic tarot site where I
                could look up meanings very quickly. With so many different
                and wildly varying decks available, I wanted to not force one
                specific type of artwork, and instead let the user spend more
                time looking at their own deck!
            </p>

            <p>
                I also love personalisation, and with such a simple color palette
                it seemed obvious to try to include some customisation of the
                site's colors so that users can tweak it to match their own
                preference.
            </p>

            <p>
                Personally, I use this site every day when I do my single card 
                reading for the day. It helps me quickly jot down the rough
                meaning behind a card, and can serve as a jumping off point for
                me to reference other resources for more information in greater
                detail.
            </p>

            <p>
                If you find the site useful, I'd love to hear about your experience
                with it! You can contact me on twitter or by email, as noted above.
                Also, if you feel like it, sending a tip my way on
                <a href="https://ko-fi.com/cesque">ko-fi</a> would be greatly
                appreciated!
            </p>

            <h2>Who?</h2>

            <p>
                I'm <a href="https://cesque.com">cesque</a>, a front-end web
                developer from Birmingham, UK. I'm interested in creating beautiful
                things, acquiring niche knowledge, solving Rubik's cubes and
                amassing as much cute stationery as I can.
            </p>
            <p>
                You can follow me on <a href="https://twitter.com/cesque">twitter</a>,
                or listen to my music on <a href="https://open.spotify.com/artist/7t0L8hVXCaAbv5AiCoCrD5?si=RlCuljRgQW24nlZmHd0ThQ">Spotify</a>.
            </p>

            <hr>

            <p>
                The tarot card data used on this site is modified from <a href="https://github.com/equokka/tarot-json">tarot-json</a> by <b>equokka</b>, under the <a href="https://github.com/equokka/tarot-json/blob/master/LICENSE">MIT License</a>.
            </p>

            <p>
                <b>Settings</b> icon by <b>i cons</b> from the Noun Project.
            </p>

            <p>
                <b>Help</b> icon by <b>Shiva</b> from the Noun Project
            </p>
            <p>
                <b>Cards</b> by <b>Dmitriy Ivanov</b> from the Noun Project
            </p>

            <hr> 

            <p>
                Site version: <b>{{ siteVersion }}</b>
            </p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                siteVersion: this.$store.state.siteVersion,
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

        hr {
            margin: 40px 0;
            border-color: var(--color-mid);
        }

        b {
            color: var(--color-mid);
        }
    }

</style>