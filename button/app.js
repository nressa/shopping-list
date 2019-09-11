Vue.component('click-counter',{
	template: '#counter-btn-template',
	data(){
		return{
			count: 0
		}
	}
})

new Vue({
	el: '#shopping-list',
});

// A Component date must be able to return an object