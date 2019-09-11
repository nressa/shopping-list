var shoppingList = new Vue({
	el: '#shopping-list',
	data: {
		header: 'shopping list',
		state: 'default',
		searchItem: null,
		newItem: '',
		newItemDescription: '',
		items:[
			{
				label: 'party hats',
				description: '24 Pcs Mickey Mouse or Disney Pricess Design',
				purchased: false,
				priority: false,
			},
			{
				label: 'monoblock chairs',
				description: '25 pcs monoblock chair for rent',
				purchased: true,
				priority: false,
			},
			{
				label: 'paper plates',
				description: '20 pieces of paper plates in 1 pack',
				purchased: false,
				priority: true,
			}
		]
	},
	computed: { 
		// computed properties change data for presentation wise
		//  Must not alter or change existing data
		reversedItems() {
			return this.items.slice(0).reverse();
		}

	},
	methods: {
		saveItem: function(){
			this.items.push({
				label: this.newItem,
				description: this.newItemDescription,
				purchased: false,
				priority: false
			});
			this.newItem = "";
		},
		changeState: function(newState){
			this.state = newState;
			this.newItem = "";
			this.newItemDescription = "";
		},
        togglePurchased: function(item) {
            item.purchased = !item.purchased
        },
        togglePriority: function(item) {
            item.priority = !item.priority
        },
	}
});