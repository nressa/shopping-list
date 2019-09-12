
let CardPlanComponent = {
	template: '#card-plan-template',
	props: {
				name: {
					type: String,
					required: true
				}
			},
	data() {
		return {

				selected: false
		}
	},
	methods: {
				select() {
					this.selected = true
				}
	}
}

let PlanSectionComponent = {
	template: '#plan-section-template',
	components: {
		'card-plan': CardPlanComponent,
	},
	data() {
		return {
				plans: 	[ 'Brown Coffee', 'Espresso', 'Mocha' , 'Vanilla']
		}
	}
}


new Vue({
	el: '#plan',
	components: {
		'plan-section': PlanSectionComponent,
	}
})
