Vue.component('card-plan', {
	template: '#card-plan-template',
	props: {
				name: String, 
				description: String
	}
})

new Vue({
	el: '#plan',
	data: {
		plans: 	[
					{label: "Brown Coffee", description: "Quis ad proident ut ut aute dolor aliqua in voluptate elit sint culpa culpa qui eu ad excepteur quis."},
					{label: "Espresso", description: "Deserunt duis sint tempor in laborum dolore velit est."},	
					{label: "Mocha", description: "Id ullamco sunt sint ut voluptate magna quis in officia esse qui in occaecat do aute aliqua culpa."},
					{label: "Vanilla", description: "Lorem ipsum dolore quis dolor magna tempor deserunt nulla culpa sit reprehenderit esse tempor sed officia."}
				]
	}
})