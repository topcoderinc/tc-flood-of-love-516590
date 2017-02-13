import Vue from 'vue'
import { store } from './store'
import anime from 'animejs'

// make sure page is loaded before scripts are ran

window.onload = function() {

    Vue.component('gender-input', {
        template: `
			<div id="gender-selector">
				<input checked name="gender-select" type="radio" id="male" v-on:click="isMale(true)">
				<label for="male">Male</label>
				<input name="gender-select" type="radio" id="female" v-on:click="isMale(false)">
				<label for="female">Female</label>
			</div>
		`,
        methods: {
            isMale: function(bool) {
                this.$store.commit('isMale', bool)
            }
        }
    })

    Vue.component('madlib', {
        template: `
			<div v-if="isReady">
				<div id="madlib">
					<p>
					It was a <strong>{{ answers[0] }}</strong>
					Tuesday, and I knew it was Valentine's day before I
					left <strong>{{ answers[1] }}</strong>.
					Alone on Valentine's day again with nothing better to do
					than work and <strong>{{ answers[2] }}</strong>.
					On the bright side, it was the last day of my
					TopCoder challenge, and all the other registrants were seemingly too busy
					planning their <strong>{{ answers[3] }}</strong>
					Valentine's Day to submit their work.
					When I logged onto my computer to finalize my code for the challenge, I found a
					bitbucket link in my
					email sent by <strong>{{ answers[4] }}</strong>, a friend of mine.
					The email body reada,</p>
					
					<p class="email"> “Hiya <strong>{{ answers[5] }}</strong>,
					I have to get to get this
					TopCoder challenge done by the end of the day. Was hoping you could check my
					code? (づ｡◕‿‿◕｡)づ, From <strong>{{ answers[4] }}</strong>”</p>
					
					<p>It was no trouble for  me, and I couldn’t miss the opportunity to help out
					a friend like <strong>{{ answers[4] }}</strong>.
					As I read, I realized the both of us
					were writing for the same challenge, and {{ gender ? 'his':'her'}}
					<strong>{{ answers[6]}}</strong> was nothing sort of
					brilliant. Line after line was like reading from
					<strong>{{ answers[7] }}</strong>.
					{{gender?'His':'Her'}} code was better
					than mine and if {{ gender? 'he':'she' }} were to submit,
					{{ gender?'he':'she'}} would most certainly beat me,
					yet there was nothing more attractive than the brain, and
					{{gender?'his':"her"}} brain was as
					sexy as <strong>{{ answers[8] }}</strong> stripping right before my eyes.
					I didn’t care about the challenge
					anymore. I started my reply. It said: “Your code looks really good! I think you
					have a good shot at winning. But also, <strong>{{ answers[4] }}</strong>,
					I don’t know if you have plans
					tonight, but I was wondering if maybe you would like to go to
					<strong>{{ answers[9]}}</strong>”
					My nerves
					were shot, but at least when {{gender ? "he":"she" }}
					denied me, I couldn’t feel sorry for
					myself because at least I took a chance. In minutes a reply came. It said.
					“I love <strong>{{ answers[9] }}</strong>! Want to get
					together around <strong>{{ answers[10]}}</strong>?” And like that, I shut
					down my computer and forgot about the challenge. I felt too busy: I had
					to plan for Valentine’s Day.
					</p>
				</div>
				<button v-on:click="reset()" type="button">Reset</button>
			</div>
		`,
        computed: {
            isReady() {
                return this.$store.getters.isReady
            },
            answers() {
                return this.$store.getters.answers
            },
            gender() {
                return this.$store.getters.isMale
            }
        },
        methods: {
            reset: function() {
                location.reload();
            }
        }
    })

    Vue.component('description', {
        template: '<p>{{ descriptors[0] }}</p>',
        computed: {
            descriptors() {
                return this.$store.getters.descriptors
            }
        }
    })

    Vue.component('scanner', {
        template: '\
			<input\
				v-if="count > 0"\
				ref="input"\
				class="textfield"\
				placeholder="type here"\
				v-on:keyup.enter="submitWord($event)" />',
        methods: {
            submitWord: function(event) {
                this.$store.commit('addWord', event.target.value)
                this.$store.commit('removeDescriptor')

                event.target.value = ""
            }
        },
        computed: {
            count() {
                return this.$store.getters.count
            }
        }
    })

    Vue.component('counter', {
        template: '<p id="counter">{{ count }} words left.</p>',
        computed: {
            count() {
                let storeCount = this.$store.getters.count

                if (storeCount === 0) {
                    this.$store.commit('show');
                }

                return storeCount
            }
        }
    })

    new Vue({
        el: '#app',
        store
    })
}
