
let PlanSectionItem = {
	template: '#plan-section-item-template',
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

let PlanSection = {
	template: '#plan-section-template',
	components: {
		'plan-section-item': PlanSectionItem,
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
		'plan-section': PlanSection,
	}
})
