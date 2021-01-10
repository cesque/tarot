<template>
    <div class="settings">
        <div class="content">
            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Fonts</div>
                    <a class="setting__reset" v-on:click="reset('fonts')">(Reset)</a>
                </div>
                <div class="setting__list">
                    <div class="setting__item setting__item--text">
                        <input class="setting__input" type="text" v-model="config.fonts.mono">
                    </div>
                </div>
            </div>

            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Colors</div>
                    <a class="setting__reset" v-on:click="reset('colors')">(Reset)</a>
                </div>
                <div class="setting__list">
                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Background</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.bg">
                    </div>

                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Midtone</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.mid">
                    </div>

                    <div class="setting__item setting__item--color">
                        <div class="setting__label">Foreground</div>
                        <div class="setting__separator"></div>
                        <input class="setting__input" type="color" v-model="config.colors.fg">
                    </div>
                </div>
            </div>

            <div class="setting">
                <div class="setting__header">
                    <div class="setting__title">Save</div>
                </div>
                <div class="setting__list">
                    <div class="setting__item">
                        <button class="settings__save-button" type="button" v-on:click="save">Save Settings</button>
                    </div>
                    <div class="settings__save-text" v-if="savedResult != null">
                        <div v-if="savedResult == true">Settings saved successfully!</div>
                        <div v-if="savedResult == false">Error saving settings!</div>
                    </div>
                </div>
            </div> 

            
            
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
        beforeRouteLeave(to, from, next) {
            const answer = !this.dirty || window.confirm('You have unsaved changes! Are you sure you want to leave this page without saving?')

            if (answer) {
                this.$store.commit('clearTemporaryConfig')
                next()
            } else {
                next(false)
            }
        },
        data() {
            return {
                dirty: false,
                savedResult: null,
                config: {
                    fonts: {
                        mono: this.$store.state.config.fonts.mono,
                    },
                    colors: {
                        bg: this.$store.state.config.colors.bg,
                        mid: this.$store.state.config.colors.mid,
                        fg: this.$store.state.config.colors.fg,
                    }
                },
                defaults: {
                    fonts: {
                        mono: this.$store.state.defaults.fonts.mono,
                    },
                    colors: {
                        bg: this.$store.state.defaults.colors.bg,
                        mid: this.$store.state.defaults.colors.mid,
                        fg: this.$store.state.defaults.colors.fg,
                    }
                },
            }
        },
        created: function() {
            this.$store.commit('setTemporaryConfig', this.config)
        },
        methods: {
            save: async function() {
                console.log('saving')
                this.$store.dispatch('saveConfig', this.config).then(result => {
                    this.savedResult = result
                    this.dirty = false

                    setTimeout(() => {
                        this.savedResult = null
                    }, 3000)
                })

            },
            reset: function(setting) {
                let from = this.defaults[setting]

                if(typeof setting == 'object') {
                    for(let key in setting) {
                        this.config[setting][key] = this.defaults[setting][key]
                    }
                } else {
                    this.config[setting] = this.defaults[setting]
                }
            }
        },
        computed: {
            cssVariables: function() {
                return {
                    '--color-bg': this.config.colors.bg,
                    '--color-mid': this.config.colors.mid,
                    '--color-fg': this.config.colors.fg,
                    '--font-mono': this.config.fonts.mono,
                }
            }
        },
        watch: {
            config: {
                deep: true,
                handler:function() {
                    this.dirty = true
                },
            }
        },
        components: {

        }
    })
</script>

<style lang="scss">
    .setting {
        padding: 40px 0;
        max-width: 900px;
        width: 100%;
        margin: 0 auto;

        .setting__header {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1rem;
            color: var(--color-mid);
            margin-bottom: 10px;

            display: flex;
            flex-direction: row;
            align-items: center;

            .setting__reset {
                margin-left: 10px;
                font-size: 0.6rem;
                cursor: pointer;

                background: white;
                color: black;
                padding: 2px 6px;
                padding-top: 4px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .setting__list {
            display: flex;  
            flex-direction: column;
        }

        .setting__item {
            padding-bottom: 10px;
        }
    }


.setting__item--text {
    display: flex;
    flex-direction: column;

    .setting__input {
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
}

.setting__item--color {
    display: flex;
    flex-direction: row;
    align-items: center;

    .setting__label {
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: var(--color-mid);
    }

    .setting__separator {
        height: 1px;
        margin: 0 20px;
        background: var(--color-mid);
        flex-grow: 1;
        flex-shrink: 0;
    }

    .setting__input {
        border: 1px solid black;
        outline: 1px solid white;
        background: none;
        padding: 0;
        height: auto;
        width: auto;

        &::-webkit-color-swatch {
            border: none;
            padding: 20px;
        }

        &::-webkit-color-swatch-wrapper {
            padding: 0;
        }
    }
}

.settings__save-button {
    appearance: none;
    background: white;
    color: black;
    border: none;
    outline: none;
    font-family: var(--font-mono);
    text-transform: uppercase;
    padding: 2px 10px;
    padding-top: 4px;
}
</style>