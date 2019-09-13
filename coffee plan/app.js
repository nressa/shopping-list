
let CardPlanComponent = {
	template: '#card-plan-template',
	props: {
				name: {
					type: String,
					required: true
				},
				selectedPlan: {
					type: String
				}
			
	},
	computed: {
		isSelected() {
			return this.name == this.selectedPlan
		}
	},
	methods: {
				select() {
					this.$emit('select',this.name)
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
				plans: 	[ 'Brown Coffee', 'Espresso', 'Mocha' , 'Vanilla'],
				selectedPlan: null
		}
	},
	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan
		}
	}
}


new Vue({
	el: '#plan',
	components: {
		'plan-section': PlanSectionComponent,
	}
})
