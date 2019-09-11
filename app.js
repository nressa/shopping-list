Vue.component('Itemcard', {
	template: '#item-card-template',
	props: ['name' ,'description']

})

var shoppingList = new Vue({
	el: '#shopping-list',
	data: {
		header: 'Shopping List',
		state: 'default',
		searchItem: null,
		newItem: '',
		newItemDescription: '',
		items:[
			{
				name: {
					type: String,
					required: true,
					default: 'party hats',
				},
				description: '24 Pcs Mickey Mouse or Disney Pricess Design',
			},
			{
				name: {
					type: String,
					required: true,
					default: 'monoblock chairs',
				},
				description: '25 pcs monoblock chair for rent',
			},
			{
				name: {
					type: String,
					required: true,
					default: 'paper plates',
				},
				description: '20 pieces of paper plates in 1 pack',
			}
		]
	},
});