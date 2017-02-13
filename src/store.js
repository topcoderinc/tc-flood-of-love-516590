import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		descriptors: [
			"A word to describe your average day",
			"A bad place to wake up",
			"Something you do while you're alone", 
			"A word to describe the death of pet",
			"Name of your valentine or someone you would like to have as a valentine",
			"Your name",
			"Favorite programming language",
			"Noteworthy author",
			"Someone besides your valentine you would want to have sex with",
			"A place you would take a date",
			"A good time for a date"
		],
		answers:[],
		isReady:false,
		isMale:true
	},
	getters:{
		count(state){
			return state.descriptors.length
		},
		descriptors(state){
			return state.descriptors
		},
		answers(state){
			return state.answers
		},
		isReady(state){
			return state.isReady
		},
		isMale(state){
			return state.isMale
		}
	},
	mutations:{
		addWord(state, word){
			state.answers.push(word)
		},
		removeDescriptor(state){
			state.descriptors.splice(0,1)
		},
		show(state){
			state.isReady = true			
		},
		isMale(state, bool){
			state.isMale = bool
		}
	}
})
